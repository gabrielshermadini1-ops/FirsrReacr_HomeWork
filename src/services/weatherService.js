import { defaultWeatherData } from "../data/weatherData";

// WMO ამინდის კოდების ქართული შესაბამისობა
const weatherCodeMap = {
  0: { condition: "მოწმენდილი / მზიანი", icon: "☀️" },
  1: { condition: "მეტწილად მოწმენდილი", icon: "🌤️" },
  2: { condition: "ნაწილობრივ ღრუბლიანი", icon: "⛅" },
  3: { condition: "ღრუბლიანი", icon: "☁️" },
  45: { condition: "ნისლიანი", icon: "🌫️" },
  48: { condition: "ყინვიანი ნისლი", icon: "🌫️" },
  51: { condition: "მსუბუქი ჟინჟღლი", icon: "🌦️" },
  53: { condition: "ზომიერი ჟინჟღლი", icon: "🌦️" },
  55: { condition: "ძლიერი ჟინჟღლი", icon: "🌧️" },
  61: { condition: "მსუბუქი წვიმა", icon: "🌦️" },
  63: { condition: "ზომიერი წვიმა", icon: "🌧️" },
  65: { condition: "ძლიერი წვიმა", icon: "🌧️" },
  71: { condition: "მსუბუქი თოვლი", icon: "🌨️" },
  73: { condition: "ზომიერი თოვლი", icon: "🌨️" },
  75: { condition: "ძლიერი თოვლი", icon: "❄️" },
  80: { condition: "ხანმოკლე წვიმა", icon: "🌦️" },
  81: { condition: "ზომიერი ნალექი", icon: "🌧️" },
  82: { condition: "თავსხმა წვიმა", icon: "⛈️" },
  95: { condition: "ჭექა-ქუხილი", icon: "⛈️" },
  96: { condition: "ჭექა-ქუხილი და სეტყვა", icon: "⛈️" },
  99: { condition: "ძლიერი სეტყვა", icon: "⛈️" }
};

const georgianDays = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
const georgianMonths = [
  "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
  "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
];

// ფუნქცია ამინდის მონაცემების მისაღებად
export async function fetchWeather(cityName) {
  const normalizedQuery = cityName.trim();
  const lowerQuery = normalizedQuery.toLowerCase();

  // 1. ჯერ ვამოწმებთ ლოკალურ სარეზერვო ბაზაში
  const localMatchKey = Object.keys(defaultWeatherData).find(
    (key) => key.toLowerCase() === lowerQuery
  );

  try {
    // 2. ვცდილობთ რეალური API-დან (Open-Meteo - უფასო, API key-ის გარეშე) წამოღებას
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        normalizedQuery
      )}&count=1&language=en`
    );

    if (!geoRes.ok) {
      throw new Error("ქალაქის გეოლოკაცია ვერ მოიძებნა");
    }

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      // თუ API-მ ვერ იპოვა, მაგრამ ლოკალურში გვაქვს:
      if (localMatchKey) {
        return defaultWeatherData[localMatchKey];
      }
      throw new Error(`ქალაქი "${cityName}" ვერ მოიძებნა. გთხოვთ გადაამოწმოთ სახელი.`);
    }

    const place = geoData.results[0];
    const { latitude, longitude, name, country } = place;

    // ამინდის პროგნოზის გამოთხოვა
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;

    const weatherRes = await fetch(weatherUrl);
    if (!weatherRes.ok) {
      throw new Error("ამინდის მონაცემების მიღება ვერ მოხერხდა");
    }

    const data = await weatherRes.json();
    const currentCode = data.current.weather_code;
    const currentConditionInfo = weatherCodeMap[currentCode] || { condition: "სხვადასხვა", icon: "🌤️" };

    // 5-დღიანი პროგნოზის მასივის ფორმირება
    const forecast = [];
    const daily = data.daily;
    const daysCount = Math.min(5, daily.time.length);

    for (let i = 0; i < daysCount; i++) {
      const dateObj = new Date(daily.time[i]);
      const dayName = georgianDays[dateObj.getDay()];
      const monthName = georgianMonths[dateObj.getMonth()];
      const dateFormatted = `${dateObj.getDate()} ${monthName}`;
      const code = daily.weather_code[i];
      const conditionInfo = weatherCodeMap[code] || { condition: "სხვადასხვა", icon: "🌤️" };

      forecast.push({
        id: i + 1,
        day: i === 0 ? "დღეს" : dayName,
        date: dateFormatted,
        tempMax: Math.round(daily.temperature_2m_max[i]),
        tempMin: Math.round(daily.temperature_2m_min[i]),
        condition: conditionInfo.condition,
        icon: conditionInfo.icon,
        humidity: daily.precipitation_probability_max ? daily.precipitation_probability_max[i] : 50
      });
    }

    return {
      city: name,
      country: country || "",
      temperature: Math.round(data.current.temperature_2m),
      feelsLike: Math.round(data.current.apparent_temperature),
      condition: currentConditionInfo.condition,
      icon: currentConditionInfo.icon,
      humidity: Math.round(data.current.relative_humidity_2m),
      windSpeed: Math.round(data.current.wind_speed_10m),
      pressure: Math.round(data.current.surface_pressure),
      forecast: forecast
    };
  } catch (err) {
    // თუ ქსელი გაითიშა ან შეცდომა მოხდა, ვამოწმებთ ლოკალურ ბაზას
    if (localMatchKey) {
      return defaultWeatherData[localMatchKey];
    }
    // თუ ლოკალურშიც არ არის, ვაბრუნებთ შეცდომას
    throw err;
  }
}

