import React, { useEffect, useRef } from "react";
import maskImage from "../assets/img/servicemaskimg.jpg";
import { Link } from "react-router-dom";
import Workimg from "../assets/img/man1.png";
import fdImg from "../assets/img/financial-guidance.jpg";
import mfImg from "../assets/img/Herocarousel02.png";
import chitImg from "../assets/img/chitfundsolutions-img.jpg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

  const workEqualizedRef = useRef(false);

  const equalizeWorkCols = () => {
    const cols = document.querySelectorAll(".work-swiper .workcol");
    if (!cols || cols.length === 0) return;
    // reset heights
    cols.forEach((c) => {
      c.style.height = "auto";
    });
    let max = 0;
    cols.forEach((c) => {
      const h = c.getBoundingClientRect().height;
      if (h > max) max = h;
    });
    cols.forEach((c) => {
      c.style.height = max + "px";
    });
    workEqualizedRef.current = true;
  };

  useEffect(() => {
    // equalize after mount and on resize
    setTimeout(equalizeWorkCols, 80);
    const onResize = () => {
      setTimeout(equalizeWorkCols, 80);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <React.Fragment>
      <section className="subpage">
        <div className="subpage-section">
          <div className="container">
            <div className="row justify-content-md-between align-items-center">
              <div className="col-md-4 text-center">
                <div className="maskImage">
                  <img
                    src={maskImage}
                    alt="Service Mask"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="pb-3">
                  <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                    CONCEPT OF CHITS
                  </h6>
                  <h1 className="font-bold text-primarynew">
                    What is a Chitfund?
                  </h1>
                </div>
                <p>
                  Chitfunds are a unique financial instrument that combines the
                  benefits of savings, investment, and borrowing within a
                  community. In this slide, we will explore the concept of chit
                  funds and how they work, from saving to drawing the amount
                  through auctions.
                </p>
                <p>
                  Chitfunds offer a distinctive and inclusive financial model,
                  combining savings, investment, and borrowing in a
                  community-driven system. By understanding the working of chit
                  funds, individuals can make informed decisions and leverage
                  this financial instrument to meet their financial goals.
                </p>

                <article className="mt-4">
                  <h4 className="font-bold text-primarynew py-2">
                    Who is it useful for?
                  </h4>
                  <p>
                    <strong>
                      Individuals with a disciplined savings mindset:
                    </strong>
                    Chit funds provide a structured approach to savings,
                    encouraging individuals to set aside a fixed amount
                    regularly.
                  </p>
                  <p>
                    <strong> People seeking financial flexibility:</strong> Chit
                    funds offer the opportunity to access funds through
                    auctions, allowing participants to receive a lump sum when
                    needed
                  </p>
                  <p>
                    <strong>
                      Those looking for an alternative to traditional loans:
                    </strong>
                    Chit funds provide a borrowing option within the community,
                    without the need for formal financial institutions.
                  </p>
                </article>
                <Link
                  to="/about"
                  className="btn-secondary text-uppercase mt-2 text-white"
                >
                  Contact with us
                </Link>
              </div>
            </div>
          </div>
          <div className="workSection">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-4">
                  <div className="work-img text-center">
                    <img
                      src={Workimg}
                      alt="Work Image"
                      className="img-fluid position-relative"
                    />
                  </div>
                </div>
                <div className="col-md-7 align-items-center position-relative">
                  <h1 className="text-secondary-50 pb-md-5 pb-3">
                    How does a chit fund work?
                  </h1>
                  <div className="row workrow">
                    <div className="col-12">
                      <div className="work-swiper-wrap position-relative">
                        <Swiper
                          className="work-swiper"
                          modules={[Autoplay, Navigation]}
                          autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                          }}
                          navigation={{
                            prevEl: ".work-prev",
                            nextEl: ".work-next",
                          }}
                          spaceBetween={24}
                          slidesPerView={1}
                          breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 2 },
                          }}
                          loop={true}
                          onSwiper={(s) => {
                            // call equalize when swiper is initialized
                            setTimeout(() => {
                              equalizeWorkCols();
                            }, 60);
                          }}
                          onSlideChange={() => {
                            setTimeout(() => {
                              equalizeWorkCols();
                            }, 60);
                          }}
                        >
                          {slidesWork.map((s, i) => (
                            <SwiperSlide key={i}>
                              <div className="workcol">
                                <article>
                                  <h3 className="pb-3">{s.title}</h3>
                                  <ul className="list-items">
                                    {s.bullets.map((b, bi) => (
                                      <li key={bi}>{b}</li>
                                    ))}
                                  </ul>
                                </article>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <button
                          className="work-prev work-nav"
                          aria-label="Previous slide"
                        >
                          <span className="icon-left-icon icomoon" />
                        </button>
                        <button
                          className="work-next work-nav"
                          aria-label="Next slide"
                        >
                          <span className="icon-right-icon icomoon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="final-instruments">
          <div className="container">
            <div className="pb-3">
              <h1 className="font-bold text-primarynew pb-4">
                Financial Instruments
              </h1>
            </div>
            <div className="row gy-4">
              <div className="col-12 col-md-4">
                <div className="fin-thumb">
                  <div className="thumb-img rounded-circle">
                    <img
                      src={fdImg}
                      alt="Fixed Deposits"
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="mt-3 font-bold text-primarynew">FIXED DEPOSITS</h4>
                  <p className="mb-0">
                    FDs are investment instruments offered by banks where
                    individuals can deposit a lump sum for a fixed period at a
                    predetermined interest rate. FDs offer a higher interest
                    rate compared to savings accounts and are suitable for
                    medium to long-term savings.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="fin-thumb">
                  <div className="thumb-img rounded-circle">
                    <img src={mfImg} alt="Mutual Funds" className="img-fluid" />
                  </div>
                   <h4 className="mt-3 font-bold text-primarynew">MUTUAL FUNDS</h4>
                  <p className="mb-0">
                    MFs pool money from multiple investors to invest in a
                    diversified portfolio of stocks, bonds, or other securities.
                    They offer individuals the opportunity to participate in the
                    financial markets without directly managing the investments.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="fin-thumb">
                  <div className="thumb-img rounded-circle">
                    <img src={chitImg} alt="Chit Funds" className="img-fluid" />
                  </div>
                   <h4 className="mt-3 font-bold text-primarynew">CHIT FUNDS</h4>
                  <p className="mb-0">
                    Chits typically offer variable returns as they depend on the
                    auction or lottery system. The return on investment can vary
                    depending on the bidding process and the number of
                    participants. Chits can provide higher returns if the
                    bidding process results in lower payouts. However, they also
                    carry a certain level of risk, especially in unregulated or
                    fraudulent schemes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="comparisons">
          <div className="container">
            <div className="pb-3">
              <h1 className="font-bold text-primarynew pb-4">Comparison</h1>
            </div>

            <div className="row gy-4">
              <div className="col-12 col-md-4">
                <div className="comp-card h-100">
                  <img src={fdImg} alt="Fixed Deposits" className="card-banner img-fluid" />
                  <div className="card-body">
                    <h5 className="font-bold text-primarynew">FIXED DEPOSITS</h5>
                    <ul className="comp-list">
                      <li><strong>ROI:</strong> 5-6.5%</li>
                      <li><strong>Risk:</strong> Low Risk</li>
                      <li><strong>Liquidity:</strong> Generally Less Liquid</li>
                      <li><strong>Term:</strong> Medium to Long Term</li>
                      <li><strong>Taxation:</strong> Interest Income is Taxable</li>
                      <li><strong>Flexibility:</strong> Less Flexible</li>
                      <li><strong>Type:</strong> Debt Instrument</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="comp-card h-100">
                  <img src={mfImg} alt="Mutual Funds" className="card-banner img-fluid" />
                  <div className="card-body">
                    <h5 className="font-bold text-primarynew">MUTUAL FUNDS</h5>
                    <ul className="comp-list">
                      <li><strong>ROI:</strong> 10-15%</li>
                      <li><strong>Risk:</strong> High Risk</li>
                      <li><strong>Liquidity:</strong> More Liquid</li>
                      <li><strong>Term:</strong> Short, Medium or Long</li>
                      <li><strong>Taxation:</strong> Capital Gains are taxable</li>
                      <li><strong>Flexibility:</strong> More Flexible</li>
                      <li><strong>Type:</strong> Investment in a diversified portfolio of assets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="comp-card h-100">
                  <img src={chitImg} alt="Chit Funds" className="card-banner img-fluid" />
                  <div className="card-body">
                    <h5 className="font-bold text-primarynew">CHIT FUNDS</h5>
                    <ul className="comp-list">
                      <li><strong>ROI:</strong> 12-15%</li>
                      <li><strong>Risk:</strong> Low Risk</li>
                      <li><strong>Liquidity:</strong> More Liquid</li>
                      <li><strong>Term:</strong> Short, Medium or Long</li>
                      <li><strong>Taxation:</strong> GST applicable</li>
                      <li><strong>Flexibility:</strong> Less Flexible</li>
                      <li><strong>Type:</strong> Savings and investment scheme with a group of individuals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Guide;
