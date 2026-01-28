import "../css/navbar.css";
export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">Raghava</div>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}
