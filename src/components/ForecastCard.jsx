// ForecastCard კომპონენტი - ერთი დღის პროგნოზის ბარათი
function ForecastCard({ day, date, tempMax, tempMin, condition, icon, humidity }) {
  return (
    <div className="forecast-card">
      <div className="forecast-day">{day}</div>
      <div className="forecast-date">{date}</div>
      <div className="forecast-icon" role="img" aria-label={condition}>
        {icon}
      </div>
      <div className="forecast-condition">{condition}</div>
      <div className="forecast-temp-range">
        <span className="temp-max">{tempMax}°</span>
        <span className="temp-separator">/</span>
        <span className="temp-min">{tempMin}°</span>
      </div>
      {humidity !== undefined && (
        <div className="forecast-rain-prob">
          <span>💧</span>
          <span>{humidity}%</span>
        </div>
      )}
    </div>
  );
}

export default ForecastCard;

