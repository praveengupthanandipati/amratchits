import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chitImg from "../assets/img/chitfundsolutions-img.jpg";
import financeImg from "../assets/img/financial-guidance.jpg";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    return;
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".service-anim");

    gsap.utils.toArray(items).forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const monthly = [
    {
      title: "Short Period",
      desc: "This group has a tenure of 25 months, providing a convenient option for those seeking a relatively shorter commitment.",
      img: chitImg,
    },
    {
      title: "Medium Period",
      desc: "With a duration of 40 months, this group offers a balanced approach for individuals looking for a moderate-term investment.",
      img: financeImg,
    },
    {
      title: "Long Period",
      desc: "This group spans across 50 months, providing a longer investment horizon for those aiming for extended savings or financial goals.",
      img: chitImg,
    },
  ];

  const daily = [
    {
      title: "Short Period",
      desc: "This group allows participants to avail themselves of the benefits of chits over a span of 500 days, offering a flexible and relatively shorter-term investment option.",
      img: financeImg,
    },
    {
      title: "Long Period",
      desc: "With a duration of 1000 days, this group caters to individuals who prefer an extended investment period while enjoying the advantages of daily chits.",
      img: chitImg,
    },
  ];

  return (
    <React.Fragment>
      <section className="subpage" ref={sectionRef}>
        <div className="subpage-section about-anim">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h1 className="font-bold text-primarynew">
                  Chit Fund Solution
                </h1>
                <p className="lead mt-3">
                  At Amrat Chits India Pvt. Ltd., we are dedicated to providing
                  comprehensive financial solutions that empower our members to
                  achieve their financial goals. Our services are carefully
                  crafted to align with your unique needs, whether you're
                  planning for the future, seeking savings options, or aiming
                  for a financial edge. We offer two distinct subscription
                  options: Monthly and Daily, each designed to cater to a
                  variety of financial objectives.
                </p>
              </div>
            </div>

            <div className="row mb-4 service-anim">
              <div className="col-12">
                <h2 className="font-bold">Monthly Chits</h2>
              </div>
            </div>

            <div className="accordion" id="monthlyAccordion">
              {monthly.map((m, i) => {
                const id = `monthlyCollapse${i}`;
                const headerId = `monthlyHeading${i}`;
                const isOdd = i % 2 === 1;
                const imgColClass = isOdd
                  ? "col-md-6 mb-3 mb-md-0 order-1 order-md-2"
                  : "col-md-6 mb-3 mb-md-0 order-1 order-md-1";
                const articleColClass = isOdd
                  ? "col-md-6 order-2 order-md-1"
                  : "col-md-6 order-2 order-md-2";

                return (
                  <div className="accordion-item service-anim mb-3" key={id}>
                    <h2 className="accordion-header" id={headerId}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${id}`}
                        aria-expanded="false"
                        aria-controls={id}
                      >
                        {m.title}
                      </button>
                    </h2>
                    <div
                      id={id}
                      className="accordion-collapse collapse"
                      aria-labelledby={headerId}
                      data-bs-parent="#monthlyAccordion"
                    >
                      <div className="accordion-body">
                        <div className="row align-items-center">
                          <div className={imgColClass}>
                            <img
                              src={m.img}
                              alt={m.title}
                              className="img-fluid rounded-4 w-100"
                            />
                          </div>
                          <div className={articleColClass}>
                            <article>
                              <p className="mb-0">{m.desc}</p>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row mt-5 mb-4 service-anim">
              <div className="col-12">
                <h2 className="font-bold">Daily Chits</h2>
              </div>
            </div>

            <div className="accordion" id="dailyAccordion">
              {daily.map((d, i) => {
                const id = `dailyCollapse${i}`;
                const headerId = `dailyHeading${i}`;
                const isOdd = i % 2 === 1;
                const imgColClass = isOdd
                  ? "col-md-6 mb-3 mb-md-0 order-1 order-md-2"
                  : "col-md-6 mb-3 mb-md-0 order-1 order-md-1";
                const articleColClass = isOdd
                  ? "col-md-6 order-2 order-md-1"
                  : "col-md-6 order-2 order-md-2";

                return (
                  <div className="accordion-item service-anim mb-3" key={id}>
                    <h2 className="accordion-header" id={headerId}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${id}`}
                        aria-expanded="false"
                        aria-controls={id}
                      >
                        {d.title}
                      </button>
                    </h2>
                    <div
                      id={id}
                      className="accordion-collapse collapse"
                      aria-labelledby={headerId}
                      data-bs-parent="#dailyAccordion"
                    >
                      <div className="accordion-body">
                        <div className="row align-items-center">
                          <div className={imgColClass}>
                            <img
                              src={d.img}
                              alt={d.title}
                              className="img-fluid rounded-4 w-100"
                            />
                          </div>
                          <div className={articleColClass}>
                            <article>
                              <p className="mb-0">{d.desc}</p>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
