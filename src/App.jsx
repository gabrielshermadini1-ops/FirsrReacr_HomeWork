import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import { fetchWeather } from "./services/weatherService";
import "./App.css";

function App() {
  // State: არჩეული ქალაქი (საწყისი მნიშვნელობა: თბილისი)
  const [city, setCity] = useState("თბილისი");

  // State: ამინდის მიღებული მონაცემები
  const [weather, setWeather] = useState(null);

  // State: ჩატვირთვის სტატუსი (Loading)
  const [loading, setLoading] = useState(true);

  // State: შეცდომის შეტყობინება
  const [error, setError] = useState(null);

  // useEffect ჰუკი: გამოიძახება კომპონენტის ჩატვირთვისას და city-ის ყოველი შეცვლისას
  useEffect(() => {
    let isCurrent = true;

    async function getWeatherData() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWeather(city);
        if (isCurrent) {
          setWeather(data);
        }
      } catch (err) {
        if (isCurrent) {
          setError(err.message || "ამინდის მონაცემების ჩატვირთვა ვერ მოხერხდა.");
        }
      } finally {
        if (isCurrent) {
          setLoading(false);
        }
      }
    }

    getWeatherData();

    // Cleanup ფუნქცია
    return () => {
      isCurrent = false;
    };
  }, [city]);

  // ქალაქის ძებნის ფუნქცია (გადაეცემა SearchBar კომპონენტს Props-ით)
  const handleSearch = (newCity) => {
    if (newCity && newCity !== city) {
      setCity(newCity);
    }
  };

  return (
    <div className="app-container">
      <div className="weather-wrapper">
        {/* სათაურის კომპონენტი */}
        <Header />

        {/* ძებნის კომპონენტი (Props: onSearch ფუნქცია და მიმდინარე city) */}
        <SearchBar onSearch={handleSearch} activeCity={city} />

        {/* ჩატვირთვის ინდიკატორი */}
        {loading && (
          <div className="status-container loading-state">
            <div className="spinner"></div>
            <p>მონაცემები იტვირთება...</p>
          </div>
        )}

        {/* შეცდომის შეტყობინება */}
        {!loading && error && (
          <div className="status-container error-state">
            <span className="error-icon">⚠️</span>
            <p className="error-text">{error}</p>
            <button
              className="retry-btn"
              onClick={() => handleSearch("თბილისი")}
            >
              თბილისზე დაბრუნება
            </button>
          </div>
        )}

        {/* ამინდის მონაცემების ასახვა (მხოლოდ მაშინ როცა ჩატვირთულია და შეცდომა არაა) */}
        {!loading && !error && weather && (
          <main className="weather-content">
            {/* მიმდინარე ამინდის ძირითადი ბარათი */}
            <CurrentWeather
              city={weather.city}
              country={weather.country}
              temperature={weather.temperature}
              condition={weather.condition}
              icon={weather.icon}
              feelsLike={weather.feelsLike}
            />

            {/* დამატებითი დეტალები: ტენიანობა, ქარის სიჩქარე, წნევა */}
            <WeatherDetails
              humidity={weather.humidity}
              windSpeed={weather.windSpeed}
              pressure={weather.pressure}
            />

            {/* 5-დღიანი პროგნოზის კომპონენტი (მასივის გადაცემა Props-ით) */}
            <Forecast forecastList={weather.forecast} />
          </main>
        )}

        {/* ფუტერი */}
        <footer className="weather-footer">
          <p>Weatherly © {new Date().getFullYear()} • დამზადებულია React-ით</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
