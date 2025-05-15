import "./AppBar.css";

export default function AppBar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="appbar">
      <div className="appbar-container">
        <h1 className="logo">BRAC</h1>
        <nav className="nav-links">
          <a onClick={() => scrollToSection("discover-section")}>Descubra</a>
          <a onClick={() => scrollToSection("tutorials-section")}>Tutorial</a>
          <a onClick={() => scrollToSection("leaders-section")}>Nós</a>
        </nav>
        <a
          href="https://discord.com/invite/y3sk3naW"
          className="explore-button"
        >
          <span className="explore-text">Junte-se Agora</span>
        </a>
      </div>
    </header>
  );
}
