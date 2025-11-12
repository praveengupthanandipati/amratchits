import React, { useState, useEffect } from 'react'
import logo from '../assets/img/logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Menu data with submenus
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      href: '/',
      subMenu: null
    },
    {
      id: 2,
      title: 'Company',
      href: '/company',
      subMenu: [
        { title: 'About Us', href: '/company/about' },
        { title: 'Our Vision & Mission', href: '/company/visionmission' },
        { title: 'Leadership Team', href: '/company/leadership' },    
      ]
    },
    {
      id: 3,
      title: 'Chit Plans',
      href: '/chit-plans',
      subMenu: [
        { title: 'Monthly Chits - Long period', href: '/chit-plans/monthlychit-long' },
        { title: 'Monthly Chits - Short Period', href: '/chit-plans/monthlychit-short' },
        { title: 'Monthly Chits - Middle Period', href: '/chit-plans/monthlychit-middle' },
        { title: 'Daily Chits - Long Period', href: '/chit-plans/dailychit-long' },
        { title: 'Daily Chits - Short Period', href: '/chit-plans/dailychit-short' },        
      ]
    },
    {
      id: 4,
      title: 'Services',
      href: '/services',
      subMenu: [
        { title: 'Chit Fund Management', href: '/services/chit-management' },
        { title: 'Financial Consulting', href: '/services/consulting' },
        { title: 'Investment Advisory', href: '/services/investment' },
        { title: 'Loan Services', href: '/services/loans' },       
      ]
    },
    {
      id: 5,
      title: 'Guide',
      href: '/guide',
      subMenu: null
    },
     {
      id: 6,
      title: 'Careers',
      href: '/careers',
      subMenu: null
    }
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
        <div className="custom-container">
          <div className="header-row">            
            {/* Left Column - Logo */}
            <div className="header-logo">
              <a href="/" className="logo-link">
                <img 
                  src={logo} 
                  alt="AmratChits Logo" 
                  className="logo-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />               
              </a>
            </div>

            {/* Middle Column - Navigation Menu */}
            <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-menu">
                {menuItems.map((item) => (
                  <li 
                    key={item.id} 
                    className={`nav-item ${activeDropdown === item.id ? 'dropdown-active' : ''}`}
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
                        <span className={`dropdown-arrow ${activeDropdown === item.id ? 'arrow-up' : ''}`}>
                          ▼
                        </span>
                      )}
                    </a>
                    
                    {/* Submenu */}
                    {item.subMenu && (
                      <ul className={`sub-menu ${activeDropdown === item.id ? 'sub-menu-open' : ''}`}>
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
              
              {/* Mobile Connect Button (only visible in mobile canvas) */}
              {isMobile && (
                <a href="/contact" className="mobile-connect-btn" onClick={closeMenu}>
                  Let's Connect
                </a>
              )}
            </nav>

            {/* Right Column - Connect Button */}
            <div className="header-actions">
              <a href="/contact" className="connect-btn">
                Let's Connect
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`mobile-menu-toggle ${isMenuOpen ? 'toggle-active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobile && isMenuOpen && (
          <div className="mobile-overlay" onClick={closeMenu}></div>
        )}
      </header>
    </React.Fragment>
  )
}

export default Header
