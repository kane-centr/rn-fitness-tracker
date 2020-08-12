export const HealthDataTypes = {
  // Dietary
  Biotin: 'DietaryBiotin',
  Caffeine: 'DietaryCaffeine',
  Calcium: 'DietaryCalcium',
  Carbohydrates: 'DietaryCarbohydrates',
  Chloride: 'DietaryChloride',
  Cholesterol: 'DietaryCholesterol',
  Chromium: 'DietaryChromium',
  Copper: 'DietaryCopper',
  EnergyConsumed: 'DietaryEnergyConsumed',
  FatMonounsaturated: 'DietaryFatMonounsaturated',
  FatPolyunsaturated: 'DietaryFatPolyunsaturated',
  FatSaturated: 'DietaryFatSaturated',
  FatTotal: 'DietaryFatTotal',
  Fiber: 'DietaryFiber',
  Folate: 'DietaryFolate',
  Iodine: 'DietaryIodine',
  Iron: 'DietaryIron',
  Magnesium: 'DietaryMagnesium',
  Manganese: 'DietaryManganese',
  Molybdenum: 'DietaryMolybdenum',
  Niacin: 'DietaryNiacin',
  PantothenicAcid: 'DietaryPantothenicAcid',
  Phosphorus: 'DietaryPhosphorus',
  Potassium: 'DietaryPotassium',
  Protein: 'DietaryProtein',
  Riboflavin: 'DietaryRiboflavin',
  Selenium: 'DietarySelenium',
  Sodium: 'DietarySodium',
  Sugar: 'DietarySugar',
  Thiamin: 'DietaryThiamin',
  VitaminA: 'DietaryVitaminA',
  VitaminB12: 'DietaryVitaminB12',
  VitaminB6: 'DietaryVitaminB6',
  VitaminC: 'DietaryVitaminC',
  VitaminD: 'DietaryVitaminD',
  VitaminE: 'DietaryVitaminE',
  VitaminK: 'DietaryVitaminK',
  Water: 'DietaryWater',
  Zinc: 'DietaryZinc',

  // Body
  Height: 'Height',
  BodyMass: 'BodyMass',
  BodyMassIndex: 'BodyMassIndex',
  LeanBodyMass: 'LeanBodyMass',
  BodyFatPercentage: 'BodyFatPercentage',
  WaistCircumference: 'WaistCircumference',

  // Workout
  Workout: 'Workout',
};

// SI units can be prefixed as follows:
// da   (deca-)   = 10                 d    (deci-)   = 1/10
// h    (hecto-)  = 100                c    (centi-)  = 1/100
// k    (kilo-)   = 1000               m    (milli-)  = 1/1000
// M    (mega-)   = 10^6               mc   (micro-)  = 10^-6
// G    (giga-)   = 10^9               n    (nano-)   = 10^-9
// T    (tera-)   = 10^12              p    (pico-)   = 10^-12
export const UnitTypes = {
  grams: 'g',
  miligrams: 'mg',
  kilograms: 'kg',
  meters: 'm',
  milimeters: 'mm',
  centimeters: 'cm',
  kilometers: 'km',
  liters: 'l',
  pascals: 'Pa',
  seconds: 's',
  joules: 'J',
  kelvin: 'K',
  siemens: 'S',
  hertz: 'hz',
  moles: 'mol',
  decibelHearingLevel: 'dBHL',
  celsius: 'degC',
  fahrenheit: 'degF',
  calories: 'cal',
  kilocalories: 'kcal',
  minutes: 'min',
  hours: 'hr',
  days: 'd',
  inches: 'in',
  feet: 'ft',
  miles: 'mi',
  ounces: 'oz',
  pounds: 'lb',
  stones: 'st',
  fluidOuncesImperial: 'fl_oz_imp',
  fluidOuncesUS: 'fl_oz_us',
  pintImperial: 'pt_imp',
  pintUS: 'pt_us',
  cupImperial: 'cup_us',
  cupUS: 'cup_imp',
};

export const WorkoutTypes = {
  AmericanFootball: 1,
  Archery: 2,
  AustralianFootball: 3,
  Badminton: 4,
  Barre: 58,
  Baseball: 5,
  Basketball: 6,
  Bowling: 7,
  Boxing: 8,
  Climbing: 9,
  CoreTraining: 59,
  Cricket: 10,
  CrossCountrySkiing: 60,
  CrossTraining: 11,
  Curling: 12,
  Cycling: 13,
  Dance: 14,
  DanceInspiredTraining: 15,
  DownhillSkiing: 61,
  Elliptical: 16,
  EquestrianSports: 17,
  Fencing: 18,
  Fishing: 19,
  Flexibility: 62,
  FunctionalStrengthTraining: 20,
  Golf: 21,
  Gymnastics: 22,
  HandCycling: 74,
  Handball: 23,
  HighIntensityIntervalTraining: 63,
  Hiking: 24,
  Hockey: 25,
  Hunting: 26,
  JumpRope: 64,
  Kickboxing: 65,
  Lacrosse: 27,
  MartialArts: 28,
  MindAndBody: 29,
  MixedCardio: 73,
  MixedMetabolicCardioTraining: 30,
  Other: 3000,
  PaddleSports: 31,
  Pilates: 66,
  Play: 32,
  PreparationAndRecovery: 33,
  Racquetball: 34,
  Rowing: 35,
  Rugby: 36,
  Running: 37,
  Sailing: 38,
  SkatingSports: 39,
  SnowSports: 40,
  Snowboarding: 67,
  Soccer: 41,
  Softball: 42,
  Squash: 43,
  StairClimbing: 44,
  Stairs: 68,
  StepTraining: 69,
  SurfingSports: 45,
  Swimming: 46,
  TableTennis: 47,
  TaiChi: 72,
  Tennis: 48,
  TrackAndField: 49,
  TraditionalStrengthTraining: 50,
  Volleyball: 51,
  Walking: 52,
  WaterFitness: 53,
  WaterPolo: 54,
  WaterSports: 55,
  WheelchairRunPace: 71,
  WheelchairWalkPace: 70,
  Wrestling: 56,
  Yoga: 57,
};
