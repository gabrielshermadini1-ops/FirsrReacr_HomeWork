// WeatherDetails კომპონენტი - დამატებითი მეტრიკები: ტენიანობა, ქარი, წნევა
function WeatherDetails({ humidity, windSpeed, pressure }) {
  // მეტრიკების მასივი map()-ისთვის
  const details = [
    {
      id: "humidity",
      title: "ტენიანობა",
      value: `${humidity}%`,
      icon: "💧",
      description: humidity > 70 ? "მაღალი ტენიანობა" : "ნორმალური ტენიანობა"
    },
    {
      id: "wind",
      title: "ქარის სიჩქარე",
      value: `${windSpeed} კმ/სთ`,
      icon: "💨",
      description: windSpeed > 20 ? "ძლიერი ქარი" : "ზომიერი ნიავი"
    },
    {
      id: "pressure",
      title: "ატმ. წნევა",
      value: `${pressure} hPa`,
      icon: "🧭",
      description: "სტაბილური წნევა"
    }
  ];

  return (
    <div className="weather-details-grid">
      {details.map((item) => (
        <div key={item.id} className="detail-card">
          <div className="detail-card-header">
            <span className="detail-icon">{item.icon}</span>
            <span className="detail-title">{item.title}</span>
          </div>
          <div className="detail-value">{item.value}</div>
          <div className="detail-desc">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default WeatherDetails;

