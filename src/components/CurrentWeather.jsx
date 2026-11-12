// CurrentWeather კომპონენტი - მიმდინარე ამინდის ძირითადი ბარათი
function CurrentWeather({ city, country, temperature, condition, icon, feelsLike }) {
  return (
    <div className="current-weather-card">
      <div className="current-weather-header">
        <div className="location-info">
          <span className="location-pin">📍</span>
          <h2 className="city-title">{city}</h2>
          {country && <span className="country-badge">{country}</span>}
        </div>
        <span className="live-indicator">● რეალური დრო</span>
      </div>

      <div className="current-weather-main">
        <div className="weather-visual">
          <span className="weather-icon-large" role="img" aria-label={condition}>
            {icon}
          </span>
          <span className="condition-text">{condition}</span>
        </div>

        <div className="weather-temp-block">
          <div className="temperature-value">
            {temperature}
            <span className="degree-unit">°C</span>
          </div>
          <p className="feels-like">
            შეიგრძნობა როგორც: <strong>{feelsLike}°C</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;

