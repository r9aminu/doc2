import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "active" : ""}`}>
      <div className="container">
        <a href="#" className="logo">
          <img src="/images/logo.svg" width={136} height={46} alt="Doclab home" />
        </a>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar="">
          <div className="navbar-top">
            <a href="#" className="logo">
              <img src="/images/logo.svg" width={136} height={46} alt="Doclab home" />
            </a>
            <button
              className="nav-close-btn"
              aria-label="clsoe menu"
              data-nav-toggler=""
              onClick={() => setIsMenuOpen(false)}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link title-md">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#services" className="navbar-link title-md">
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link title-md">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link title-md">
                Contact
              </a>
            </li>
          </ul>
          <ul className="social-list">
            <li>
              <a href="https://twitter.com" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com" className="social-link">
                <ion-icon name="logo-pinterest" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" className="social-link">
                <ion-icon name="logo-youtube" />
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler=""
          onClick={() => setIsMenuOpen(true)}
          style={{ position: "relative", zIndex: 1 }}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <a href="#" className="btn has-before title-md header-btn">
          <ion-icon name="call-outline" style={{ fontSize: "2rem" }} />
          <span>+1 (555) 555-1234</span>
        </a>
        <div className="overlay" data-nav-toggler="" data-overlay="" />
      </div>
    </header>
  );
}
