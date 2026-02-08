import React, { useEffect, useRef } from "react";
import maskImage from "../assets/img/servicemaskimg.jpg";
import { Link } from "react-router-dom";
import Workimg from "../assets/img/man1.png";
import fdImg from "../assets/img/financial-guidance.jpg";
import mfImg from "../assets/img/Herocarousel02.png";
import chitImg from "../assets/img/chitfundsolutions-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const Guide = () => {
  const slidesWork = [
    {
      title: "Formation of a chit group",
      bullets: [
        "Participants join a chit group with a predetermined number of members, usually facilitated by a chitfund company.",
        "Each member contributes a fixed amount, forming a pool of funds that will be distributed among the participants over the chitfund duration.",
      ],
    },
    {
      title: "Monthly contributions",
      bullets: [
        "Participants contribute a fixed amount every month towards the chitfund.",
        "The total contribution is determined by the number of members and the chitfund duration",
      ],
    },
    {
      title: "Auction process",
      bullets: [
        "Each month, an auction is conducted where participants bid for the chit amount. The highest bidder in the auction receives the bid amount, which is deducted from the total pool of funds. This process continues until all participants have received their share.",
      ],
    },
    {
      title: "Prized subscriber",
      bullets: [
        "Every month, a subscriber is chosen by drawing lots. The prized subscriber receives the chit amount without participating in the auction, ensuring fair distribution",
      ],
    },
    {
      title: "Final payouts",
      bullets: [
        "The chit fund continues until all participants have received their share. Participants receive their payout in a predetermined sequence, ensuring that everyone benefits from the chitfund.",
      ],
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    return;
    if (sectionRef.current) {
      const animElements = sectionRef.current.querySelectorAll('.guide-anim');

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
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <React.Fragment>
      <section className="subpage guide-page" ref={sectionRef}>
        {/* Hero Section */}
        <div className="guide-hero-section position-relative overflow-hidden mb-5">
          <div className="container position-relative z-index-1">
            <div className="row align-items-center min-vh-50 py-5">
              <div className="col-lg-7 guide-anim">
                <h6 className="text-secondary text-uppercase letter-spacing font-bold mb-3 d-inline-block px-3 py-1 bg-white-10 rounded-pill">
                  Knowledge Hub
                </h6>
                <h1 className="display-4 font-bold text-white mb-4">
                  Navigating Your <br />
                  <span className="text-secondarynew">Chit Fund Journey</span>
                </h1>
                <p className="lead text-white mb-4 me-lg-5">
                  Unlock the potential of community-driven finance. Discover how Amrat Chits empowers your family's future through disciplined savings and collective growth.
                </p>
                <div className="d-flex gap-3">
                  <a href="#concept" className="btn-secondary px-4 py-3 text-uppercase font-bold">Start Learning</a>
                </div>
              </div>
            </div>
          </div>
          <div className="guide-hero-bg"></div>
        </div>

        {/* Concept Section */}
        <div id="concept" className="subpage-section py-5">
          <div className="container">
            <div className="row justify-content-lg-between align-items-center g-5">
              <div className="col-lg-5 guide-anim">
                <div className="maskImage-modern p-2 bg-white shadow-lg rounded-5">
                  <img
                    src={maskImage}
                    alt="Service Concept"
                    className="img-fluid rounded-5"
                  />
                </div>
              </div>
              <div className="col-lg-6 guide-anim">
                <div className="pb-3">
                  <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                    CONCEPT OF CHITS
                  </h6>
                  <h2 className="font-bold text-primarynew h1 mb-4">
                    What Exactly is a Chitfund?
                  </h2>
                </div>
                <p className="mb-4 text-muted">
                  A Chitfund is a unique financial instrument that blends the best aspects of <strong>Savings, Investment, and Borrowing</strong> within a trusted community. It's a formal recognition of the age-old practice of collective saving, now regulated and secured.
                </p>

                <div className="row g-4 mt-2">
                  {[
                    { title: "Disciplined Savings", icon: "fi-rr-bank", color: "blue", desc: "Structured approach to setting aside a fixed amount regularly." },
                    { title: "Financial Flexibility", icon: "fi-rr-chart-line-up", color: "maroon", desc: "Access lump sums through transparent auctions when you need them." },
                    { title: "Smart Alternative", icon: "fi-rr-refresh", color: "gold", desc: "A borrowing option within the community without formal bank hassle." }
                  ].map((item, idx) => (
                    <div className="col-md-12" key={idx}>
                      <div className="d-flex align-items-start gap-4 p-4 rounded-4 bg-light hover-lift transition-all">
                        <div className={`icon-box-circle bg-${item.color}`}>
                          <i className={`fi ${item.icon}`}></i>
                        </div>
                        <div>
                          <h5 className="font-bold text-primarynew mb-1">{item.title}</h5>
                          <p className="small mb-0 text-muted">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="workSection-v2 py-5 bg-primarynew text-white position-relative">
          <div className="container py-4">
            <div className="row mb-5 text-center justify-content-center guide-anim">
              <div className="col-lg-8">
                <h6 className="text-secondarynew text-uppercase letter-spacing font-bold mb-3 d-inline-block px-3 py-1 bg-white-10 rounded-pill">Workflow</h6>
                <h2 className="display-3 font-bold mb-4 text-white">How does it work?</h2>
                <p className="lead text-white">A simple five-step process that ensures transparency, security, and exponential growth for every subscriber.</p>
              </div>
            </div>

            <div className="row g-4 align-items-center">
              <div className="col-lg-5 guide-anim text-center">
                <div className="image-stack position-relative d-inline-block">
                  <img src={Workimg} alt="How it works" className="img-fluid z-index-2 position-relative" style={{ maxHeight: '450px' }} />
                  <div className="abstract-shape shape-1"></div>
                  <div className="abstract-shape shape-2"></div>
                </div>
              </div>
              <div className="col-lg-7 guide-anim">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true, el: ".how-pagination" }}
                  autoplay={{ delay: 9000 }}
                  className="how-works-swiper"
                >
                  {slidesWork.map((s, i) => (
                    <SwiperSlide key={i}>
                      <div className="how-work-card">
                        <div className="how-step-num">Step 0{i + 1}</div>
                        <h3 className="font-bold mb-4 text-secondarynew h2">{s.title}</h3>
                        <ul className="list-unstyled">
                          {s.bullets.map((b, bi) => (
                            <li key={bi} className="d-flex gap-3 mb-3">
                              <i className="fi fi-rr-checkbox text-secondarynew mt-1"></i>
                              <span className="opacity-90 lead-small">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="d-flex align-items-center justify-content-center mt-5">
                  <div className="how-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Instruments */}
        <div className="financial-grid-section py-5">
          <div className="container py-5">
            <div className="row mb-5 text-center justify-content-center guide-anim">
              <div className="col-lg-8">
                <h2 className="font-bold text-primarynew mb-4">Financial Instruments</h2>
                <p className="text-muted">Compare the most common investment avenues to see where Chit Funds stand in terms of value and community impact.</p>
              </div>
            </div>
            <div className="row g-4">
              {[
                { title: "FIXED DEPOSITS", img: fdImg, desc: "Safe investment offered by banks with capital protection. Suitable for risk-averse individuals looking for stable but modest returns over fixed periods." },
                { title: "MUTUAL FUNDS", img: mfImg, desc: "Market-linked investments pooling money from multiple investors. Offers professional management and diversification across equities and bonds." },
                { title: "CHIT FUNDS", img: chitImg, desc: "A hybrid model of saving and borrowing. Offers internal ROI through dividends and access to immediate lump sums via transparent community auctions." }
              ].map((item, idx) => (
                <div className="col-lg-4 guide-anim" key={idx}>
                  <div className="instrument-card h-100 shadow-sm border-0 rounded-5 overflow-hidden bg-white hover-up transition-all">
                    <div className="card-img-top-wrapper overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-100" style={{ height: '240px', objectFit: 'cover' }} />
                      <div className="card-overlay-gradient"></div>
                    </div>
                    <div className="card-body p-4 text-center">
                      <h4 className="font-bold text-primarynew mb-3">{item.title}</h4>
                      <p className="text-muted mb-0 small">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="comparison-section-v2 py-5 bg-light position-relative">
          <div className="container py-5">
            <div className="row mb-5 text-center justify-content-center guide-anim">
              <div className="col-lg-8">
                <h6 className="text-secondarynew text-uppercase letter-spacing mb-3">At a Glance</h6>
                <h2 className="font-bold text-primarynew h1 mb-4">The Ultimate Comparison</h2>
                <p className="text-muted">Why choose Chit Funds? Let the numbers and features speak for themselves.</p>
              </div>
            </div>

            <div className="row g-4 guide-anim">
              {[
                {
                  title: "Fixed Deposits",
                  data: [
                    { label: "ROI", val: "5-6.5%" },
                    { label: "Risk", val: "Low" },
                    { label: "Liquidity", val: "Low" },
                    { label: "Term", val: "Fixed" },
                    { label: "Flexibility", val: "Nil" }
                  ],
                  color: "blue",
                  best: false
                },
                {
                  title: "Mutual Funds",
                  data: [
                    { label: "ROI", val: "10-15%" },
                    { label: "Risk", val: "High" },
                    { label: "Liquidity", val: "High" },
                    { label: "Term", val: "Variable" },
                    { label: "Flexibility", val: "High" }
                  ],
                  color: "maroon",
                  best: false
                },
                {
                  title: "Chit Funds",
                  data: [
                    { label: "ROI", val: "12-15%" },
                    { label: "Risk", val: "Low" },
                    { label: "Liquidity", val: "High" },
                    { label: "Term", val: "Flexible" },
                    { label: "Flexibility", val: "Very High" }
                  ],
                  color: "gold",
                  best: true
                }
              ].map((card, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className={`comp-ui-card h-100 ${card.best ? 'featured-card' : ''}`}>
                    {card.best && <div className="best-tag">Most Balanced</div>}
                    <div className={`comp-ui-header bg-${card.color}`}>
                      <h4 className="font-bold mb-0">{card.title}</h4>
                    </div>
                    <div className="comp-ui-body">
                      {card.data.map((row, ri) => (
                        <div className="comp-ui-row" key={ri}>
                          <span className="label text-muted">{row.label}</span>
                          <span className="value font-bold text-primarynew">{row.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="comp-decor-circle"></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Guide;
