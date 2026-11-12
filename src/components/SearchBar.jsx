import { useState } from "react";
import { popularCities } from "../data/weatherData";

// SearchBar კომპონენტი - ქალაქის ძებნა და სწრაფი არჩევანი
function SearchBar({ onSearch, activeCity }) {
  const [cityInput, setCityInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      onSearch(cityInput.trim());
      setCityInput("");
    }
  };

  const handleQuickSelect = (city) => {
    onSearch(city);
  };

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="ჩაწერეთ ქალაქის სახელი (მაგ: თბილისი, London...)"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          {cityInput && (
            <button
              type="button"
              className="clear-btn"
              onClick={() => setCityInput("")}
              aria-label="გასუფთავება"
            >
              ✕
            </button>
          )}
        </div>
        <button type="submit" className="search-button">
          ძებნა
        </button>
      </form>

      {/* სწრაფი არჩევანის ღილაკები მასივის .map() მეთოდით */}
      <div className="quick-cities">
        <span className="quick-label">პოპულარული:</span>
        <div className="quick-tags">
          {popularCities.map((city, index) => {
            const isActive = activeCity && activeCity.toLowerCase() === city.toLowerCase();
            return (
              <button
                key={index}
                type="button"
                className={`quick-tag ${isActive ? "active" : ""}`}
                onClick={() => handleQuickSelect(city)}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

