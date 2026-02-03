import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About03img from "../assets/img/aboutpageimg03.jpg";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        return;
        if (sectionRef.current) {
            const animElements = sectionRef.current.querySelectorAll('.careers-anim');

            gsap.fromTo(animElements,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }
    }, []);

    const jobs = [
        ['Manager (Various Departments)', 'Lead and drive excellence in your department.'],
        ['Assistant Manager', 'Assist in managing key functions.'],
        ['Accounts', 'Manage financial transactions and reporting.'],
        ['Bid-Payable', 'Oversee bid-related payments and processes.'],        
        ['Development', 'Contribute to innovative financial solutions.'],
        ['Verification', 'Ensure authenticity and compliance through meticulous checks.'],
        ['Bill Collectors', 'Play a vital role in timely collections and client relations.'],
        ['Recovery', 'Help recover dues and ensure financial stability.'],
        ['Legal', 'Provide legal counsel and support.'],
        ['Front Office', 'Be the face of Amrat Chits for our customers.'],
        ['Tele-callers', 'Engage with customers and offer solutions.'],
        ['Office Helpers', 'Support daily office operations.']
    ];

    const benefits = [
        { title: "Innovative Environment", desc: "Work with forward-thinking teams and modern practices.", icon: "fi-rr-rocket-lunch" },
        { title: "Growth Opportunities", desc: "Clear career paths and learning opportunities to help you grow.", icon: "fi-rr-chart-line-up" },
        { title: "Customer-Centric", desc: "Be part of a team that puts customers at the heart of decisions.", icon: "fi-rr-users" },
        { title: "Professional Development", desc: "Training, mentorship and resources to advance your expertise.", icon: "fi-rr-graduation-cap" },
        { title: "Team Collaboration", desc: "A supportive culture focused on teamwork and shared success.", icon: "fi-rr-handshake" }
    ];

    return (
        <React.Fragment>
            <section className="careers-page" ref={sectionRef}>
                {/* Hero Section */}
                <div className="careers-hero">
                    <div className="container position-relative z-index-1">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10 careers-anim">
                                <h6 className="text-secondarynew text-uppercase letter-spacing font-bold mb-3">Careers at Amrat</h6>
                                <h1 className="display-4 font-bold text-white mb-4">Build Your Future <br />With Amrat Chits India</h1>
                                <p className="lead text-white opacity-80 mb-0 px-lg-5">We are looking for passionate, driven professionals to join our journey. Make a meaningful impact and advance your career in the financial sector.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-pattern"></div>
                </div>

                {/* Intro Section */}
                <div className="py-5 mt-n5">
                    <div className="container py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-5 careers-anim">
                                <div className="intro-image-wrapper">
                                    <img src={About03img} alt="Careers at Amrat Chits" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-7 careers-anim">
                                <h6 className="text-secondarynew text-uppercase letter-spacing font-bold mb-3">Join the Team</h6>
                                <h2 className="display-5 font-bold text-primarynew mb-4">Explore Exciting Career Opportunities!</h2>
                                <p className="lead text-muted mb-4">At Amrat Chits, we believe that our employees are our greatest asset. We foster a culture of innovation, integrity, and collective growth.</p>
                                <div className="d-flex gap-4 mt-2">
                                    <div className="text-center p-3 rounded-4 bg-light flex-grow-1 border">
                                        <h3 className="font-bold text-primarynew mb-0">13+</h3>
                                        <small className="text-uppercase letter-spacing font-bold">Departments</small>
                                    </div>
                                    <div className="text-center p-3 rounded-4 bg-light flex-grow-1 border">
                                        <h3 className="font-bold text-primarynew mb-0">Active</h3>
                                        <small className="text-uppercase letter-spacing font-bold">Recruitment</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Openings Section */}
                <div className="bg-light py-5">
                    <div className="container py-5">
                        <div className="row mb-5 text-center justify-content-center careers-anim">
                            <div className="col-lg-8">
                                <h2 className="display-6 font-bold text-primarynew mb-3">Current Openings</h2>
                                <p className="text-muted lead">We are recruiting for diverse positions across multiple departments.</p>
                            </div>
                        </div>
                        <div className="row g-4 careers-anim">
                            {jobs.map((job, idx) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={idx}>
                                    <div className="job-card shadow-sm">
                                        <div className="job-num">Pos {idx + 1}</div>
                                        <h5 className="job-title mt-2">{job[0]}</h5>
                                        <p className="job-desc">{job[1]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="py-5">
                    <div className="container py-5">
                        <div className="row mb-5 text-center justify-content-center careers-anim">
                            <div className="col-lg-8">
                                <h2 className="display-6 font-bold text-primarynew mb-3">Why Join Us?</h2>
                                <p className="text-muted">Discover the perks of building your career with the Amrat family.</p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center careers-anim">
                            {benefits.map((benefit, idx) => (
                                <div className="col-lg-4 col-md-6" key={idx}>
                                    <div className="benefit-card shadow-sm">
                                        <div className="benefit-icon-wrapper">
                                            <i className={`fi ${benefit.icon}`}></i>
                                        </div>
                                        <h5>{benefit.title}</h5>
                                        <p>{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How to Apply Section */}
                <div className="py-5 mb-5">
                    <div className="container text-center careers-anim">
                        <div className="cta-box text-white">
                            <h2 className="display-5 font-bold mb-4">How to Apply?</h2>
                            <p className="lead mb-4 opacity-90 mx-auto" style={{ maxWidth: '800px' }}>
                                If you're excited about the prospect of joining Amrat Chits and taking your career to new heights, we encourage you to apply.
                            </p>
                            <p className="opacity-80">
                                Please send your updated resume to our recruitment team. Don't forget to mention your preferred department.
                            </p>
                            <div className="apply-email">
                                <i className="fi fi-rr-envelope me-2"></i> amratchits@gmail.com
                            </div>
                            <h4 className="mt-5 font-bold">Together We Grow!</h4>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Careers
