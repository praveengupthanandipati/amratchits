import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Chitplans = () => {
  const [activeBranch, setActiveBranch] = useState("abids");
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Secunderabad Branch Data
  const secunderabadPlans = {
    monthly: [
      { id: "s-ml-1", price: "₹50,00,000", install: "₹1,00,000", duration: "50 Months", members: 50 },
      { id: "s-ml-2", price: "₹25,00,000", install: "₹50,000", duration: "50 Months", members: 50 },
      { id: "s-ml-3", price: "₹10,00,000", install: "₹20,000", duration: "50 Months", members: 50 },
      { id: "s-ml-4", price: "₹5,00,000", install: "₹10,000", duration: "50 Months", members: 50 },
      { id: "s-ms-1", price: "₹5,00,000", install: "₹20,000", duration: "25 Months", members: 25 },
    ],
    daily: [
      { id: "s-dl-1", price: "₹25,00,000", install: "₹2,500", duration: "1000 Days", members: 100 },
      { id: "s-dl-2", price: "₹10,00,000", install: "₹1,000", duration: "1000 Days", members: 100 },
      { id: "s-dl-3", price: "₹5,00,000", install: "₹500", duration: "1000 Days", members: 100 },
      { id: "s-ds-1", price: "₹3,00,000", install: "₹600", duration: "500 Days", members: 50 },
    ]
  };

  // Abids Branch Data (From Home Page)
  const abidsPlans = {
    monthly: [
      { id: "a-ml-1", price: "₹1,00,00,000", install: "₹2,00,000", duration: "50 Months", members: 50 },
      { id: "a-ml-2", price: "₹50,00,000", install: "₹1,00,000", duration: "50 Months", members: 50 },
      { id: "a-ml-3", price: "₹25,00,000", install: "₹50,000", duration: "50 Months", members: 50 },
      { id: "a-ml-4", price: "₹15,00,000", install: "₹30,000", duration: "50 Months", members: 50 },
      { id: "a-ml-5", price: "₹10,00,000", install: "₹20,000", duration: "50 Months", members: 50 },
      { id: "a-ml-6", price: "₹5,00,000", install: "₹10,000", duration: "50 Months", members: 50 },
      { id: "a-ms-1", price: "₹25,00,000", install: "₹1,00,000", duration: "25 Months", members: 25 },
      { id: "a-ms-2", price: "₹10,00,000", install: "₹40,000", duration: "25 Months", members: 25 },
      { id: "a-ms-3", price: "₹5,00,000", install: "₹20,000", duration: "25 Months", members: 25 },
    ],
    daily: [
      { id: "a-dl-1", price: "₹50,00,000", install: "₹5,000", duration: "1000 Days", members: 100 },
      { id: "a-dl-2", price: "₹25,00,000", install: "₹2,500", duration: "1000 Days", members: 100 },
      { id: "a-dl-3", price: "₹10,00,000", install: "₹1,000", duration: "1000 Days", members: 100 },
      { id: "a-dl-4", price: "₹5,00,000", install: "₹500", duration: "1000 Days", members: 100 },
      { id: "a-ds-1", price: "₹5,00,000", install: "₹1,000", duration: "500 Days", members: 50 },
    ]
  };

  // For the new tab logic
  let currentPlans = { monthly: [], daily: [] };
  if (activeBranch === 'abids') {
    currentPlans = abidsPlans;
  } else if (activeBranch === 'secunderabad') {
    currentPlans = { ...secunderabadPlans, daily: [] };
  } else if (activeBranch === 'dailychits') {
    currentPlans = { monthly: [], daily: secunderabadPlans.daily };
  }

  const branches = [
    { id: "abids", label: "Abids Branch" },
    { id: "secunderabad", label: "Secunderabad Branch" },
    { id: "dailychits", label: "Daily Chits" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".page-header-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      animateContent();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Re-trigger animation on branch change
  useEffect(() => {
    if (containerRef.current) {
      animateContent();
    }
  }, [activeBranch]);

  const animateContent = () => {
    gsap.fromTo(".plan-section-anim",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", clearProps: "all" }
    );

    gsap.fromTo(".plan-card-anim",
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: "back.out(1.2)", clearProps: "all" }
    );
  };

  return (
    <React.Fragment>
      <section className="subpage chitplans-page" ref={containerRef}>
        {/* Header Section */}
        <div className="subpage-section pb-0">
          <div className="container">
            <div className="text-center mb-5 page-header-anim">
              <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                Choose Your Plan
              </h6>
              <h1 className="font-bold text-primarynew mb-4 main-title">
                Explore Our Chit Schemes
              </h1>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Select a branch to view available monthly and daily chit groups tailored to your financial goals.
              </p>
            </div>

            {/* Branch Tabs */}
            <div className="d-flex justify-content-center mb-5 page-header-anim">
              <div className="branch-tabs-wrapper">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    className={`branch-tab-btn ${activeBranch === branch.id ? "active" : ""}`}
                    onClick={() => setActiveBranch(branch.id)}
                  >
                    {branch.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="subpage-section pt-0 bg-light-gradient">
          <div className="custom-container">

            {/* Monthly Schemes */}
            {currentPlans.monthly && currentPlans.monthly.length > 0 && (
              <div className="plan-section-anim mb-5">
                <div className="section-divider mb-4">
                  <span className="divider-icon"><i className="fi fi-rr-calendar-clock"></i></span>
                  <h3 className="divider-title">Monthly Schemes</h3>
                  <div className="divider-line"></div>
                </div>
                <div className="row g-4">
                  {currentPlans.monthly.map((plan, idx) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 plan-card-anim" key={idx}>
                      <div className="chit-plan-card-refined h-100 feature-hover">
                        <div className="plan-header pt-4 pb-2">
                          <span className="chit-label d-block mb-1">Chit Value</span>
                          <h3 className="chit-value">{plan.price}</h3>
                        </div>
                        <div className="plan-body px-4 pb-4 pt-2 d-flex flex-column gap-3">
                          <div className="plan-feature-row">
                            <span className="feature-label">
                              <i className="fi fi-rr-hand-holding-usd"></i> Investment
                            </span>
                            <span className="feature-value pl-0 text-dark">
                              {plan.install} <span className="text-muted fs-6 fw-normal">/ Mo</span>
                            </span>
                          </div>
                          <div className="plan-feature-row">
                            <span className="feature-label">
                              <i className="fi fi-rr-calendar"></i> Duration
                            </span>
                            <span className="feature-value text-dark">
                              {plan.duration}
                            </span>
                          </div>
                          <div className="plan-feature-row">
                            <span className="feature-label">
                              <i className="fi fi-rr-users-alt"></i> Members
                            </span>
                            <span className="feature-value text-dark">
                              {plan.members}
                            </span>
                          </div>
                        </div>
                        <div className="plan-footer p-3 mt-auto">
                          <button className="btn-plan py-2 w-100 rounded-3 fw-bold text-uppercase" onClick={() => navigate('/contact')}>
                            Start Investing
                          </button>                      
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Daily Schemes */}
            {currentPlans.daily && currentPlans.daily.length > 0 && (
              <div className="plan-section-anim">
                <div className="section-divider mb-4">
                  <span className="divider-icon secondary"><i className="fi fi-rr-sun"></i></span>
                  <h3 className="divider-title">Daily Schemes</h3>
                  <div className="divider-line"></div>
                </div>
                <div className="row g-4">
                  {currentPlans.daily.map((plan, idx) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 plan-card-anim" key={idx}>
                      <div className="chit-plan-card-refined h-100 feature-hover">
                        <div className="plan-header pt-4 pb-2">
                          <span className="chit-label d-block mb-1">Chit Value</span>
                          <h3 className="chit-value">{plan.price}</h3>
                        </div>
                        <div className="plan-body px-4 pb-4 pt-2 d-flex flex-column gap-3">
                          <div className="plan-feature-row">
                            <span className="feature-label">
                              <i className="fi fi-rr-hand-holding-usd"></i> Investment
                            </span>
                            <span className="feature-value pl-0 text-dark">
                              {plan.install} <span className="text-muted fs-6 fw-normal">/ Day</span>
                            </span>
                          </div>
                          <div className="plan-feature-row">
                            <span className="feature-label">
                              <i className="fi fi-rr-calendar"></i> Duration
                            </span>
                            <span className="feature-value text-dark">
                              {plan.duration}
                            </span>
                          </div>
                          <div className="plan-feature-row">
                            <span className="feature-label">
                              <i className="fi fi-rr-users-alt"></i> Members
                            </span>
                            <span className="feature-value text-dark">
                              {plan.members}
                            </span>
                          </div>
                        </div>                      
                        <div className="plan-footer p-3 mt-auto">
                          <button className="btn-plan py-2 w-100 rounded-3 fw-bold text-uppercase" onClick={() => navigate('/contact')}>
                            Start Investing
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Chitplans;
