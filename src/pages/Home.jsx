import React, { useEffect, useRef, useLayoutEffect } from "react";
import Homeherosection from "../components/Homeherosection";
import Homefeatures from "../components/Homefeatures";
import Homechitplans from "../components/Homechitplans";
import Sectiontitle from "../components/Sectiontitle";
import Whatsets from "../components/Whatsets";
import Testimonials from "../components/Testimonials";
import Whoweare from "../components/Whoweare";
import { Link } from "react-router-dom";
import welcomeImg from "../assets/img/welcome-img.jpg";
import chitfundImg from "../assets/img/chitfundsolutions-img.jpg";
import transparentImg from "../assets/img/transparentprocess.jpg";
import financialGuidenImg from "../assets/img/financial-guidance.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ item, index, servicesRef }) => {
  return (
    <div
      className="col-md-4 d-flex"
      ref={(el) => (servicesRef.current[index] = el)}
    >
      <div className="service-card-modern w-100 shadow-lg">
        <div className="card-inner">
          <div className="card-image-wrapper">
            <img src={item.img} alt={item.title} className="card-img" />
            <div className="card-image-overlay"></div>
          </div>
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link
              to="/chitplans"
              className="card-learn-more bg-transparent border-0 p-0 text-start text-decoration-none"
            >
              Read More
              <i className="fi fi-ts-arrow-right-long ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const welcomeRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const servicesRef = useRef([]);
  const servicesData = [
    {
      img: chitfundImg,
      title: "Chit Fund Solutions",
      desc: "We offer a wide range of chit fund options tailored to meet the diverse needs of our customers. Our chit funds provide an opportunity for disciplined savings and the chance to access funds when needed.",
    },
    {
      img: transparentImg,
      title: "Transparent Processes",
      desc: "We believe in maintaining transparency in all our processes. Our customers can trust that their investments are handled with utmost care and transparency.",
    },
    {
      img: financialGuidenImg,
      title: "Financial Guidance",
      desc: "We understand that financial decisions can be complex. Our expert team is always available to provide guidance and assist our customers in making informed investment choices.",
    },
  ];

  const customerAgentsRef = useRef([]);
  const testimonialsRef = useRef(null);

  useLayoutEffect(() => {
    return;
    // Set initial visibility for all elements
    gsap.set(
      [
        welcomeRef.current,
        ...servicesRef.current,
        ...customerAgentsRef.current,
        testimonialsRef.current,
      ],
      { clearProps: "all" },
    );

    // Welcome section animation (top-bottom, repeat on scroll)
    if (welcomeRef.current) {
      const welcomeCols = welcomeRef.current.querySelectorAll(".welcome-col");
      let observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              welcomeCols.forEach((el, idx) => {
                gsap.fromTo(
                  el,
                  { opacity: 0, y: -60 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: idx * 0.5,
                    ease: "power3.out",
                  },
                );
              });
            } else {
              welcomeCols.forEach((el) => {
                gsap.set(el, { opacity: 0 });
              });
            }
          });
        },
        { threshold: 0.3 },
      );
      observer.observe(welcomeRef.current);
    }

    // .service-card-modern GSAP animation on scroll with delay
    if (servicesSectionRef.current) {
      const serviceCols = servicesSectionRef.current.querySelectorAll(
        ".service-card-modern",
      );
      serviceCols.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: -60 });
      });
      let observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              serviceCols.forEach((el, idx) => {
                if (el) {
                  gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: idx * 0.5,
                    ease: "power3.out",
                  });
                }
              });
            } else {
              serviceCols.forEach((el) => {
                if (el) gsap.set(el, { opacity: 0, y: -60 });
              });
            }
          });
        },
        { threshold: 0.3 },
      );
      observer.observe(servicesSectionRef.current);
    }

    // Customer/Agents section animation (onscroll, left/right fade-in)
    if (customerAgentsRef.current.length === 2) {
      const [leftEl, rightEl] = customerAgentsRef.current;
      if (leftEl) gsap.set(leftEl, { opacity: 0, x: -60 });
      if (rightEl) gsap.set(rightEl, { opacity: 0, x: 60 });
      const parent = leftEl?.parentNode?.parentNode;
      if (parent) {
        let observer = new window.IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (leftEl) {
                  gsap.to(leftEl, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                  });
                }
                if (rightEl) {
                  gsap.to(rightEl, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: "power3.out",
                  });
                }
              } else {
                if (leftEl) gsap.set(leftEl, { opacity: 0, x: -60 });
                if (rightEl) gsap.set(rightEl, { opacity: 0, x: 60 });
              }
            });
          },
          { threshold: 0.3 },
        );
        observer.observe(parent);
      }
    }

    // Testimonials section animation
    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <React.Fragment>
      <section className="herosection">
        <Homeherosection />
      </section>

      {/* Features Section  */}
      <section className="features-section py-2 py-md-5">
        <Homefeatures />
      </section>
      {/* chit plans section */}
      <Homechitplans />

      {/* Refined "What we do?" Section */}
      <section className="what-we-do-refined" ref={welcomeRef}>
        <div className="section-bg-element"></div>
        <div className="container content-wrapper">
          <div className="sidebar-title mb-5 welcome-col">
            <h6 className="text-secondarynew text-uppercase letter-spacing font-bold mb-3">
              Our Core Process
            </h6>
            <h2 className="text-primarynew">How a Chit Group Works?</h2>
            <p className="lead text-muted">
              With transparency, trust, and timely payouts, we turn your
              disciplined savings into achievable realities.
            </p>
          </div>

          <div className="row g-5">
            {/* Left Side: Content */}
            <div className="col-lg-7">
              <div className="info-cards-container">
                {[
                  {
                    icon: "fi-rr-diamond",
                    title: "Chit Value",
                    desc: "The total pool of funds contributed by all the members (subscribers) of the chit fund for a particular chit scheme refers to the Chit Value.",
                  },
                  {
                    icon: "fi-rr-calendar-clock",
                    title: "Chit Period",
                    desc: "For the purpose of this illustration, we will consider the duration of the chit to be 50 months. This is known as the term period for the chit groups.",
                  },
                  {
                    icon: "fi-rr-users-alt",
                    title: "Subscribers",
                    desc: "The Foreman or Chit Fund company gathers 50 interested people for a chit group. These 50 persons are called subscribers.",
                  },
                ].map((item, idx) => (
                  <div className="info-card-modern welcome-col" key={idx}>
                    <div className="icon-wrapper">
                      <i className={`fi ${item.icon}`}></i>
                    </div>
                    <div className="card-text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image & Stats */}
            <div className="col-lg-5 welcome-col  d-none d-md-block">
              <div className="image-side-wrapper h-100 d-flex flex-column">
                <img
                  src={welcomeImg}
                  alt="Amrat Chits Process"
                  className="img-fluid main-image mb-4"
                />
                <div className="floating-badge">
                  <div className="badge-icon">
                    <i className="fi fi-rr-shield-check"></i>
                  </div>
                  <div className="badge-info">
                    <span>Government Regulated</span>
                    <small>100% Secure & Trusted</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services Section */}
      <section className="serviceshome">
        <div className="services-bg-decor">
          <div className="decor-circle circle-1"></div>
          <div className="decor-circle circle-2"></div>
        </div>
        <div className="container" ref={servicesSectionRef}>
          <div className="pb-4 pb-md-5 position-relative z-index-1">
            <Sectiontitle
              title="Our Services"
              titleClass="text-white text-uppercase font-bold mb-3"
            />
            <p className="text-white opacity-75 max-w-600">
              Our reliable chit schemes help you achieve financial goals through
              disciplined savings and timely payouts.
            </p>
          </div>
          <div className="row g-4 align-items-stretch position-relative z-index-1">
            {servicesData.map((item, idx) => (
              <ServiceCard
                key={idx}
                item={item}
                index={idx}
                servicesRef={servicesRef}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <Whatsets /> */}

      {/*customers / agents*/}
      <section className="customer-agents mt-3 mt-md-5">
        <div className="custom-container w-100 g-0">
          <div className="row g-0">
            <div
              className="col-md-6 customer-block left-customer  text-center border-end"
              ref={(el) => (customerAgentsRef.current[0] = el)}
            >
              <article>
                <h4 className="text-uppercase font-bold mb-4">
                  join us as an employee
                </h4>
                {/* <p>Amrat Chits empowers your personal financial journey. Our tailored chit schemes help you systematically save for life's big moments—a new home, your child's education, or a dream wedding.  </p> */}
                <Link to="/careers" className="btn-primary-light">
                  Find Out More
                </Link>
              </article>
            </div>
            <div
              className="col-md-6 customer-block right-customer  text-center border-end"
              ref={(el) => (customerAgentsRef.current[1] = el)}
            >
              <article>
                <h4 className="text-uppercase font-bold mb-4">
                  JOin us as an Agent
                </h4>
                {/* <p>Amrat Chits empowers your personal financial journey. Our tailored chit schemes help you systematically save for life's big moments—a new home, your child's education, or a dream wedding.  </p> */}
                <Link to="/contact" className="btn-primary-light">
                  Find Out More
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Who We are Section */}
      <Whoweare />

      {/* testimonials section */}
      <section className="testimonials-home" ref={testimonialsRef}>
        <div className="container">
          <Sectiontitle
            title="Testimonials"
            titleClass=" text-primarynew text-uppercase font-bold"
            descriptionClass="text-gray-20"
          />
          {/* testimonials carousel */}
          <div className="testimonials-carousel py-4">
            <Testimonials />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
