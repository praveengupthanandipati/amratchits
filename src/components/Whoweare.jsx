import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import whoweareimg1 from '../assets/img/whoweare01.jpg';
import whoweareimg2 from '../assets/img/whoweare02.jpg';
import whoweareimg3 from '../assets/img/whoweare03.png';
import Sectiontitle from './Sectiontitle';
import { Link } from 'react-router-dom';
const Whoweare = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        if (sectionRef.current) {
            const objects = sectionRef.current.querySelectorAll('.whoweare-animate');
            objects.forEach((el) => {
                gsap.set(el, { opacity: 0, y: -60 });
            });
            let observer = new window.IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        objects.forEach((el, idx) => {
                            gsap.to(el, {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                delay: idx * 0.4,
                                ease: "power3.out"
                            });
                        });
                    } else {
                        objects.forEach((el) => {
                            gsap.set(el, { opacity: 0, y: -60 });
                        });
                    }
                });
            }, { threshold: 0.3 });
            observer.observe(sectionRef.current);
            return () => {
                if (observer && sectionRef.current) observer.unobserve(sectionRef.current);
            };
        }
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
                            <div className="col-6 whoweare-animate">
                                <img src={whoweareimg1} alt="Who We Are Image 1" className="img-fluid mb-4 mb-md-0"/>
                            </div>
                            <div className="col-6 whoweare-animate">
                                <img src={whoweareimg2} alt="Who We Are Image 2" className="img-fluid mb-4 mb-md-0"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 right-sidewhovare whoweare-animate">
                        <Sectiontitle
                            title="WHO WE ARE"
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
