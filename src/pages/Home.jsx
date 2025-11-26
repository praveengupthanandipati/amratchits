import React, { useEffect, useRef } from "react";
import Homeherosection from "../components/Homeherosection";
import Homefeatures from "../components/Homefeatures";
import Homechitplans from "../components/Homechitplans";
import Sectiontitle from "../components/Sectiontitle";
import Whatsets from "../components/Whatsets";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import welcomeImg from "../assets/img/welcome-img.jpg";
import chitfundImg from "../assets/img/chitfundsolutions-img.jpg";
import transparentImg from "../assets/img/transparentprocess.jpg";
import financialGuidenImg from "../assets/img/financial-guidance.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const welcomeRef = useRef(null);
  const servicesRef = useRef([]);
  const customerAgentsRef = useRef([]);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Set initial visibility for all elements
    gsap.set([
      welcomeRef.current,
      ...servicesRef.current,
      ...customerAgentsRef.current,
      testimonialsRef.current
    ], { clearProps: "all" });


    // Welcome section animation
    if (welcomeRef.current) {
      const welcomeElements = welcomeRef.current.querySelectorAll(".col-lg-3, .col-lg-5, .col-lg-3 figure");
      gsap.fromTo(welcomeElements,
        {
          opacity: 0,
          y: 60,
        },
        {
          scrollTrigger: {
            trigger: welcomeRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }

    // Services animation
    servicesRef.current.forEach((service, index) => {
      if (service) {
        gsap.fromTo(service,
          {
            opacity: 0,
            y: 80,
          },
          {
            scrollTrigger: {
              trigger: service,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
          }
        );
      }
    });

    // Customer/Agents blocks animation
    customerAgentsRef.current.forEach((block, index) => {
      if (block) {
        gsap.fromTo(block,
          {
            opacity: 0,
            y: 60,
          },
          {
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
          }
        );
      }
    });

    // Testimonials section animation
    if (testimonialsRef.current) {
      gsap.fromTo(testimonialsRef.current,
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
        }
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

      {/* Welcome Section */}
      <section className="welcomehome" ref={welcomeRef}>
        <div className="custom-container">
          <div className="row justify-content-between">
            <div className="col-lg-3">
              <Sectiontitle
                title="Welcome to Amrat Chits India Pvt. Ltd."
                titleClass=" text-primarynew text-uppercase font-bold"
              />
            </div>
            <div className="col-lg-5">
              <div className="top-about pb-5 border-bottom mb-5">
                <div className="d-flex">
                  <div className="number-welcome text-primarynew">7</div>
                  <div className="ps-3">
                    <p className="p-0 m-0 h4">+</p>
                    <p className="h5">Years</p>
                  </div>
                </div>
                <p className="pt-3">
                  At Amrat Chits, we are a trusted chit fund company dedicated
                  to providing reliable and efficient financial solutions. With
                  a strong presence in the market, we have been empowering
                  individuals and businesses to achieve their financial goals
                  for over 5 years.
                </p>
                <Link to="/contact" className="btn-primary-light">
                  View All team
                </Link>
              </div>
              <div className="quote-coo d-flex">
                <div>
                  <span class="icon-quotes icomoon"></span>
                </div>
                <div className="ceeomsg">
                  <h6>
                    True success is built by our people. My focus is empowering
                    every team member, because when you grow, our company and
                    our shared future thrives
                  </h6>
                  <div className="mt-5">
                    <h5 className="text-primarynew fw-bold">Sritik Saxena</h5>
                    <p className="text-gray-20">
                      <small>COO, Director-Finance</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <figure>
                <img
                  src={welcomeImg}
                  alt="Welcome to Amrat Chits India Pvt. Ltd."
                  className="img-fluid rounded-5"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* services Section */}
      <section className="serviceshome">
        <div className="g-0">
           <div className="row g-0">
              <div 
                className="col-md-4 g-0"
                ref={(el) => (servicesRef.current[0] = el)}
              >
                  <div className="service-col">
                     <figure className="m-0 p-0">
                        <img src={chitfundImg} alt="Chit Fund Solutions" className="img-fluid"/>
                      </figure>
                      <article>
                         <h3>Chit Fund Solutions</h3>
                         <p className="p-0 m-0">We offer a wide range of chit fund options tailored to meet the diverse needs of our customers. Our chit funds provide an opportunity for disciplined savings and the chance to access funds when needed.</p>
                      </article>
                  </div>
              </div>
                  <div 
                    className="col-md-4 g-0"
                    ref={(el) => (servicesRef.current[1] = el)}
                  >
                  <div className="service-col">
                     <figure className="m-0 p-0">
                        <img src={transparentImg} alt="Chit Fund Solutions" className="img-fluid"/>
                      </figure>
                      <article>
                         <h3>Transparent Processes</h3>
                         <p className="p-0 m-0">We believe in maintaining transparency in all our processes. Our customers can trust that their investments are handled with utmost care and transparency.</p>
                      </article>
                  </div>
              </div>
                  <div 
                    className="col-md-4 g-0"
                    ref={(el) => (servicesRef.current[2] = el)}
                  >
                  <div className="service-col">
                     <figure className="m-0 p-0">
                        <img src={financialGuidenImg} alt="Chit Fund Solutions" className="img-fluid"/>
                      </figure>
                      <article>
                         <h3>Financial Guidance</h3>
                         <p className="p-0 m-0">We understand that financial decisions can be complex. Our expert team is always available to provide guidance and assist our customers in making informed investment choices.</p>
                      </article>
                  </div>
              </div>
           </div>
        </div>
      </section>

      <Whatsets />

      {/*customers / agents*/}
      <section className="customer-agents">
        <div className="custom-container w-100 g-0">
            <div className="row g-0">
              <div 
                className="col-md-6 customer-block left-customer  text-center border-end"
                ref={(el) => (customerAgentsRef.current[0] = el)}
              >
                <article>
                   <h4 className="text-uppercase font-bold mb-2">Amrat for Individuals Customers</h4>
                   <p>Amrat Chits empowers your personal financial journey. Our tailored chit schemes help you systematically save for life's big moments—a new home, your child's education, or a dream wedding. </p>
                    <Link to="" className="btn-primary-light">Find Out More</Link>
                </article>               
              </div>
              <div 
                className="col-md-6 customer-block right-customer  text-center border-end"
                ref={(el) => (customerAgentsRef.current[1] = el)}
              >
                <article>
                   <h4 className="text-uppercase font-bold mb-2">Amrat Chits for Agents</h4>
                   <p>Amrat Chits empowers your personal financial journey. Our tailored chit schemes help you systematically save for life's big moments—a new home, your child's education, or a dream wedding. </p>
                    <Link to="" className="btn-primary-light">Find Out More</Link>
                </article>               
              </div>
            </div>
        </div>
      </section>

      {/* testimonials section */}
      <section className="testimonials-home" ref={testimonialsRef}>
         <div className="container">
             <Sectiontitle
                title="Testimonials"
                titleClass=" text-primarynew text-uppercase font-bold"
                description="Here is what our customers say about us."
                descriptionClass="text-gray-20"
              />
              {/* testimonials carousel */}
              <div className="testimonials-carousel py-4">
                  <Testimonials/> 
              </div>
         </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
