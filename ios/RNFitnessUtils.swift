//
//  RNFitnessUtils.swift
//  RNFitnessTracker
//
//  Created by Matas on 2022-02-10.
//  Copyright © 2022 Facebook. All rights reserved.
//

import Foundation

@objc(RNFitnessUtilsTestttttttttt)
class RNFitnessUtilsTestttttttttt: NSObject {

    private static func setHoursMinutesSeconds(date: Date, hours: NSInteger, minutes: NSInteger, seconds: NSInteger) -> Date {
        return NSCalendar.current.date(bySettingHour: hours, minute: minutes, second: seconds, of: date)!;
    }
    
    static func endOfDay(date: Date) -> Date {
        print(self.setHoursMinutesSeconds(date: date, hours: 23, minutes: 59, seconds: 59));
        return self.setHoursMinutesSeconds(date: date, hours: 23, minutes: 59, seconds: 59);
    }
    
    static func daysAgo(date: Date, _ numberOfDays: Int) -> Date? {
        return date.addingTimeInterval(TimeInterval(-numberOfDays*86400));
    }
    
    static func beginningOfDay(date: Date) -> Date {
        self.setHoursMinutesSeconds(date: date, hours: 0, minutes: 0, seconds: 0)
    }
    
    static func startOfXDaysAgo(date: Date, numberOfDays: Int) -> Date {
        let day: Date? = self.daysAgo(date: date, numberOfDays)
        
        return self.setHoursMinutesSeconds(date: day!, hours: 0, minutes: 0, seconds: 0)
    }
    
}
