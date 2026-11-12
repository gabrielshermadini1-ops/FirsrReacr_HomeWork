// Header კომპონენტი - აპლიკაციის სათაური და ლოგო
function Header() {
  const today = new Date().toLocaleDateString("ka-GE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <header className="weatherly-header">
      <div className="logo-container">
        <span className="logo-icon">⛅</span>
        <div className="logo-text">
          <h1 className="app-title">Weatherly</h1>
          <p className="app-subtitle">თანამედროვე ამინდის პროგნოზი</p>
        </div>
      </div>
      <div className="header-date">
        <span className="calendar-icon">📅</span>
        <span>{today}</span>
      </div>
    </header>
  );
}

export default Header;

