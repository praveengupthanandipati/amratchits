import React, { useRef } from "react";

const Homefeatures = () => {
  const featureRefs = useRef([]);
  const sectionRef = useRef(null);

  return (
    <React.Fragment>
      <div className="container" ref={sectionRef}>
        <div className="row">
          <div className="col-md-3" ref={el => featureRefs.current[0] = el}>
            <div className="feature-column mb-2 mb-md-0">
              <h2 className="font-bold">5000 +</h2>
              <h5>Trusted Customers</h5>
              <div className="icon">
                <i className="fi fi-tr-user-trust icomoon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3" ref={el => featureRefs.current[1] = el}>
            <div className="feature-column mb-2 mb-md-0">
              <h2 className="font-bold">150 +</h2>
              <h5>Dedicated Working Team</h5>
              <div className="icon">
                <i className="fi fi-tr-employees icomoon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3" ref={el => featureRefs.current[2] = el}>
            <div className="feature-column mb-2 mb-md-0">
              <h2 className="font-bold">200 +</h2>
              <h5>Chit Agents</h5>
              <div className="icon">
                <i className="fi fi-tr-heart-partner-handshake icomoon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3" ref={el => featureRefs.current[3] = el}>
            <div className="feature-column mb-2 mb-md-0">
              <h2 className="font-bold">25 +</h2>
              <h5>Years of Experience</h5>
              <div className="icon">
                <i className="fi fi-tr-trophy-star icomoon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default Homefeatures;
