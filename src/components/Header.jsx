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

  // Menu data with submenus
  const menuItems = [
    {
      id: 1,
      title: "Home",
      href: "/",
      subMenu: null,
    },
    {
      id: 2,
      title: "About",
      href: "/about",
      subMenu: null,
    },
    {
      id: 3,
      title: "Chit Plans",
      href: "/chit-plans",
      subMenu: [
        {
          title: "Monthly Chits - Long period",
          href: "/chit-plans/monthlychit-long",
        },
        {
          title: "Monthly Chits - Short Period",
          href: "/chit-plans/monthlychit-short",
        },
        {
          title: "Monthly Chits - Middle Period",
          href: "/chit-plans/monthlychit-middle",
        },
        {
          title: "Daily Chits - Long Period",
          href: "/chit-plans/dailychit-long",
        },
        {
          title: "Daily Chits - Short Period",
          href: "/chit-plans/dailychit-short",
        },
      ],
    },
    {
      id: 4,
      title: "Services",
      href: "/services",
      subMenu: [
        { title: "Chit Fund Solutions", href: "/services/chit-management" },
        { title: "Transparent Processes", href: "/services/consulting" },
        { title: "Financial Guidance", href: "/services/investment" },        
      ],
    },
    {
      id: 5,
      title: "Guide",
      href: "/guide",
      subMenu: null,
    },
    {
      id: 6,
      title: "Contact",
      href: "/contact",
      subMenu: null,
    },
  ];

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
                  <Link to="/" className="me-3">
                    Careers
                  </Link>
                  <Link to="/" className="me-3">
                    FAQ's
                  </Link>
                  <Link to="/" className="me-3">
                    Blogs
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
                <a href="/" className="logo-link">
                  <img
                    src={logo}
                    alt="AmratChits Logo"
                    className="logo-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                </a>
              </div>
              {/* Right: Navigation Menu */}
              <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
                <ul className="nav-menu justify-content-md-end">
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      className={`nav-item ${
                        activeDropdown === item.id ? "dropdown-active" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href={item.href}
                        className="nav-link text-uppercase font-medium"
                        onClick={(e) => {
                          if (isMobile && item.subMenu) {
                            e.preventDefault();
                            handleDropdownToggle(item.id);
                          }
                        }}
                      >
                        {item.title}
                        {item.subMenu && (
                          <span
                            className={`dropdown-arrow ${
                              activeDropdown === item.id ? "arrow-up" : ""
                            }`}
                          >
                            ▼
                          </span>
                        )}
                      </a>
                      {/* Submenu */}
                      {item.subMenu && (
                        <ul
                          className={`sub-menu ${
                            activeDropdown === item.id ? "sub-menu-open" : ""
                          }`}
                        >
                          {item.subMenu.map((subItem, index) => (
                            <li key={index} className="sub-item">
                              <a
                                href={subItem.href}
                                className="sub-link"
                                onClick={closeMenu}
                              >
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
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
