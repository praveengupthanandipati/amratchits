import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WhatsappImg from '../assets/img/whatsapp.png'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      <footer>
        <div className='container'>
          <div className='row mainrow'>
            <div className='col-md-4'>
              <div className='footer-col pe-2 pe-md-5'>
                <h6 className='footer-title text-white pb-3 font-black'>Registered & Corporate Office:</h6>
                <p>Flat No: 1111, 11th Floor, Raghav Ratna Towers Chirag Ali Lane, Abids, Hyderabad =- 500 001</p>
                <p className='pb-0 m-0'><span className='text-white'>Phone :</span> 040-66200571</p>
                <p className='pb-0 m-0'><span className='text-white'>Email :</span>info@amratchits.com</p>
              </div>
            </div>       
            <div className='col-md-4'>
              <div className='footer-col pe-2 pe-md-5 pt-5 mt-md-0'>
                <ul>
                  <li>
                    <Link to="/" className="nav-link pb-3">Facebook</Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link pb-3">Twitter</Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link pb-3">Linkedin</Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link pb-3">Google</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/** row */}
          <div className='row rightsrow'>
            <div className='col-12 text-center'>
              <p className='text-white p-0 m-0'>© 2026 Amrat Chits. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

     
      <a target="_blank" href="https://api.whatsapp.com/send?phone=+919676387760&text=Hi"
          className="whatsappicon">
          <img src={WhatsappImg} alt="" />
      </a>
    

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
