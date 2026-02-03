import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sectiontitle from "./Sectiontitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Homechitplans = () => {
    const [activeTab, setActiveTab] = useState("monthly-long");
    const [isAnimating, setIsAnimating] = useState(false);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        return;
        // Set initial visibility
        if (sectionRef.current) {
            gsap.set(sectionRef.current, { clearProps: "all" });
        }

        // Animate section on scroll
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
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
            id: "monthly-long",
            label: "Monthly Long-period",
            plans: [
                {
                    id: 1,
                    chitPrice: "₹1,00,00,000",
                    monthly: "₹2,00,000",
                    months: 50,
                    members: 50,
                },
                {
                    id: 2,
                    chitPrice: "₹50,00,000",
                    monthly: "₹1,00,000",
                    months: 50,
                    members: 50,
                },
                {
                    id: 3,
                    chitPrice: "₹25,00,000",
                    monthly: "₹50,000",
                    months: 50,
                    members: 50,
                },
                {
                    id: 4,
                    chitPrice: "₹15,00,000",
                    monthly: "₹30,000",
                    months: 50,
                    members: 50,
                },
                {
                    id: 5,
                    chitPrice: "₹10,00,000",
                    monthly: "₹20,000",
                    months: 50,
                    members: 50,
                },
                {
                    id: 6,
                    chitPrice: "₹5,00,000",
                    monthly: "₹10,000",
                    months: 50,
                    members: 50,
                },
            ],
        },
        {
            id: "monthly-short",
            label: "Monthly Short-period",
            plans: [
                {
                    id: 1,
                    chitPrice: "₹25,00,000",
                    monthly: "₹1,00,000",
                    months: 25,
                    members: 25,
                },
                {
                    id: 2,
                    chitPrice: "₹10,00,000",
                    monthly: "₹40,000",
                    months: 25,
                    members: 25,
                },
                {
                    id: 3,
                    chitPrice: "₹5,00,000",
                    monthly: "₹20,000",
                    months: 25,
                    members: 25,
                },
            ],
        },
        {
            id: "daily-long",
            label: "Daily Long-Period",
            plans: [
                {
                    id: 1,
                    chitPrice: "₹50,00,000",
                    daily: "₹5,000",
                    days: 1000,
                    members: 100,
                },
                {
                    id: 2,
                    chitPrice: "₹25,00,000",
                    daily: "₹2,500",
                    days: 1000,
                    members: 100,
                },
                {
                    id: 3,
                    chitPrice: "₹10,00,000",
                    daily: "₹1,000",
                    days: 1000,
                    members: 100,
                },
                {
                    id: 4,
                    chitPrice: "₹5,00,000",
                    daily: "₹500",
                    days: 1000,
                    members: 100,
                },
            ],
        },
        {
            id: "daily-short",
            label: "Daily Short-period",
            plans: [
                {
                    id: 1,
                    chitPrice: "₹5,00,000",
                    daily: "₹1,000",
                    days: 500,
                    members: 50,
                },
            ],
        },
    ];

    const currentTabData = tabsData.find((tab) => tab.id === activeTab);

    return (
        <React.Fragment>
            <section className="chitplans-section" ref={sectionRef}>
                <div className="custom-container">
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
                                        className={`nav-link ${activeTab === tab.id ? "active" : ""
                                            }`}
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
                            <div
                                className={`tab-pane fade show active ${isAnimating ? "tab-animating-out" : "tab-animating-in"
                                    }`}
                            >
                                <div className="row g-3 pt-4" key={activeTab}>
                                    {currentTabData?.plans.map((plan, index) => (
                                        <div
                                            key={plan.id}
                                            className="col-xl-3 col-md-4 col-sm-6"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <div className="chit-plan-card-refined">
                                                <div className="plan-header">
                                                    <span className="chit-label">Chit Value</span>
                                                    <h3 className="chit-value">{plan.chitPrice}</h3>
                                                </div>
                                                <div className="plan-body">
                                                    <div className="plan-feature-row">
                                                        <span className="feature-label">
                                                            <i className="fi fi-rr-hand-holding-usd"></i>
                                                            Investment
                                                        </span>
                                                        <span className="feature-value">
                                                            {(activeTab === "daily-long" || activeTab === "daily-short") ? `${plan.daily} / Day` : `${plan.monthly} / Mo`}
                                                        </span>
                                                    </div>
                                                    <div className="plan-feature-row">
                                                        <span className="feature-label">
                                                            <i className="fi fi-rr-calendar"></i>
                                                            Duration
                                                        </span>
                                                        <span className="feature-value">
                                                            {(activeTab === "daily-long" || activeTab === "daily-short") ? `${plan.days} Days` : `${plan.months} Months`}
                                                        </span>
                                                    </div>
                                                    <div className="plan-feature-row">
                                                        <span className="feature-label">
                                                            <i className="fi fi-rr-users-alt"></i>
                                                            Members
                                                        </span>
                                                        <span className="feature-value">
                                                            {plan.members}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="plan-footer">
                                                    <button className="btn-plan" onClick={() => navigate('/contact')}>
                                                        Start Investing
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
                                                <div
                                                    key={plan.id}
                                                    className="chit-plan-card-refined mb-3"
                                                >
                                                    <div className="plan-header pt-3 pb-3">
                                                        <span className="chit-label" style={{ fontSize: '0.8rem' }}>Chit Value</span>
                                                        <h3 className="chit-value" style={{ fontSize: '1.5rem' }}>{plan.chitPrice}</h3>
                                                    </div>
                                                    <div className="plan-body p-3 gap-2">
                                                        <div className="plan-feature-row">
                                                            <span className="feature-label font-md">
                                                                <i className="fi fi-rr-hand-holding-usd"></i>
                                                                Invest
                                                            </span>
                                                            <span className="feature-value font-md">
                                                                {(tab.id === "daily-long" || tab.id === "daily-short") ? `${plan.daily} / Day` : `${plan.monthly} / Mo`}
                                                            </span>
                                                        </div>
                                                        <div className="plan-feature-row">
                                                            <span className="feature-label font-md">
                                                                <i className="fi fi-rr-calendar"></i>
                                                                Duration
                                                            </span>
                                                            <span className="feature-value font-md">
                                                                {(tab.id === "daily-long" || tab.id === "daily-short") ? `${plan.days} Days` : `${plan.months} Months`}
                                                            </span>
                                                        </div>
                                                        <div className="plan-feature-row">
                                                            <span className="feature-label font-md">
                                                                <i className="fi fi-rr-users-alt"></i>
                                                                Members
                                                            </span>
                                                            <span className="feature-value font-md">
                                                                {plan.members}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="plan-footer p-3">
                                                        <button className="btn-plan py-2" onClick={() => navigate('/contact')}>
                                                            Start Investing
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
    );
};

export default Homechitplans;
