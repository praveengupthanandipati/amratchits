import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About01img from "../assets/img/aboutpageimg01.jpg";
import About02img from "../assets/img/aboutpageimg02.jpg";
import About03img from "../assets/img/aboutpageimg03.jpg";
import About04img from "../assets/img/aboutpageimg04.jpg";
import Aboutbanner01 from "../assets/img/aboutpagebanner01.jpg";
import Aboutbanner02 from "../assets/img/section2img.jpg";
import protectingcompany from "../assets/img/protechcompany.jpg";
import solutionsimg from "../assets/img/solutions.jpg";
import wecare from "../assets/img/wecare.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const animElements = sectionRef.current.querySelectorAll('.about-anim');

      ScrollTrigger.batch(animElements, {
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              overwrite: true
            }
          );
        },
        start: "top 85%",
        // markers: true
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <React.Fragment>
      <section className="subpage" ref={sectionRef}>
        <div className="subpage-section about-anim">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <article className="pe-3">
                  <div className="pb-3">
                    <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                      About us
                    </h6>
                    <h1 className="font-bold text-primarynew">
                      Empowering Futures and Decades of Excellence
                    </h1>
                  </div>

                  <p>
                    In a world where financial choices shape destinies, Amrat
                    Chits (India) Pvt. Ltd. stands as an enduring testament to
                    trust, tradition, and transformation. For over four decades,
                    we have etched a legacy in the chit fund industry, steadily
                    enriching the lives of our valued customers. While our
                    journey as a private limited organization commenced just
                    four years ago, our roots in the chit fund trade reach back
                    over 40 years.
                  </p>
                </article>
              </div>
              <div className="col-md-6">
                <img
                  src={About04img}
                  alt=""
                  className="img-fluid rounded-5 mb-3"
                />
              </div>
            </div>
          </div>
        </div>

        <figure
          className="about-anim about-hero"
          style={{
            backgroundImage: `url(${Aboutbanner01})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "600px",
            width: "100%",
            display: "block" // Ensure figure behaves as a block
          }}
        >
          <div className="about-hero-content">
            <h2 className="spaced-title font-bold">Increase your money systematically</h2>
            <p className="lead">Everyone with a high and useful reward for his/her trading, purchase and investment. Our goal is to make the financial journey reliable and rewarding.</p>
          </div>
        </figure>


        <div className="subpage-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="py-3 my-2 d-md-flex icondiv-section pb-3 border-bottom about-anim">
                  <div className="div-icon">
                    <i className="fi fi-rr-time-forward icomoon"></i>
                  </div>
                  <article>
                    <h2 className="font-bold">Our Tradition, Your Future</h2>
                    <p>
                      We take pride in our deep-seated legacy, an asset that
                      radiates our unwavering commitment to your financial
                      well-being. In a sector defined by complexity, we have
                      always thrived on simplicity, putting you and your dreams
                      at the heart of everything we do. Our principles are
                      rooted in trust, service excellence, and dedication. We
                      consider our customers as the driving force behind our
                      success.
                    </p>
                  </article>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="py-3 my-2 d-md-flex icondiv-section pb-3 border-bottom about-anim">
                  <div className="div-icon">
                    <i className="fi fi-rs-shield-check icomoon"></i>
                  </div>
                  <article>
                    <h2 className="font-bold">Service Beyond Expectations</h2>
                    <p>
                      At Amrat Chits, we've mastered the art of serving you
                      better. Our mission has always been to provide a seamless
                      experience, uncompromisingly dedicated to your financial
                      aspirations. We are not just an organization; we are a
                      promise - a promise to be available with the highest
                      standards of service, a promise to provide the finest
                      customer support, and a promise to uphold your trust.
                    </p>
                  </article>
                </div>
              </div>

              <div className="col-lg-6">

                <div className="py-3 my-2 d-md-flex icondiv-section pb-3 border-bottom about-anim">
                  <div className="div-icon">
                    <i className="fi fi-rr-user-robot icomoon"></i>
                  </div>
                  <article>
                    <h2 className="font-bold">
                      Where Tradition Meets Technology
                    </h2>
                    <p>
                      As a 40+ years veteran in the industry, we combine the
                      wisdom of tradition with the power of technology to bring
                      you chit fund solutions that are efficient, secure, and
                      dynamic. Our journey is a living testament to the
                      resilience of our values and the innovation of our
                      approach.
                    </p>
                  </article>
                </div>
              </div>

            </div>
          </div>
        </div>

        
      {/* How It Works Section */}
      <section className="howitworks-section about-anim">
        <div className="container">
          {/* Header */}
          <div className="hiw-header">
            <span className="hiw-label">How It Works</span>
            <h2 className="hiw-title">A chit fund in 4 simple steps</h2>
            <p className="hiw-subtitle">No complexity, no jargon — here's the core idea behind every chit group at Amrat Chits.</p>
          </div>

          {/* Steps */}
          <div className="row g-4 mt-2">
            {[
              {
                step: "Step 01",
                icon: "fi-rr-users-alt",
                title: "Group Formed",
                desc: "A fixed group of members each commit to a monthly or daily installment for a set period. Everyone contributes equally — every month, no exceptions.",
                tag: "e.g. 50 members × ₹20,000/month",
              },
              {
                step: "Step 02",
                icon: "fi-rr-comment-dollar",
                title: "Open Auction",
                desc: "Every month an open auction is held. Members bid by offering to accept less than the full chit value. The highest bidder wins — the one willing to forgo the most receives the pot.",
                tag: "Up to 30–40% discount on long-tenure chits",
                highlight: "highest bidder wins",
              },
              {
                step: "Step 03",
                icon: "fi-rr-time-forward",
                title: "Funds Disbursed",
                desc: "The winning bidder receives the lump sum within 30–35 days of submitting surety forms. Amount is after deduction of 5% foreman commission and applicable GST.",
                tag: "Post surety form submission",
              },
              {
                step: "Step 04",
                icon: "fi-rr-star",
                title: "Cycle Completes",
                desc: "Every member gets their turn over the full tenure. The last subscriber receives the highest net payout — full chit value minus only the foreman commission and GST.",
                tag: "Every member wins exactly once",
              },
            ].map((item, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="hiw-card h-100">
                  <div className="hiw-card-top">
                    <span className="hiw-step">{item.step}</span>
                    <div className="hiw-icon-box">
                      <i className={`fi ${item.icon}`}></i>
                    </div>
                  </div>
                  <h4 className="hiw-card-title">{item.title}</h4>
                  <p className="hiw-card-desc">{item.desc}</p>
                  <div className="hiw-tag">{item.tag}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="hiw-cta-row">
            <div className="hiw-cta-text">
              <span className="hiw-label">Want to know more?</span>
              <p className="mb-0">Auctions, dividends, surety, foreman commission, real examples — <strong>all covered in our Guide to Chit Funds.</strong></p>
            </div>
            <a href="/guide" className="hiw-cta-btn">
              Read the Full Guide &rarr;
            </a>
          </div>
        </div>
      </section>


        <div className="subpage-section why-choose-amrat-section about-anim">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="font-bold text-primarynew mb-3">
                  Why choose Amrat?
                </h1>
                <p className="lead">
                  At Amrat Chits (India) Pvt. Ltd., we're more than a chit fund
                  company; we're your financial partner in realizing your
                  dreams.
                </p>
              </div>
            </div>

            <div className="why-choose-swiper-wrapper">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".why-next",
                  prevEl: ".why-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".why-pagination",
                }}
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="why-choose-swiper pt-4"
              >
                {[
                  {
                    title: "Secure Platform",
                    desc: "We prioritize trust and integrity. Our track record reflects our commitment to ethical conduct.",
                    icon: "fi-rr-shield-keyhole",
                  },
                  {
                    title: "Customer-centric",
                    desc: "Our customers are at the heart of everything. We provide personalized services for your well-being.",
                    icon: "fi-rs-hr-person",
                  },
                  {
                    title: "Experienced Team",
                    desc: "Seasoned professionals with extensive expertise to deliver superior services and value.",
                    icon: "fi-rr-team-check",
                  },
                  {
                    title: "Regulatory Compliance",
                    desc: "We comply with all relevant regulations to ensure a secure environment for our customers.",
                    icon: "fi-rr-calendar-gavel-legal",
                  },
                  {
                    title: "Transparency",
                    desc: "Transparent processes and open communication build the foundation of our long-term relationships.",
                    icon: "fi-rr-eye",
                  },
                  {
                    title: "Financial Freedom",
                    desc: "Empowering your financial journey with flexible plans designed for your success.",
                    icon: "fi-rr-chart-line-up",
                  },
                ].map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="why-choose-card">
                      <div className="why-card-icon">
                        <i className={`fi ${item.icon}`}></i>
                      </div>
                      <h4 className="font-bold text-primarynew mb-3">{item.title}</h4>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="why-swiper-controls d-flex align-items-center justify-content-between mt-4">
                <div className="why-pagination"></div>
                <div className="why-nav-btns d-flex gap-2">
                  <div className="why-prev swiper-nav-btn-custom">
                    <i className="fi fi-rr-arrow-small-left"></i>
                  </div>
                  <div className="why-next swiper-nav-btn-custom">
                    <i className="fi fi-rr-arrow-small-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="subpage-section team-section about-anim">
          <div className="container">
            <div className="text-center mb-5">
              <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                OUR TEAM
              </h6>
              <h1 className="font-bold text-primarynew">
                Meet Our Leadership
              </h1>
            </div>

            <div className="row g-4">
              {/* Featured Leader: Chairman (6 Columns) */}
              <div className="col-lg-6 about-anim">
                <div className="featured-leader-card h-100">
                  <div className="leader-content-wrapper h-100 flex-column">
                    <div className="leader-img-container w-100" style={{ minHeight: "400px", height: "50%" }}>
                      <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Amrat Kumar Jain" />
                    </div>
                    <div className="leader-info w-100" style={{ padding: "1.5rem" }}>
                      <h3>Amrat Kumar Jain</h3>
                      <span className="leader-title">Chairman</span>
                      <p className="leader-bio">
                        A visionary leader with over four decades of experience in the financial sector.
                        His guidance has been the cornerstone of Amrat Chits' enduring success, driving the company
                        forward with a commitment to trust, transparency, and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Directors (6 Columns - 2x2 Grid) */}
              <div className="col-lg-6">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  {[
                    { name: "S.K. Saxena", title: "Director", img: "https://randomuser.me/api/portraits/men/21.jpg" },
                    { name: "Vishal Jain", title: "Director", img: "https://randomuser.me/api/portraits/men/31.jpg" },
                    { name: "Abhay Jain", title: "Director", img: "https://randomuser.me/api/portraits/men/41.jpg" },
                    { name: "Shailesh Jain", title: "Director", img: "https://randomuser.me/api/portraits/men/51.jpg" }
                  ].map((member, idx) => (
                    <div className="col about-anim" key={member.name}>
                      <div className="team-card">
                        <div className="team-img-wrapper">
                          <img
                            src={member.img}
                            alt={member.name}
                          />
                          <div className="team-overlay"></div>
                        </div>
                        <div className="team-info">
                          <h5>{member.name}</h5>
                          <p className="p-0 m-0">{member.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
