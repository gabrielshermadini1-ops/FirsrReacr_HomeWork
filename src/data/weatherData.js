// საწყისი/სარეზერვო მონაცემები პოპულარული ქალაქებისთვის
export const defaultWeatherData = {
  "თბილისი": {
    city: "თბილისი",
    country: "საქართველო",
    temperature: 20,
    feelsLike: 19,
    condition: "მზიანი",
    icon: "☀️",
    humidity: 48,
    windSpeed: 14,
    pressure: 1018,
    forecast: [
      { id: 1, day: "ორშაბათი", date: "11 ნოემბერი", tempMax: 21, tempMin: 11, condition: "მზიანი", icon: "☀️", humidity: 45 },
      { id: 2, day: "სამშაბათი", date: "12 ნოემბერი", tempMax: 19, tempMin: 10, condition: "ნაწილობრივ ღრუბლიანი", icon: "⛅", humidity: 50 },
      { id: 3, day: "ოთხშაბათი", date: "13 ნოემბერი", tempMax: 16, tempMin: 9, condition: "მსუბუქი წვიმა", icon: "🌦️", humidity: 70 },
      { id: 4, day: "ხუთშაბათი", date: "14 ნოემბერი", tempMax: 17, tempMin: 8, condition: "ღრუბლიანი", icon: "☁️", humidity: 62 },
      { id: 5, day: "პარასკევი", date: "15 ნოემბერი", tempMax: 20, tempMin: 10, condition: "მოწმენდილი", icon: "☀️", humidity: 48 }
    ]
  },
  "ბათუმი": {
    city: "ბათუმი",
    country: "საქართველო",
    temperature: 22,
    feelsLike: 23,
    condition: "ნაწილობრივ ღრუბლიანი",
    icon: "⛅",
    humidity: 78,
    windSpeed: 18,
    pressure: 1014,
    forecast: [
      { id: 1, day: "ორშაბათი", date: "11 ნოემბერი", tempMax: 22, tempMin: 15, condition: "ნაწილობრივ ღრუბლიანი", icon: "⛅", humidity: 75 },
      { id: 2, day: "სამშაბათი", date: "12 ნოემბერი", tempMax: 21, tempMin: 14, condition: "წვიმა", icon: "🌧️", humidity: 85 },
      { id: 3, day: "ოთხშაბათი", date: "13 ნოემბერი", tempMax: 19, tempMin: 13, condition: "ჭექა-ქუხილი", icon: "⛈️", humidity: 88 },
      { id: 4, day: "ხუთშაბათი", date: "14 ნოემბერი", tempMax: 20, tempMin: 13, condition: "ნაწილობრივ ღრუბლიანი", icon: "⛅", humidity: 70 },
      { id: 5, day: "პარასკევი", date: "15 ნოემბერი", tempMax: 23, tempMin: 16, condition: "მზიანი", icon: "☀️", humidity: 65 }
    ]
  },
  "ქუთაისი": {
    city: "ქუთაისი",
    country: "საქართველო",
    temperature: 21,
    feelsLike: 20,
    condition: "მზიანი",
    icon: "☀️",
    humidity: 52,
    windSpeed: 11,
    pressure: 1016,
    forecast: [
      { id: 1, day: "ორშაბათი", date: "11 ნოემბერი", tempMax: 22, tempMin: 12, condition: "მზიანი", icon: "☀️", humidity: 50 },
      { id: 2, day: "სამშაბათი", date: "12 ნოემბერი", tempMax: 20, tempMin: 11, condition: "ღრუბლიანი", icon: "☁️", humidity: 58 },
      { id: 3, day: "ოთხშაბათი", date: "13 ნოემბერი", tempMax: 17, tempMin: 9, condition: "წვიმა", icon: "🌧️", humidity: 76 },
      { id: 4, day: "ხუთშაბათი", date: "14 ნოემბერი", tempMax: 19, tempMin: 10, condition: "მზიანი", icon: "☀️", humidity: 55 },
      { id: 5, day: "პარასკევი", date: "15 ნოემბერი", tempMax: 21, tempMin: 12, condition: "მზიანი", icon: "☀️", humidity: 48 }
    ]
  },
  "London": {
    city: "London",
    country: "გაერთიანებული სამეფო",
    temperature: 13,
    feelsLike: 12,
    condition: "მსუბუქი წვიმა",
    icon: "🌦️",
    humidity: 82,
    windSpeed: 22,
    pressure: 1009,
    forecast: [
      { id: 1, day: "ორშაბათი", date: "11 ნოემბერი", tempMax: 14, tempMin: 8, condition: "მსუბუქი წვიმა", icon: "🌦️", humidity: 80 },
      { id: 2, day: "სამშაბათი", date: "12 ნოემბერი", tempMax: 13, tempMin: 7, condition: "ღრუბლიანი", icon: "☁️", humidity: 75 },
      { id: 3, day: "ოთხშაბათი", date: "13 ნოემბერი", tempMax: 12, tempMin: 6, condition: "წვიმა", icon: "🌧️", humidity: 85 },
      { id: 4, day: "ხუთშაბათი", date: "14 ნოემბერი", tempMax: 11, tempMin: 5, condition: "ნაწილობრივ ღრუბლიანი", icon: "⛅", humidity: 68 },
      { id: 5, day: "პარასკევი", date: "15 ნოემბერი", tempMax: 13, tempMin: 7, condition: "მოწმენდილი", icon: "☀️", humidity: 62 }
    ]
  },
  "Paris": {
    city: "Paris",
    country: "საფრანგეთი",
    temperature: 15,
    feelsLike: 14,
    condition: "ნაწილობრივ ღრუბლიანი",
    icon: "⛅",
    humidity: 71,
    windSpeed: 15,
    pressure: 1015,
    forecast: [
      { id: 1, day: "ორშაბათი", date: "11 ნოემბერი", tempMax: 16, tempMin: 9, condition: "ნაწილობრივ ღრუბლიანი", icon: "⛅", humidity: 70 },
      { id: 2, day: "სამშაბათი", date: "12 ნოემბერი", tempMax: 15, tempMin: 8, condition: "მზიანი", icon: "☀️", humidity: 65 },
      { id: 3, day: "ოთხშაბათი", date: "13 ნოემბერი", tempMax: 13, tempMin: 7, condition: "მსუბუქი წვიმა", icon: "🌦️", humidity: 78 },
      { id: 4, day: "ხუთშაბათი", date: "14 ნოემბერი", tempMax: 14, tempMin: 7, condition: "ღრუბლიანი", icon: "☁️", humidity: 72 },
      { id: 5, day: "პარასკევი", date: "15 ნოემბერი", tempMax: 16, tempMin: 9, condition: "მზიანი", icon: "☀️", humidity: 60 }
    ]
  },
  "New York": {
    city: "New York",
    country: "აშშ",
    temperature: 16,
    feelsLike: 15,
    condition: "მზიანი",
    icon: "☀️",
    humidity: 50,
    windSpeed: 19,
    pressure: 1017,
    forecast: [
      { id: 1, day: "ორშაბათი", date: "11 ნოემბერი", tempMax: 17, tempMin: 8, condition: "მზიანი", icon: "☀️", humidity: 48 },
      { id: 2, day: "სამშაბათი", date: "12 ნოემბერი", tempMax: 16, tempMin: 9, condition: "ნაწილობრივ ღრუბლიანი", icon: "⛅", humidity: 52 },
      { id: 3, day: "ოთხშაბათი", date: "13 ნოემბერი", tempMax: 14, tempMin: 7, condition: "ქარიანი", icon: "💨", humidity: 55 },
      { id: 4, day: "ხუთშაბათი", date: "14 ნოემბერი", tempMax: 12, tempMin: 5, condition: "წვიმა", icon: "🌧️", humidity: 75 },
      { id: 5, day: "პარასკევი", date: "15 ნოემბერი", tempMax: 15, tempMin: 7, condition: "მოწმენდილი", icon: "☀️", humidity: 45 }
    ]
  },
  "Tokyo": {
    city: "Tokyo",
    country: "იაპონია",
    temperature: 18,
    feelsLike: 18,
    condition: "მოწმენდილი",
    icon: "☀️",
    humidity: 58,
    windSpeed: 10,
    pressure: 1020,
    forecast: [
      { id: 1, day: "ორშაბათი", date: "11 ნოემბერი", tempMax: 19, tempMin: 11, condition: "მოწმენდილი", icon: "☀️", humidity: 55 },
      { id: 2, day: "სამშაბათი", date: "12 ნოემბერი", tempMax: 18, tempMin: 12, condition: "ნაწილობრივ ღრუბლიანი", icon: "⛅", humidity: 60 },
      { id: 3, day: "ოთხშაბათი", date: "13 ნოემბერი", tempMax: 20, tempMin: 13, condition: "მზიანი", icon: "☀️", humidity: 52 },
      { id: 4, day: "ხუთშაბათი", date: "14 ნოემბერი", tempMax: 17, tempMin: 10, condition: "წვიმა", icon: "🌧️", humidity: 80 },
      { id: 5, day: "პარასკევი", date: "15 ნოემბერი", tempMax: 16, tempMin: 9, condition: "ღრუბლიანი", icon: "☁️", humidity: 65 }
    ]
  }
};

// პოპულარული ქალაქების სია სწრაფი არჩევისთვის
export const popularCities = ["თბილისი", "ბათუმი", "ქუთაისი", "London", "Paris", "New York", "Tokyo"];

