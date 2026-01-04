import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const animElements = sectionRef.current.querySelectorAll('.contact-anim');

      gsap.fromTo(animElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const validateField = (key, value) => {
    if (!value || !String(value).trim()) return "This field is required.";
    if (key === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) return "Enter a valid email.";
    }
    if (key === "phone") {
      if (!/^[0-9+\-\s]{7,20}$/.test(String(value).trim()))
        return "Enter a valid phone number.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    Object.keys(form).forEach((k) => {
      const msg = validateField(k, form[k]);
      if (msg) next[k] = msg;
    });
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setSuccessMessage("");
      // simulate submit
      setTimeout(() => {
        setSuccessMessage("Message sent! We'll get back to you shortly.");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setSubmitted(false);
        setTimeout(() => setSuccessMessage(""), 6000);
      }, 1000);
    }
  };

  const contactDetails = [
    {
      title: "Call Us",
      icon: "fi-rr-phone-call",
      lines: ["040-66200571 "],
      color: "blue"
    },
    {
      title: "Email Us",
      icon: "fi-rr-envelope",
      lines: ["info@amratchits.com", "amratchits@gmail.com"],
      color: "maroon"
    },
    {
      title: "Head Office",
      icon: "fi-rr-marker",
      lines: ["Flat No: 1111, 11th Floor, Raghav Ratna Towers Chirag Ali Lane, Abids, Hyderabad - 500 001"],
      color: "gold"
    },
    {
      title: "Branch Office",
      icon: "fi-rr-map-pin",
      lines: ["F.No-201, 2nd Floor, Padmaja Plaza,", "Near Pillar No-137, Upparpally, Hyderabad"],
      color: "blue"
    }
  ];

  return (
    <React.Fragment>
      <section className="contact-page" ref={sectionRef}>
        {/* Hero Section */}
        <div className="contact-hero-section">
          <div className="container position-relative z-index-1">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 contact-anim">
                <h6 className="text-secondarynew text-uppercase letter-spacing font-bold mb-3">GET IN TOUCH</h6>
                <h1 className="display-4 font-bold text-white mb-4">We're Here to Help You Grow</h1>
                <p className="lead text-white opacity-80 mb-0">Have questions about our chit plans or need financial advice? Reach out to our experts today.</p>
              </div>
            </div>
          </div>
          <div className="hero-decor"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-section mb-5">
          <div className="container">
            <div className="row g-4">
              {contactDetails.map((item, idx) => (
                <div className="col-lg-3 col-md-6 contact-anim" key={idx}>
                  <div className="info-card shadow-sm">
                    <div className="info-icon-wrapper">
                      <i className={`fi ${item.icon}`}></i>
                    </div>
                    <h5>{item.title}</h5>
                    {item.lines.map((line, li) => (
                      <p key={li}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="container py-5">
          <div className="row justify-content-center g-5">
            <div className="col-lg-8 contact-anim">
              <div className="contact-form-wrapper">
                <h2 className="form-title">Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                        <label>Your Name</label>
                        <input name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />
                        {errors.name && <div className="invalid-feedback text-danger small mt-1">{errors.name}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                        <label>Email Address</label>
                        <input name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} />
                        {errors.email && <div className="invalid-feedback text-danger small mt-1">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                        <label>Phone Number</label>
                        <input name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                        {errors.phone && <div className="invalid-feedback text-danger small mt-1">{errors.phone}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`form-group ${errors.subject ? "has-error" : ""}`}>
                        <label>Subject</label>
                        <input name="subject" placeholder="Interested in Chit Plan" value={form.subject} onChange={handleChange} />
                        {errors.subject && <div className="invalid-feedback text-danger small mt-1">{errors.subject}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className={`form-group ${errors.message ? "has-error" : ""}`}>
                        <label>Your Message</label>
                        <textarea name="message" placeholder="How can we help you?" rows={5} value={form.message} onChange={handleChange} />
                        {errors.message && <div className="invalid-feedback text-danger small mt-1">{errors.message}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-submit" disabled={submitted}>
                        {submitted ? (
                          <span className="d-flex align-items-center justify-content-center gap-2">
                            <span className="spinner-border spinner-border-sm" role="status"></span> Sending...
                          </span>
                        ) : "Send Message"}
                      </button>
                      {successMessage && (
                        <div className="alert alert-success mt-4 border-0 rounded-4 py-3 contact-anim" role="status">
                          <i className="fi fi-rr-check-circle me-2"></i> {successMessage}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
