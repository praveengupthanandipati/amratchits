import React, { useState, useEffect, useRef } from 'react'
import Sectiontitle from './Sectiontitle'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Homechitplans = () => {
  const [activeTab, setActiveTab] = useState('monthly-long');
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set initial visibility
    if (sectionRef.current) {
      gsap.set(sectionRef.current, { clearProps: "all" });
    }

    // Animate section on scroll
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Handle tab change with animation
  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Tab data - 5 cards per tab
  const tabsData = [
    {
      id: 'monthly-long',
      label: 'Monthly Long-period',
      plans: [
        {
          id: 1,
          chitPrice: '₹2,50,000-00',
          monthly: '₹5,000',
          months: 50,
          members: 50
        },
        {
          id: 2,
          chitPrice: '₹5,00,000',
          monthly: '₹10,000',
          months: 50,
          members: 50
        },
        {
          id: 3,
          chitPrice: '₹10,00,000',
          monthly: '₹20,000',
          months: 50,
          members: 50
        },
        {
          id: 4,
          chitPrice: '₹15,00,000',
          monthly: '₹30,000',
          months: 50,
          members: 50
        },
        {
          id: 5,
          chitPrice: '₹25,00,000',
          monthly: '₹50,000',
          months: 50,
          members: 50
        },
        {
          id: 6,
          chitPrice: '₹25,00,000',
          monthly: '₹50,000',
          months: 50,
          members: 50
        }
      ]
    },
    {
      id: 'monthly-short',
      label: 'Monthly Short-period',
      plans: [
        {
          id: 1,
          chitPrice: '₹1,00,000',
          monthly: '₹5,000',
          months: 20,
          members: 20
        },
        {
          id: 2,
          chitPrice: '₹2,00,000',
          monthly: '₹10,000',
          months: 20,
          members: 20
        },
        {
          id: 3,
          chitPrice: '₹3,00,000',
          monthly: '₹15,000',
          months: 20,
          members: 20
        },
        {
          id: 4,
          chitPrice: '₹4,00,000',
          monthly: '₹20,000',
          months: 20,
          members: 20
        },
        {
          id: 5,
          chitPrice: '₹5,00,000',
          monthly: '₹25,000',
          months: 20,
          members: 20
        },
         {
          id: 6,
          chitPrice: '₹5,00,000',
          monthly: '₹25,000',
          months: 20,
          members: 20
        }


      ]
    },
    {
      id: 'monthly-middle',
      label: 'Monthly Middle-period',
      plans: [
        {
          id: 1,
          chitPrice: '₹3,00,000',
          monthly: '₹10,000',
          months: 30,
          members: 30
        },
        {
          id: 2,
          chitPrice: '₹6,00,000',
          monthly: '₹20,000',
          months: 30,
          members: 30
        },
        {
          id: 3,
          chitPrice: '₹9,00,000',
          monthly: '₹30,000',
          months: 30,
          members: 30
        },
        {
          id: 4,
          chitPrice: '₹12,00,000',
          monthly: '₹40,000',
          months: 30,
          members: 30
        },
        {
          id: 5,
          chitPrice: '₹15,00,000',
          monthly: '₹50,000',
          months: 30,
          members: 30
        },
        {
          id: 6,
          chitPrice: '₹15,00,000',
          monthly: '₹50,000',
          months: 30,
          members: 30
        }
      ]
    },
    {
      id: 'daily-long',
      label: 'Daily Long-Period',
      plans: [
        {
          id: 1,
          chitPrice: '₹2,50,000',
          monthly: '₹350',
          months: 714,
          members: 50
        },
        {
          id: 2,
          chitPrice: '₹5,00,000',
          monthly: '₹700',
          months: 714,
          members: 50
        },
        {
          id: 3,
          chitPrice: '₹7,50,000',
          monthly: '₹1,050',
          months: 714,
          members: 50
        },
        {
          id: 4,
          chitPrice: '₹10,00,000',
          monthly: '₹1,400',
          months: 714,
          members: 50
        },
        {
          id: 5,
          chitPrice: '₹12,50,000',
          monthly: '₹1,750',
          months: 714,
          members: 50
        },
        {
          id: 6,
          chitPrice: '₹12,50,000',
          monthly: '₹1,750',
          months: 714,
          members: 50
        }
      ]
    },
    {
      id: 'daily-short',
      label: 'Daily Short-period',
      plans: [
        {
          id: 1,
          chitPrice: '₹1,00,000',
          monthly: '₹500',
          months: 200,
          members: 20
        },
        {
          id: 2,
          chitPrice: '₹2,00,000',
          monthly: '₹1,000',
          months: 200,
          members: 20
        },
        {
          id: 3,
          chitPrice: '₹3,00,000',
          monthly: '₹1,500',
          months: 200,
          members: 20
        },
        {
          id: 4,
          chitPrice: '₹4,00,000',
          monthly: '₹2,000',
          months: 200,
          members: 20
        },
        {
          id: 5,
          chitPrice: '₹5,00,000',
          monthly: '₹2,500',
          months: 200,
          members: 20
        },
        {
          id: 6,
          chitPrice: '₹5,00,000',
          monthly: '₹2,500',
          months: 200,
          members: 20
        }
      ]
    }
  ];

  const currentTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <React.Fragment>
        <section className='chitplans-section' ref={sectionRef}>
        <div className='custom-container'>
            <Sectiontitle 
                title="Flexible, Secure CHIT Plans For You" 
                description="Our reliable chit schemes help you achieve financial goals through disciplined savings and timely payouts."
                titleClass=" text-white text-uppercase font-bold"
                descriptionClass="text-primary-50 small"
                />

                {/* Desktop Tabs */}
                <div className="chit-tabs-container d-none d-md-block">
                  {/* Tab Navigation */}
                  <ul className="nav nav-tabs chit-nav-tabs" role="tablist">
                    {tabsData.map((tab) => (
                      <li key={tab.id} className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                          onClick={() => handleTabChange(tab.id)}
                          type="button"
                          role="tab"
                        >
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Tab Content */}
                  <div className="tab-content chit-tab-content">
                    <div className={`tab-pane fade show active ${isAnimating ? 'tab-animating-out' : 'tab-animating-in'}`}>
                      <div className="row g-3 pt-4" key={activeTab}>
                        {currentTabData?.plans.map((plan, index) => (
                          <div 
                            key={plan.id} 
                            className="col-lg-2 col-md-4 col-sm-6"
                            style={{ 
                              animationDelay: `${index * 0.1}s`
                            }}
                          >
                            <div className="chit-plan-card bg-white rounded-4 p-3 h-100">
                              <div className="plan-details">
                                <h3 className="chit-price-title text-center mb-3">
                                  {plan.chitPrice}
                                </h3>
                                <div className="detail-item mb-3">
                                  <strong>Monthly:</strong> {plan.monthly}
                                </div>
                                <div className="detail-item mb-3">
                                  <strong>No. of Months:</strong> {plan.months}
                                </div>
                                <div className="detail-item mb-4">
                                  <strong>No. of Members:</strong> {plan.members}
                                </div>
                                <button className="btn bg-primarynew w-100 text-white">
                                  Start Invest
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Accordion */}
                <div className="chit-accordion-container d-block d-md-none">
                  <div className="accordion" id="chitPlansAccordion">
                    {tabsData.map((tab, index) => (
                      <div key={tab.id} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="false"
                            aria-controls={`collapse${index}`}
                          >
                            {tab.label}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#chitPlansAccordion"
                        >
                          <div className="accordion-body">
                            {tab.plans.map((plan) => (
                              <div key={plan.id} className="chit-plan-card bg-white rounded-4 p-3 mb-3">
                                <div className="plan-details">
                                  <h3 className="chit-price-title text-center mb-3">
                                    {plan.chitPrice}
                                  </h3>
                                  <div className="detail-item mb-2">
                                    <strong>Monthly:</strong> {plan.monthly}
                                  </div>
                                  <div className="detail-item mb-2">
                                    <strong>No. of Months:</strong> {plan.months}
                                  </div>
                                  <div className="detail-item mb-3">
                                    <strong>No. of Members:</strong> {plan.members}
                                  </div>
                                  <button className="btn bg-primarynew w-100 text-white">
                                    Start Invest
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

        </div>
        </section>
    </React.Fragment>
  )
}

export default Homechitplans
