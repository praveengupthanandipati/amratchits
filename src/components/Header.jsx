import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  // Scroll event for header behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for fixed-header
  useEffect(() => {
    // Initial load animation
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    if (headerRef.current) {
      if (scrolled) {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          boxShadow: "0 8px 24px rgba(32,24,93,0.12)",
          duration: 0.7,
          ease: "elastic.out(1, 0.5)"
        });
      } else {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          duration: 0.5,
          ease: "power3.inOut"
        });
      }
    }
  }, [scrolled]);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownToggle = (itemId) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === itemId ? null : itemId);
    }
  };

  const handleMouseEnter = (itemId) => {
    if (!isMobile) {
      setActiveDropdown(itemId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <React.Fragment>
      <header className="header-section">
        {/* Header top - hidden on scroll */}
        <section className={`top-header d-none d-md-block${scrolled ? " top-header-hide" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <i className="bi bi-geo-alt-fill"></i> Raghav Ratna Towers, Abids,
                  Hyderabad - 500 001
                </p>
              </div>
              <div className="col-md-6">
                <div className="text-md-end">
                  <Link to="/careers" className="me-3">
                    Careers
                  </Link>
                  <Link to="/faqs" className="me-3">
                    FAQ's
                  </Link>                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`main-header${scrolled ? " fixed-header" : ""}`}
          ref={headerRef}
        >
          <div className="container">
            <div className="header-row justify-content-between align-items-center">
              {/* Left: Logo */}
              <div className="header-logo">
                <Link to="/" className="logo-link" onClick={closeMenu}>
                  <img
                    src={logo}
                    alt="AmratChits Logo"
                    className="logo-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                </Link>
              </div>
              {/* Right: Navigation Menu */}
              <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
                <ul className="nav-menu justify-content-md-end">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-uppercase font-medium" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link text-uppercase font-medium" onClick={closeMenu}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className="nav-link text-uppercase font-medium" onClick={closeMenu}>
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/guide" className="nav-link text-uppercase font-medium" onClick={closeMenu}>
                      Guide To Chitfund
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link text-uppercase font-medium" onClick={closeMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Mobile Menu Toggle */}
              <button
                className={`mobile-menu-toggle ${
                  isMenuOpen ? "toggle-active" : ""
                }`}
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </section>
        {/* Scroll-to-top button */}
        {scrolled && (
          <button
            className="scroll-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
        {/* Mobile Menu Overlay */}
        {isMobile && isMenuOpen && (
          <div className="mobile-overlay" onClick={closeMenu}></div>
        )}
      </header>
    </React.Fragment>
  );
};

export default Header;
