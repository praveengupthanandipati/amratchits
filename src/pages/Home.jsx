import React, { useEffect, useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
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

const Home = () => {
  const welcomeRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const servicesRef = useRef([]);
  const servicesData = [
    {
      img: chitfundImg,
      title: "Chit Fund Solutions",
      desc: "We offer a wide range of chit fund options tailored to meet the diverse needs of our customers. Our chit funds provide an opportunity for disciplined savings and the chance to access funds when needed."
    },
    {
      img: transparentImg,
      title: "Transparent Processes",
      desc: "We believe in maintaining transparency in all our processes. Our customers can trust that their investments are handled with utmost care and transparency."
    },
    {
      img: financialGuidenImg,
      title: "Financial Guidance",
      desc: "We understand that financial decisions can be complex. Our expert team is always available to provide guidance and assist our customers in making informed investment choices."
    }
  ];
  const customerAgentsRef = useRef([]);
  const testimonialsRef = useRef(null);

  useLayoutEffect(() => {
    // Set initial visibility for all elements
    gsap.set([
      welcomeRef.current,
      ...servicesRef.current,
      ...customerAgentsRef.current,
      testimonialsRef.current
    ], { clearProps: "all" });

    // Welcome section animation (top-bottom, repeat on scroll)
    if (welcomeRef.current) {
      const welcomeCols = welcomeRef.current.querySelectorAll('.welcome-col');
      let observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
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
                  ease: "power3.out"
                }
              );
            });
          } else {
            welcomeCols.forEach((el) => {
              gsap.set(el, { opacity: 0 });
            });
          }
        });
      }, { threshold: 0.3 });
      observer.observe(welcomeRef.current);
      return () => {
        if (observer && welcomeRef.current) observer.unobserve(welcomeRef.current);
      };
    }

    // .service-col GSAP animation on scroll with delay
    if (servicesSectionRef.current) {
      const serviceCols = servicesSectionRef.current.querySelectorAll('.service-col');
      serviceCols.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: -60 });
      });
      let observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            serviceCols.forEach((el, idx) => {
              if (el) {
                gsap.to(el, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  delay: idx * 0.5,
                  ease: "power3.out"
                });
              }
            });
          } else {
            serviceCols.forEach((el) => {
              if (el) gsap.set(el, { opacity: 0, y: -60 });
            });
          }
        });
      }, { threshold: 0.3 });
      observer.observe(servicesSectionRef.current);
      return () => {
        if (observer && servicesSectionRef.current) observer.unobserve(servicesSectionRef.current);
      };
    }

    // Customer/Agents section animation (onscroll, left/right fade-in)
    if (customerAgentsRef.current.length === 2) {
      const [leftEl, rightEl] = customerAgentsRef.current;
      if (leftEl) gsap.set(leftEl, { opacity: 0, x: -60 });
      if (rightEl) gsap.set(rightEl, { opacity: 0, x: 60 });
      const parent = leftEl?.parentNode?.parentNode;
      if (parent) {
        let observer = new window.IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (leftEl) {
                gsap.to(leftEl, {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  ease: "power3.out"
                });
              }
              if (rightEl) {
                gsap.to(rightEl, {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  delay: 0.3,
                  ease: "power3.out"
                });
              }
            } else {
              if (leftEl) gsap.set(leftEl, { opacity: 0, x: -60 });
              if (rightEl) gsap.set(rightEl, { opacity: 0, x: 60 });
            }
          });
        }, { threshold: 0.3 });
        observer.observe(parent);
        return () => {
          if (observer && parent) observer.unobserve(parent);
        };
      }
    }

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
        <div className="container">
          <div className="row pb-3 pb-md-5">
            <div className="col-md-3">
               <Sectiontitle
                title="What we do"
                titleClass=" text-primarynew text-uppercase font-bold"
              />
            </div>
            <div className="col-md-9">
              <p>With transparency, trust, and timely payouts, we turn your disciplined savings into achievable realities. Start building your future with us today.</p>
            </div>
          </div>
          <div className="row justify-content-between">          
            <div className="col-lg-6 align-self-center pt-3 pt-md-5">
              {[{
                icon: "fi fi-ts-hands-holding-diamond",
                title: "Chit Value",
                desc: "The total pool of funds contributed by all the members (subscribers) of the chit fund for a particular chit scheme refer to teh Chit Value."
              }, {
                icon: "fi fi-ts-duration-alt",
                title: "Chit Period",
                desc: "For the purpose of this illustration, we will consider the duration of the chit to be 50 months.  This is known as term period for the chit groups"
              }, {
                icon: "fi fi-ts-newsletter-subscribe",
                title: "Subscribers",
                desc: "The Foreman or Chit Fund company has to gather 50 people who are interested in investing in this chit group.  These 50 persons are called subscribers"
              }].map((item, idx) => (
                <div className="d-flex welcome-col" key={idx}>
                  <div className="icon-div">
                    <i className={`${item.icon} icomoon`}></i>
                  </div>
                  <div className="ms-md-4 ms-2">
                    <h4 className="font-bold pb-2">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-3 d-flex align-items-end">
              <figure className="welcome-img">
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
        <div className="container" ref={servicesSectionRef}>     
          <div className="pb-2 pb-md-5 position-relative z-index-1">
            <Sectiontitle
             title="Our Services"
             titleClass="text-primarynew text-uppercase font-bold text-white"
            />     
            <p className="text-white">Our reliable chit schemes help you achieve financial goals through disciplined savings and timely payouts.</p>
          </div>
          <div className="row align-items-stretch">
            {servicesData.map((item, idx) => (
              <div
                className="col-md-4 d-flex"
                key={idx}
                ref={el => servicesRef.current[idx] = el}
              >
                <div className="service-col w-100 d-flex flex-column shadow-sm rounded-5">
                  <figure className="m-0 p-0">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                  </figure>
                  <article className="flex-grow-1">
                    <h3>{item.title}</h3>
                    <p className="p-0 m-0">{item.desc}</p>
                  </article> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Whatsets /> */}

      {/*customers / agents*/}
      <section className="customer-agents">
        <div className="custom-container w-100 g-0">
            <div className="row g-0">
              <div 
                className="col-md-6 customer-block left-customer  text-center border-end"
                ref={(el) => (customerAgentsRef.current[0] = el)}
              >
                <article>
                   <h4 className="text-uppercase font-bold mb-2">join us as an employee</h4>
                   <p>Amrat Chits empowers your personal financial journey. Our tailored chit schemes help you systematically save for life's big moments—a new home, your child's education, or a dream wedding.  </p>
                    <Link to="" className="btn-primary-light">Find Out More</Link>
                </article>               
              </div>
              <div 
                className="col-md-6 customer-block right-customer  text-center border-end"
                ref={(el) => (customerAgentsRef.current[1] = el)}
              >
                <article>
                   <h4 className="text-uppercase font-bold mb-2">JOin us as Agent</h4>
                   <p>Amrat Chits empowers your personal financial journey. Our tailored chit schemes help you systematically save for life's big moments—a new home, your child's education, or a dream wedding.  </p>
                    <Link to="" className="btn-primary-light">Find Out More</Link>
                </article>               
              </div>
            </div>
        </div>
      </section>

      {/* Who We are Section */}
      <section className="homeWhoweare">
        <Whoweare />
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
