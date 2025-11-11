import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <React.Fragment>
        <footer>
            <div className='container'>
              {/** row */}
                <div className='row'>
                    <div className='col-md-6'>
                      <ul className="nav">
                          <li className="nav-item">
                            <Link className="nav-link active text-uppercase" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link text-uppercase" to="/">Company</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link text-uppercase" to="/">Chit Plans</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link text-uppercase" to="/">Services</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link text-uppercase" to="/">Guide</Link>
                          </li>
                        </ul>
                    </div>
                    <div className='col-md-6 text-md-end mt-3 mt-md-0'>
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
                    <div className='col-md-4'>
                       <div className='footer-col pe-2 pe-md-5'>
                           <h6 className='footer-title text-white pb-3 font-black'>Registered & Corporate Office:</h6>
                           <p>Flat No: 1111, 11th Floor, Raghav Ratna Towers Chirag Ali Lane, Abids, Hyderabad =- 500 001</p>
                           <p className='pb-0 m-0'><span className='text-white'>Phone :</span> 040-66200571</p>
                           <p className='pb-0 m-0'><span className='text-white'>Email :</span>info@amratchits.com</p>
                       </div>
                    </div>
                    <div className='col-md-4'>
                       <div className='footer-col pe-2 pe-md-5'>
                           <h6 className='footer-title text-white pb-3 font-black'>Branch Office:</h6>
                           <p>Flat No: 1111, 11th Floor, Raghav Ratna Towers Chirag Ali Lane, Abids, Hyderabad =- 500 001</p>
                           <p className='pb-0 m-0'><span className='text-white'>Phone :</span> 040-66200571</p>
                           <p className='pb-0 m-0'><span className='text-white'>Email :</span>info@amratchits.com</p>
                       </div>
                    </div>
                    <div className='col-md-4'>
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
                <div className='row rightsrow'>
                    <div className='col-12 text-center'></div>
                        <p className='text-white p-0 m-0'>© 2023 Amrat Chits. All rights reserved.</p>
                    </div>
                </div>            
        </footer>
    </React.Fragment>
  )
}

export default Footer
