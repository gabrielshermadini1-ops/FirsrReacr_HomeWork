import ForecastCard from "./ForecastCard";

// Forecast კომპონენტი - 5-დღიანი პროგნოზის სექცია
// იღებს forecastList მასივს და map() მეთოდით ასახავს ForecastCard კომპონენტებს
function Forecast({ forecastList }) {
  if (!forecastList || forecastList.length === 0) {
    return null;
  }

  return (
    <div className="forecast-section">
      <div className="forecast-header">
        <h3 className="section-title">
          <span className="section-icon">📅</span>
          5-დღიანი პროგნოზი
        </h3>
        <span className="forecast-subtitle">ყოველდღიური ტემპერატურული ცვლილება</span>
      </div>

      <div className="forecast-grid">
        {forecastList.map((dayItem) => (
          <ForecastCard
            key={dayItem.id}
            day={dayItem.day}
            date={dayItem.date}
            tempMax={dayItem.tempMax}
            tempMin={dayItem.tempMin}
            condition={dayItem.condition}
            icon={dayItem.icon}
            humidity={dayItem.humidity}
          />
        ))}
      </div>
    </div>
  );
}

export default Forecast;

