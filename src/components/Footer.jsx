import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const footerRef = useRef(null);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // GSAP Animation
    if (footerRef.current) {
      const footerElements = footerRef.current.querySelectorAll('.footer-anim');
      gsap.fromTo(footerElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <React.Fragment>
      <footer ref={footerRef}>
        <div className='container'>
          {/** row */}
          <div className='row'>
            <div className='col-md-6 footer-anim'>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link active text-uppercase" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/">Company</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/">Guide To Chitfund</Link>
                </li>
              </ul>
            </div>
            <div className='col-md-6 text-md-end mt-3 mt-md-0 footer-anim'>
              <Link to="/" className="nav-link d-inline-block me-3">
                <span className="icon-fb icomoon"></span>
              </Link>
              <Link to="/" className="nav-link d-inline-block me-3">
                <span className="icon-xpost icomoon"></span>
              </Link>
              <Link to="/" className="nav-link d-inline-block me-3">
                <span className="icon-lin icomoon"></span>
              </Link>
              <Link to="/" className="nav-link d-inline-block me-3">
                <span className="icon-gicon icomoon"></span>
              </Link>
            </div>
          </div>
          {/** row */}
          <div className='row mainrow'>
            <div className='col-md-4 footer-anim'>
              <div className='footer-col pe-2 pe-md-5'>
                <h6 className='footer-title text-white pb-3 font-black'>Registered & Corporate Office:</h6>
                <p>Flat No: 1111, 11th Floor, Raghav Ratna Towers Chirag Ali Lane, Abids, Hyderabad =- 500 001</p>
                <p className='pb-0 m-0'><span className='text-white'>Phone :</span> 040-66200571</p>
                <p className='pb-0 m-0'><span className='text-white'>Email :</span>info@amratchits.com</p>
              </div>
            </div>
            <div className='col-md-4 footer-anim'>
              <div className='footer-col pe-2 pe-md-5'>
                <h6 className='footer-title text-white pb-3 font-black'>Branch Office:</h6>
                <p>Flat No: 1111, 11th Floor, Raghav Ratna Towers Chirag Ali Lane, Abids, Hyderabad =- 500 001</p>
                <p className='pb-0 m-0'><span className='text-white'>Phone :</span> 040-66200571</p>
                <p className='pb-0 m-0'><span className='text-white'>Email :</span>info@amratchits.com</p>
              </div>
            </div>
            <div className='col-md-4 footer-anim'>
              <div className='footer-col pe-2 pe-md-5'>
                <ul>
                  <li>
                    <Link to="/" className="nav-link pb-3">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link pb-3">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link pb-3">Contact</Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link pb-3">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/** row */}
          <div className='row rightsrow footer-anim'>
            <div className='col-12 text-center'>
              <p className='text-white p-0 m-0'>© 2023 Amrat Chits. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <span className="icon-arrowup icomoon"></span>
        </button>
      )}
    </React.Fragment>
  )
}

export default Footer
