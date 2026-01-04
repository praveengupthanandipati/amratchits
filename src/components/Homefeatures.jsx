import React, { useEffect, useRef } from "react";
import herovideoimg from "../assets/img/video-img.jpg";

const Homefeatures = () => {
  const [showModal, setShowModal] = React.useState(false);
  const featureRefs = useRef([]);
  const sectionRef = useRef(null);

  const handlePlayClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Animations disabled for this page (temporary)
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <div className="container" ref={sectionRef}>
        <div className="row">
          <div className="col-md-3" ref={el => featureRefs.current[0] = el}>
            <div className="feature-column">
              <h2 className="font-bold">1000 +</h2>
              <h5>Trusted Customers</h5>
              <div className="icon">
                <i className="fi fi-tr-user-trust icomoon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3" ref={el => featureRefs.current[1] = el}>
            <div className="feature-column">
              <h2 className="font-bold">200 +</h2>
              <h5>Dedicated Working Team</h5>
              <div className="icon">
                <i className="fi fi-tr-employees icomoon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3" ref={el => featureRefs.current[2] = el}>
            <div className="feature-column">
              <h2 className="font-bold">150 +</h2>
              <h5>Chit Agents</h5>
              <div className="icon">
                <i className="fi fi-tr-heart-partner-handshake icomoon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3" ref={el => featureRefs.current[3] = el}>
            <div className="feature-column herovideoimg p-0 position-relative">
              <img
                src={herovideoimg}
                alt="hero video img"
                className="img-fluid rounded-4"
              />
              <button
                className="video-play-btn position-absolute top-50 start-50 translate-middle border-0 bg-transparent p-0"
                onClick={handlePlayClick}
              >
                <span className="icon-play fs-1 text-white"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for Video */}
      {showModal && (
        <div>
          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            onClick={handleCloseModal}
          >
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header border-0">
                  <h5 className="modal-title">Watch Our Video</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-black"
                    onClick={handleCloseModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-0">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/hMBN6yTIDb0?autoplay=1"
                      title="Finance Basics Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            style={{ zIndex: 1050 }}
            onClick={handleCloseModal}
          ></div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Homefeatures;
