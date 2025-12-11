import React, { useState } from "react";

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
        setSuccessMessage("Message sent — we will call you shortly.");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setSubmitted(false);
        // auto-hide after 6s
        setTimeout(() => setSuccessMessage(""), 6000);
      }, 400);
    }
  };

  return (
    <React.Fragment>
      <div className="subpage">
        <div className="subpage-section">
          <div className="container">
            <div className="pb-3">
              <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                Reach us
              </h6>
              <h1 className="font-bold text-primarynew">
                Send Your message to get Call from us
              </h1>
            </div>

            <div className="row">
              <div className="col-md-8">
                <div className="contact-card">
                  {/* <h3 className="card-title">Ask for a call back</h3> */}
                  <p className="card-sub">
                    Leave your details and we'll call you back shortly.
                  </p>

                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <div
                          className={`form-group ${
                            errors.name ? "has-error" : ""
                          }`}
                        >
                          <label htmlFor="name">Name</label>
                          <input
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={handleChange}
                          />
                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div
                          className={`form-group ${
                            errors.email ? "has-error" : ""
                          }`}
                        >
                          <label htmlFor="email">Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div
                          className={`form-group ${
                            errors.phone ? "has-error" : ""
                          }`}
                        >
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={form.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && (
                            <div className="invalid-feedback">
                              {errors.phone}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div
                          className={`form-group ${
                            errors.subject ? "has-error" : ""
                          }`}
                        >
                          <label htmlFor="subject">Subject</label>
                          <input
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                          />
                          {errors.subject && (
                            <div className="invalid-feedback">
                              {errors.subject}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div
                          className={`form-group ${
                            errors.message ? "has-error" : ""
                          }`}
                        >
                          <label htmlFor="message">Write a message</label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Type your message..."
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                          />
                          {errors.message && (
                            <div className="invalid-feedback">
                              {errors.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-actions">
                          <button
                            type="submit"
                            className="btn-primary"
                            disabled={submitted}
                          >
                            {submitted ? "Sending..." : "Send message"}
                          </button>
                          {successMessage && (
                            <div className="success-message" role="status">
                              {successMessage}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
