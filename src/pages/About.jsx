import React from "react";
import About01img from "../assets/img/aboutpageimg01.jpg";
import About02img from "../assets/img/aboutpageimg02.jpg";
import About03img from "../assets/img/aboutpageimg03.jpg";
import About04img from "../assets/img/aboutpageimg04.jpg";
import Aboutbanner01 from "../assets/img/aboutpagebanner01.jpg";
import Aboutbanner02 from "../assets/img/section2img.jpg";

const About = () => {
  return (
    <React.Fragment>
      <section className="subpage">
        <div className="subpage-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <article className="pe-3">
                  <div className="pb-3">
                    <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                      About us
                    </h6>
                    <h1 className="font-bold text-primarynew">
                      Empowering Futures and Decades of Excellence
                    </h1>
                  </div>

                  <p>
                    In a world where financial choices shape destinies, Amrat
                    Chits (India) Pvt. Ltd. stands as an enduring testament to
                    trust, tradition, and transformation. For over four decades,
                    we have etched a legacy in the chit fund industry, steadily
                    enriching the lives of our valued customers. While our
                    journey as a private limited organization commenced just
                    four years ago, our roots in the chit fund trade reach back
                    over 40 years.
                  </p>
                </article>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={About01img}
                      alt=""
                      className="img-fluid rounded-5 mb-3"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src={About02img}
                      alt=""
                      className="img-fluid rounded-5 mb-3"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src={About03img}
                      alt=""
                      className="img-fluid rounded-5 mb-3"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src={About04img}
                      alt=""
                      className="img-fluid rounded-5 mb-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <figure>
          <img
            src={Aboutbanner01}
            alt="about banner"
            className="img-fluid w-100"
          />
        </figure>

        <div className="subpage-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="py-3 my-2 d-flex icondiv-section pb-3 border-bottom">
                  <div className="div-icon">
                    <i class="fi fi-rr-time-forward icomoon"></i>
                  </div>
                  <article>
                    <h2 className="font-bold">Our Tradition, Your Future</h2>
                    <p>
                      We take pride in our deep-seated legacy, an asset that
                      radiates our unwavering commitment to your financial
                      well-being. In a sector defined by complexity, we have
                      always thrived on simplicity, putting you and your dreams
                      at the heart of everything we do. Our principles are
                      rooted in trust, service excellence, and dedication. We
                      consider our customers as the driving force behind our
                      success.
                    </p>
                  </article>
                </div>

                <div className="py-3 my-2 d-flex icondiv-section pb-3 border-bottom">
                  <div className="div-icon">
                   <i class="fi fi-rs-shield-check icomoon"></i>
                  </div>
                  <article>
                    <h2 className="font-bold">Service Beyond Expectations</h2>
                    <p>
                      At Amrat Chits, we've mastered the art of serving you
                      better. Our mission has always been to provide a seamless
                      experience, uncompromisingly dedicated to your financial
                      aspirations. We are not just an organization; we are a
                      promise - a promise to be available with the highest
                      standards of service, a promise to provide the finest
                      customer support, and a promise to uphold your trust.
                    </p>
                  </article>
                </div>

                <div className="py-3 my-2 d-flex icondiv-section pb-3 border-bottom">
                  <div className="div-icon">
                    <i class="fi fi-rr-user-robot icomoon"></i>
                  </div>
                  <article>
                    <h2 className="font-bold">
                      Where Tradition Meets Technology
                    </h2>
                    <p>
                      As a 40+ years veteran in the industry, we combine the
                      wisdom of tradition with the power of technology to bring
                      you chit fund solutions that are efficient, secure, and
                      dynamic. Our journey is a living testament to the
                      resilience of our values and the innovation of our
                      approach.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="subpage-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4 align-self-center">
                <img
                  src={Aboutbanner02}
                  alt="about banner"
                  className="img-fluid rounded-4"
                />
              </div>
              <div className="col-md-8 align-self-center ps-2 ps-md-5">
                <div className="pb-3">
                  <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                    Why Us
                  </h6>
                  <h1 className="font-bold text-primarynew">
                    Why choose Amrat
                  </h1>
                </div>
                <p>
                  At Amrat Chits (India) Pvt. Ltd., we're more than a chit fund
                  company; we're your financial partner in realizing your
                  dreams. With us, trust is the bedrock, and service is our
                  compass. Your faith in us drives us to continually redefine
                  the standards of excellence in the chit fund field.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <div className="py-3 my-2 d-flex icondiv-section pb-3">
                      <div className="div-icon">
                        <i class="fi fi-rr-shield-keyhole icomoon"></i>
                      </div>
                      <article>
                        <h4 className="font-bold text-primarynew pb-2">
                          Creating a Secure and Transparent Platform
                        </h4>
                        <p>
                          We prioritize trust and integrity in every aspect of
                          our operations. Our track record reflects our
                          commitment to maintaining the highest standards of
                          ethical conduct.
                        </p>
                      </article>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="py-3 my-2 d-flex icondiv-section pb-3">
                      <div className="div-icon">
                        <i class="fi fi-rs-hr-person icomoon"></i>
                      </div>
                      <article>
                        <h4 className="font-bold text-primarynew pb-2">
                          Customer-centric Approach
                        </h4>
                        <p>
                          Our customers are at the heart of everything we do. We
                          strive to provide personalized services and ensure
                          their financial well-being.
                        </p>
                      </article>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="py-3 my-2 d-flex icondiv-section pb-3">
                      <div className="div-icon">
                        <i class="fi fi-rr-user-experience icomoon"></i>
                      </div>
                      <article>
                        <h4 className="font-bold text-primarynew pb-2">
                          Experienced Team
                        </h4>
                        <p>
                          Our team comprises seasoned professionals with
                          extensive expertise in the financial industry. We
                          leverage our knowledge to deliver superior services
                          and value to our customers.
                        </p>
                      </article>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="py-3 my-2 d-flex icondiv-section pb-3">
                      <div className="div-icon">
                        <i class="fi fi-rr-calendar-gavel-legal icomoon"></i>
                      </div>
                      <article>
                        <h4 className="font-bold text-primarynew pb-2">
                          Regulatory Compliance
                        </h4>
                        <p>
                          We operate within the legal framework and comply with
                          all relevant regulations to ensure a secure and
                          compliant environment for our customers.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="subpage-section">
          <div className="container">
                <div className="row">
                  <div className="col-md-4">
                     <div className="pb-3">
                      <h6 className="text-secondarynew text-uppercase letter-spacing font-bold pb-2">
                        OUR TEAM
                      </h6>
                      <h1 className="font-bold text-primarynew">
                          Leading the way in business transformation
                      </h1>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
