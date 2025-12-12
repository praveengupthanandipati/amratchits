import React from 'react'
import About03img from "../assets/img/aboutpageimg03.jpg";

const Careers = () => {
  return (
    <React.Fragment>
        <section className="subpage">
            <div className="subpage-section">
                <div className="container main-container">
                    <div className="row justify-content-md-between">
                        <div className="col-md-5">
                            <img src={About03img} alt="Careers at Amrat Chits" className="img-fluid rounded-4 w-100 mb-4 mb-md-0"/>
                        </div>
                        <div className="col-md-6 align-self-center">
                             <div className="pb-3">
                                <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">CAREER OPPORTUNITIES</h6>
                                <h1 className="font-bold text-primarynew pb-3">Join Amrat Chits India Pvt. Ltd. - Explore Exciting Career Opportunities!</h1>
                                <p>We are currently recruiting for a variety of positions across multiple departments, and we invite passionate, driven professionals like you to join our journey. Here's your chance to make a meaningful impact and advance your career in the financial sector.

</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="current-openings bg-light py-2 py-md-5 mt-5">
                    <div className="container">
                        {/* bootstrap table */}
                        <div className="responsive-table">
                            <h3 className="text-primarynew font-bold">Available Positions:</h3>
                            <table className="table table-bordered mt-3 careers-table">
                                <thead>
                                    <tr>
                                        <th style={{width: '6%'}}>S.No</th>
                                        <th style={{width: '28%'}}>Name of Position</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Manager (Various Departments)','Lead and drive excellence in your department.'],
                                        ['Assistant Manager','Assist in managing key functions.'],
                                        ['Accounts','Manage financial transactions and reporting.'],
                                        ['Bid-Payable','Oversee bid-related payments and processes.'],
                                        ['Ledger','Maintain accurate financial records.'],
                                        ['Development','Contribute to innovative financial solutions.'],
                                        ['Verification','Ensure authenticity and compliance through meticulous checks.'],
                                        ['Bill Collectors','Play a vital role in timely collections and client relations.'],
                                        ['Recovery','Help recover dues and ensure financial stability.'],
                                        ['Legal','Provide legal counsel and support.'],
                                        ['Front Office','Be the face of Amrat Chits for our customers.'],
                                        ['Tele-callers','Engage with customers and offer solutions.'],
                                        ['Office Helpers','Support daily office operations.']
                                    ].map((row, idx) => (
                                        <tr key={idx}>
                                            <td className="align-middle">{idx+1}</td>
                                            <td className="align-middle"><strong>{row[0]}</strong></td>
                                            <td className="align-middle">{row[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="py-5 whyus-section">
                    <div className="container">
                         <h3 className="text-primarynew font-bold text-center pb-5">Why Join Us?</h3>
                        <div className="row text-center mt-4 justify-content-center">
                            <div className="col-6 col-md-3 mb-4">
                                <div className="why-card p-3 h-100 d-flex flex-column align-items-center">
                                    <div className="why-icon mb-3">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M9 21h6v-1.5a3 3 0 00-6 0V21zM12 2a6 6 0 00-4 10.2V15a3 3 0 003 3h2a3 3 0 003-3v-2.8A6 6 0 0012 2z" />
                                        </svg>
                                    </div>
                                    <h5 className="why-title">Innovative Environment</h5>
                                    <p className="why-desc">Work with forward-thinking teams and modern practices.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-4">
                                <div className="why-card p-3 h-100 d-flex flex-column align-items-center">
                                    <div className="why-icon mb-3">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M3 3v18h18v-2H5V3H3zm6 12l3-4 4 5 3-8 2 2V3H9v12z" />
                                        </svg>
                                    </div>
                                    <h5 className="why-title">Growth Opportunities</h5>
                                    <p className="why-desc">Clear career paths and learning opportunities to help you grow.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-4">
                                <div className="why-card p-3 h-100 d-flex flex-column align-items-center">
                                    <div className="why-icon mb-3">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M20 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM6 8c0-1.1-.9-2-2-2S2 6.9 2 8s.9 2 2 2 2-.9 2-2zm14 6v6H4v-6c0-2.2 4-3.5 8-3.5s8 1.3 8 3.5z" />
                                        </svg>
                                    </div>
                                    <h5 className="why-title">Customer-Centric</h5>
                                    <p className="why-desc">Be part of a team that puts customers at the heart of decisions.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-4">
                                <div className="why-card p-3 h-100 d-flex flex-column align-items-center">
                                    <div className="why-icon mb-3">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM12 13L3.36 8 12 4l8.64 4L12 13z" />
                                        </svg>
                                    </div>
                                    <h5 className="why-title">Professional Development</h5>
                                    <p className="why-desc">Training, mentorship and resources to advance your expertise.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-4">
                                <div className="why-card p-3 h-100 d-flex flex-column align-items-center">
                                    <div className="why-icon mb-3">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 2.95V20h6v-3.5c0-2.33-4.67-3.5-6-3.5z" />
                                        </svg>
                                    </div>
                                    <h5 className="why-title">Team Collaboration</h5>
                                    <p className="why-desc">A supportive culture focused on teamwork and shared success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="howtoapply py-3 py-md-5 bg-primarynew">
                    <div className="container">
                       <div className="row justify-content-center">
                          <div className="col-md-8 text-center">
                              <h2 className="text-center text-white pb-2">How to Apply ?</h2>
                        <p className='text-center text-white'>If you're excited about the prospect of joining Amrat Chits and taking your career to new heights, we encourage you to apply. Please send your updated resume to amratchits@gmail.com with the subject line "Amrat Chits Career Application - Don't forget to mention your preferred department. </p>
                        <p className='text-center text-white'>Your talent and dedication will be valued and rewarded at Amrat Chits India Pvt. Ltd. </p>
                        <h4 className="text-center text-white">Together We Grow!</h4>
                          </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Careers
