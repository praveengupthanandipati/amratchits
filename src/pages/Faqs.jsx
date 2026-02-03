import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faqs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    return;
    if (sectionRef.current) {
      const animElements = sectionRef.current.querySelectorAll('.faq-anim');

      gsap.fromTo(animElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, []);

  const faqs = [
    {
      q: 'What is Amrat Chits India Pvt Ltd?',
      a: 'Amrat Chits India Pvt Ltd is a Hyderabad-based chitfund finance company providing chit schemes and related financial services to individuals and groups.'
    },
    {
      q: 'How does a chit fund work?',
      a: 'Members contribute a fixed amount regularly into a pooled fund and take turns receiving the lump sum through auctions or a draw. Amrat Chits administers and manages these operations transparently.'
    },
    {
      q: 'Who can join a chit?',
      a: 'Typically adults who meet the company’s eligibility criteria can join. Requirements may include ID, address proof and agreeing to the terms of the chit scheme.'
    },
    {
      q: 'Are chit funds regulated?',
      a: 'Chit funds are subject to state and central regulations in India. Amrat Chits operates in compliance with applicable laws and maintains transparent records.'
    },
    {
      q: 'What are the benefits of joining a chit fund?',
      a: 'Benefits include disciplined savings, access to lump sum funds, and the potential for returns depending on auction results. Chits also provide borrowing flexibility within the group.'
    },
    {
      q: 'What is the duration of a chit?',
      a: 'Duration varies by scheme. Amrat Chits offers plans with different tenures—short, medium and long—so members can choose based on their needs.'
    },
    {
      q: 'How are auction winners determined?',
      a: 'Winners are typically determined through a bidding process where members bid on the chit amount. The lowest bidder (after deductions) receives the payout for that period.'
    },
    {
      q: 'What fees or charges apply?',
      a: 'Amrat Chits discloses all fees and commission schedules upfront. Charges may include handling fees, administrative charges, and applicable taxes.'
    },
    {
      q: 'Is my money safe with Amrat Chits?',
      a: 'The company follows regulated procedures, maintains records and undertakes due diligence. Members should review the scheme terms and ask about safeguards before joining.'
    },
    {
      q: 'Can I exit the chit before maturity?',
      a: 'Exit policies vary by scheme. Early exit may be permitted under specific conditions and could involve penalties; consult the plan terms for details.'
    },
    {
      q: 'How do I apply for a chit?',
      a: 'You can contact Amrat Chits through the contact page on this site or visit the Hyderabad office. The team will guide you through documentation and plan selection.'
    },
    {
      q: 'Are there eligibility checks?',
      a: 'Yes — identity, address and sometimes credit/background checks are performed to verify members and reduce risk to the group.'
    },
    {
      q: 'How are payouts taxed?',
      a: 'Tax implications depend on the payout type and applicable laws. Amrat Chits provides documentation; members should consult a tax advisor for personal tax advice.'
    },
    {
      q: 'Can a company or trust join a chit?',
      a: 'Most chit schemes are designed for individuals. Corporate or trust participation depends on the scheme rules — contact Amrat Chits for bespoke arrangements.'
    },
    {
      q: 'How can I get help or raise a dispute?',
      a: 'Amrat Chits provides customer support channels and a formal grievance redressal process. Contact details are available on the Contact page and within your plan documentation.'
    }
  ];

  return (
    <React.Fragment>
      <section className="faq-page" ref={sectionRef}>
        {/* Hero Section */}
        <div className="faq-hero">
          <div className="container position-relative z-index-1">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 faq-anim">
                <h6 className="text-secondarynew text-uppercase letter-spacing font-bold mb-3">Support Center</h6>
                <h1 className="display-4 font-bold text-white mb-4">Frequently Asked Questions</h1>
                <p className="lead text-white opacity-80 mb-0 px-lg-5">Find answers to common questions about our chitfund services, bidding processes, and how we operate in Hyderabad.</p>
              </div>
            </div>
          </div>
          <div className="hero-pattern"></div>
        </div>

        {/* FAQs Content */}
        <div className="faq-accordion-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="accordion" id="faqsAccordion">
                  {faqs.map((item, idx) => {
                    const hid = `faqHeading${idx}`;
                    const cid = `faqCollapse${idx}`;
                    return (
                      <div className="accordion-item faq-anim" key={idx}>
                        <h2 className="accordion-header" id={hid}>
                          <button
                            className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${cid}`}
                            aria-expanded={idx === 0 ? "true" : "false"}
                            aria-controls={cid}
                          >
                            {item.q}
                          </button>
                        </h2>
                        <div
                          id={cid}
                          className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                          aria-labelledby={hid}
                          data-bs-parent="#faqsAccordion"
                        >
                          <div className="accordion-body">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Support Callout */}
                <div className="mt-5 faq-anim">
                  <div className="faq-support-card">
                    <div className="icon-box">
                      <i className="fi fi-rr-headset"></i>
                    </div>
                    <h4>Still have questions?</h4>
                    <p className="lead text-muted mb-4">Our financial experts are here to guide you through every step of your savings journey.</p>
                    <a href="/contact" className="btn btn-primarynew px-5 py-3 rounded-pill font-bold text-uppercase letter-spacing">Contact Support Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Faqs
