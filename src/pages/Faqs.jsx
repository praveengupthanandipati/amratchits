import React from 'react'

const Faqs = () => {
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
      <section className="subpage">
        <div className="subpage-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="pb-3 text-center">
                  <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">Frequently Asked Questions</h6>
                  <h1 className="font-bold text-primarynew pb-3">Amrat Chits India Pvt Ltd — FAQs</h1>
                  <p className="lead">Answers to common questions about our chitfund services and how we operate from Hyderabad.</p>
                </div>

                <div className="accordion" id="faqsAccordion">
                  {faqs.map((item, idx) => {
                    const hid = `faqHeading${idx}`;
                    const cid = `faqCollapse${idx}`;
                    return (
                      <div className="accordion-item card shadow-sm mb-3" key={idx}>
                        <h2 className="accordion-header" id={hid}>
                          <button className={`accordion-button collapsed bg-white`} type="button" data-bs-toggle="collapse" data-bs-target={`#${cid}`} aria-expanded="false" aria-controls={cid}>
                            {item.q}
                          </button>
                        </h2>
                        <div id={cid} className="accordion-collapse collapse" aria-labelledby={hid} data-bs-parent="#faqsAccordion">
                          <div className="accordion-body bg-white">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
