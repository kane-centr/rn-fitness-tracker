import DeviceInfo from 'react-native-device-info';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { NativeModules } from 'react-native';
import { ResultMap } from 'react-native-permissions/dist/typescript/results';

import {
  HealthDataTypes,
  HKDataType,
  UnitTypes,
} from '../types/healthKitDataTypes';
import { HealthTrackerAPI } from './health';
import {
  DailyData,
  FitnessTrackerStatus,
  TodayAndDailyData,
} from '../types/fitnessTypes';
import { isIOS, isObject, ValueOf } from '../utils/helpers';
import { AndroidPermissionValues } from '../types/permissions';
import { GoogleFitDataTypes } from '../types/googleFitDataTypes';

const { RNFitnessTracker } = NativeModules;

/**
 * @module FitnessTrackerAPI
 */

const handleAndroidMotionTrackingPermissions = async (
  shouldRequestPermission: boolean,
): Promise<FitnessTrackerStatus> => {
  const apiLevel = await DeviceInfo.getApiLevel();
  const isMotionAuthNeeded = apiLevel >= 29;

  const action = shouldRequestPermission ? request : check;
  const motionAuthorized: ValueOf<ResultMap> = await action(
    PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION,
  );

  if (!isMotionAuthNeeded || motionAuthorized === RESULTS.GRANTED) {
    return { authorized: true, shouldOpenAppSettings: false };
  } else if (motionAuthorized === RESULTS.DENIED) {
    return { authorized: false, shouldOpenAppSettings: false };
  } else {
    return { authorized: false, shouldOpenAppSettings: true };
  }
};

/**
 * Returns if step tracking is authorized and available on both platforms
 * @param permissions {Array<AndroidPermissionValues>} - list of permissions to check if tracking is available
 * @return {Promise<FitnessTrackerStatus>}
 */
const isTrackingAvailableAndroid = async (
  permissions: AndroidPermissionValues[],
): Promise<FitnessTrackerStatus> => {
  if (!isIOS) {
    const motionAuthResult = await handleAndroidMotionTrackingPermissions(
      false,
    );
    if (motionAuthResult.authorized) {
      motionAuthResult.authorized = await RNFitnessTracker.isTrackingAvailable(
        permissions,
      );
    }

    return motionAuthResult;
  }
};

/**
 * Sets up step tracking for walking & running steps and distance
 * @param permissions {Array<AndroidPermissionValues>} - list of permissions to track
 * @return {Promise<FitnessTrackerStatus>}
 */
const authorize = async (permissions: {
  googleFitReadPermissions?: GoogleFitDataTypes[];
  googleFitWritePermissions?: GoogleFitDataTypes[];
  healthReadPermissions?: HealthDataTypes[];
  healthWritePermissions?: HealthDataTypes[];
}): Promise<boolean> => {
  if (isIOS) {
    const readTypes: HKDataType[] = permissions.healthReadPermissions || [];
    const shareTypes: HKDataType[] = permissions.healthWritePermissions || [];

    return await HealthTrackerAPI.authorize(shareTypes, readTypes);
  } else {
    const motionAuthResult = await handleAndroidMotionTrackingPermissions(true);
    if (motionAuthResult.authorized) {
      const readTypes: GoogleFitDataTypes[] =
        permissions.googleFitReadPermissions || [];
      motionAuthResult.authorized = await RNFitnessTracker.authorize(readTypes);
    }

    return motionAuthResult.authorized;
  }
};

/**
 * Returns number of steps today
 * @return {Promise<number>}
 */
const getStatisticTodayTotal = async (
  dataType: AndroidPermissionValues,
): Promise<number> => {
  if (isIOS) {
    // todo use datatype for ios
    const total = await HealthTrackerAPI.getStatisticTotalForTodayIOS({
      key: HealthDataTypes.StepCount,
      unit: UnitTypes.count,
    });
    return Number(total);
  } else {
    return RNFitnessTracker.getStatisticTodayTotal(dataType);
  }
};

/**
 * Returns steps today and this week's steps object
 * @return {Promise<TodayAndDailyData>}
 */
const getData = async (
  dataType: AndroidPermissionValues,
): Promise<TodayAndDailyData> => {
  let daily: DailyData;
  if (isIOS) {
    // todo change data type
    daily = await HealthTrackerAPI.getStatisticWeekDailyIOS({
      key: HealthDataTypes.StepCount,
      unit: UnitTypes.count,
    });
  } else {
    daily = await RNFitnessTracker.getStatisticWeekDaily(dataType);
  }

  let today = 0;

  if (isObject(daily)) {
    today = daily?.[Object.keys(daily).sort()[6]];
  }

  return { today, daily: daily || {} };
};

/**
 * Returns total distance in meters for given time range
 * @param dataType {AndroidPermissionValues}
 * @param startDate {Date | number}
 * @param endDate {Date | number}
 * @return {Promise<Number>}
 */
const queryTotal = async (
  dataType: AndroidPermissionValues,
  startDate: Date | number,
  endDate: Date | number,
): Promise<number> => {
  if (isIOS) {
    // Todo: make ios use DataType
    const total = await HealthTrackerAPI.queryTotalIOS({
      key: HealthDataTypes.StepCount,
      unit: UnitTypes.count,
      startDate,
      endDate,
    });

    return Number(total);
  } else {
    return RNFitnessTracker.queryTotal(dataType, +startDate, +endDate);
  }
};

/**
 * Returns walking and running distance this week in meters
 * @return {Promise<Number>} number of meters
 */
const getStatisticWeekTotal = async (
  dataType: AndroidPermissionValues,
): Promise<number> => {
  if (isIOS) {
    // todo use data types for ios
    const total = await HealthTrackerAPI.getStatisticTotalForWeekIOS({
      key: HealthDataTypes.StepCount,
      unit: UnitTypes.count,
    });

    return Number(total);
  } else {
    return RNFitnessTracker.getStatisticWeekTotal(dataType);
  }
};

/**
 * Returns total distance in meters for given time range
 * @param dataType {AndroidPermissionValues}
 * @param startDate {Date | number}
 * @param endDate {Date | number}
 * @return {Promise<Number>}
 */
const queryDailyTotals = async (
  dataType: AndroidPermissionValues,
  startDate: Date | number,
  endDate: Date | number,
): Promise<DailyData> => {
  if (isIOS) {
    // todo create method for ios
    return HealthTrackerAPI.queryDailyTotalsIOS({
      key: HealthDataTypes.StepCount,
      unit: UnitTypes.count,
      startDate,
      endDate,
    });
  } else {
    return RNFitnessTracker.queryDailyTotals(dataType, +startDate, +endDate);
  }
};

/**
 * Returns weekly steps object
 * @return {Promise<DailyData>}
 */
const getStatisticWeekDaily = async (
  dataType: AndroidPermissionValues,
): Promise<DailyData> => {
  if (isIOS) {
    // todo do types for ios
    return HealthTrackerAPI.getStatisticWeekDailyIOS({
      key: HealthDataTypes.StepCount,
      unit: UnitTypes.count,
    });
  } else {
    return RNFitnessTracker.getStatisticWeekDaily(dataType);
  }
};

export const FitnessTrackerAPI = {
  authorize,
  getData,
  getStatisticTodayTotal,
  getStatisticWeekDaily,
  getStatisticWeekTotal,
  isTrackingAvailableAndroid,
  queryDailyTotals,
  queryTotal,
};
