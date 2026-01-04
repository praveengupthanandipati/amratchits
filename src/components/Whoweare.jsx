import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import whoweareimg1 from '../assets/img/whoweare01.jpg';
import whoweareimg2 from '../assets/img/whoweare02.jpg';
import whoweareimg3 from '../assets/img/whoweare03.png';
import Sectiontitle from './Sectiontitle';
import { Link } from 'react-router-dom';
const Whoweare = () => {
    const sectionRef = useRef(null);

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        if (sectionRef.current) {
            const objects = sectionRef.current.querySelectorAll('.whoweare-animate');

            // Set initial state
            gsap.set(objects, { opacity: 0, y: 60 });

            ScrollTrigger.batch(objects, {
                onEnter: (batch) => {
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power3.out",
                        overwrite: true
                    });
                },
                start: "top 80%",
                // markers: true
            });
        }
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <React.Fragment>
            <div className="container" ref={sectionRef}>
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-5 left-sidewhovare position-relative mb-4 mb-md-0 whoweare-animate">
                        <div className='satisfy-customer position-absolute text-center bg-white p-3 rounded-2 shadow-sm d-flex align-items-center bg-white'>
                            <img src={whoweareimg3} alt="Who We Are Logo" className="me-3" />
                            <p>10,000 + Satisfied Customers</p>
                        </div>
                        <div className="row">
                            <div className="col-12 whoweare-animate">
                                <img src={whoweareimg1} alt="Who We Are Image 1" className="img-fluid mb-4 mb-md-0 w-100" />
                            </div>                           
                        </div>
                    </div>
                    <div className="col-md-6 right-sidewhovare whoweare-animate">
                        <Sectiontitle
                            title="WHO WE ARE?"
                            titleClass=" text-primarynew text-uppercase font-bold"
                            descriptionClass="text-gray-20"
                        />
                        <p>Welcome to Amrat Chits! We provide reliable chit fund schemes that help you achieve your financial goals through disciplined savings and timely payouts. Your secure future starts here..</p>
                        <div className='row pt-3 pt-md-5 border-top mt-5'>
                            <div className='col-md-6'>
                                <h3>10<span className='h1'>+</span></h3>
                                <h5 className='text-primarynew'>Years of Experience</h5>
                            </div>
                            <div className='col-md-6'>
                                <p>We help small and growing business cut carbon, boost credibility, and move forward with confidence</p>
                                <Link to="/" className="connect-btn text-uppercase mt-2 text-white">
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Whoweare
