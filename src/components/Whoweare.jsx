import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import whoweareimg1 from '../assets/img/whoweare01.jpg';
import { Link } from 'react-router-dom';

const Whoweare = () => {
    const sectionRef = useRef(null);

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        return;
        if (sectionRef.current) {
            const elements = sectionRef.current.querySelectorAll('.wwa-anim');

            // Set initial state
            gsap.set(elements, { opacity: 0, y: 40 });

            ScrollTrigger.batch(elements, {
                onEnter: (batch) => {
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        overwrite: true
                    });
                },
                start: "top 85%",
            });
        }
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <React.Fragment>
            <section className="who-we-are-refined" ref={sectionRef}>
                <div className="bg-shape"></div>
                <div className="container">
                    <div className="row align-items-center g-5">
                        {/* Left Side: Image Composition */}
                        <div className="col-lg-6 wwa-anim">
                            <div className="image-grid-composite">
                                <div className="abstract-dot-pattern"></div>
                                <div className="main-img-wrapper">
                                    <img src={whoweareimg1} alt="Amrat Chits Office" className="img-fluid w-100" />
                                </div>
                                <div className="experience-floating-card">
                                    <span className="exp-num">10+</span>
                                    <span className="exp-text">Years of <br />Excellence</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Content & Stats */}
                        <div className="col-lg-6 content-side">
                            <span className="section-tag wwa-anim">About Amrat Chits</span>
                            <h2 className="wwa-anim">Empowering Your Financial Dreams</h2>
                            <p className="who-we-are-p wwa-anim">
                                Since 1980, Amrat Chits (India) Pvt. Ltd. has been a trusted beacon of financial stability in Hyderabad. We combine traditional wisdom with modern efficiency to provide secure chitfund solutions that foster disciplined savings and community growth.
                            </p>

                            <div className="stats-grid-modern">
                                <div className="stat-item-modern wwa-anim">
                                    <div className="stat-icon">
                                        <i className="fi fi-rr-users"></i>
                                    </div>
                                    <span className="stat-val">10K+</span>
                                    <span className="stat-label">Happy Members</span>
                                </div>
                                <div className="stat-item-modern wwa-anim">
                                    <div className="stat-icon">
                                        <i className="fi fi-rr-bank"></i>
                                    </div>
                                    <span className="stat-val">Regulated</span>
                                    <span className="stat-label">Government Approved</span>
                                </div>
                                <div className="stat-item-modern wwa-anim">
                                    <div className="stat-icon">
                                        <i className="fi fi-rr-marker"></i>
                                    </div>
                                    <span className="stat-val">Hyderabad</span>
                                    <span className="stat-label">Core Presence</span>
                                </div>
                                <div className="stat-item-modern wwa-anim">
                                    <div className="stat-icon">
                                        <i className="fi fi-rr-handshake"></i>
                                    </div>
                                    <span className="stat-val">Trust</span>
                                    <span className="stat-label">4 Decades Legacy</span>
                                </div>
                            </div>

                            <div className="btn-wrap wwa-anim">
                                <Link to="/about" className="btn-primarynew px-5 py-3 rounded-pill font-bold text-uppercase letter-spacing">
                                    Learn Our Story
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Whoweare
