import "../CssComponent/Navbar.css";

const Navbar = ({ sections }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/11sqF78adatjeDjoGxseu9VnUSwycDUsD/view?usp=sharing"
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span style={{ color: "#64ffda" }}>D</span>ivakar
      </div>
      <div className="navbar-menu">
        <div
          className="navbar-item"
          onClick={() => scrollToSection(sections.home)}
        >
          Home
        </div>
        <div
          className="navbar-item"
          onClick={() => scrollToSection(sections.about)}
        >
          About
        </div>
        <div
          className="navbar-item"
          onClick={() => scrollToSection(sections.skills)}
        >
          Skills
        </div>
        <div
          className="navbar-item"
          onClick={() => scrollToSection(sections.tools)}
        >
          Tools
        </div>
        <div
          className="navbar-item"
          onClick={() => scrollToSection(sections.project)}
        >
          Projects
        </div>
        <div
          className="navbar-item"
          onClick={() => scrollToSection(sections.certificates)}
        >
          Certificates
        </div>
        <div
          className="navbar-item"
          onClick={() => scrollToSection(sections.contact)}
        >
          Contact
        </div>
      </div>
      <div>
        <button className="button" onClick={handleDownload}>
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
