import React, { useEffect, useRef } from "react";
import heroleftimg from "../assets/img/heroleft-banner.jpg";
import herocarousel01 from "../assets/img/Herocarousel01.png";
import herocarousel02 from "../assets/img/Herocarousel02.png";
import herocarousel03 from "../assets/img/Herocarousel03.png";
import herobannerpattern from "../assets/img/herobannerpattern.png";
import herovideoimg from "../assets/img/video-img.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Homeherosection = () => {
  const carouselRef = useRef(null);
  const videoIframeRef = useRef(null);
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState('');

  const handleVideoClick = (e) => {
    e.preventDefault();
    setVideoUrl('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&loop=1&playlist=dQw4w9WgXcQ');
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
    // Stop video by removing the src
    setVideoUrl('');
  };

  useEffect(() => {
    // Animate carousel on load
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "all"
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // Carousel slides data
  const carouselSlides = [
    {
      id: 1,
      image: herocarousel01,
      alt: "Chit Fund Benefits",
      title: "Secure Your Future with Amrat Chits India ",
      description: "Secure your tomorrow with our reliable chit fund schemes and guaranteed, timely payouts.",
      link: { url: "/contact", label: "Contact Us" }
    },
    {
      id: 2,
      image: herocarousel02,
      alt: "Investment Growth",
      title: "Secure Your Future with Amrat Chits India ",
      description: "Secure your tomorrow with our reliable chit fund schemes and guaranteed, timely payouts.",
      link: { url: "/chit-plans", label: "View Chit Plans" }
    },
    {
      id: 3,
      image: herocarousel03,
      alt: "Trusted Partnership",
      title: "Secure Your Future with Amrat Chits India ",
      description: "Secure your tomorrow with our reliable chit fund schemes and guaranteed, timely payouts.",
      link: { url: "/about", label: "Learn More" }
    },
  ];

  return (
    <React.Fragment>
      <section className="hero-section position-relative overflow-hidden">       
        <div className="w-100">
          <div className="HeroCarousel" ref={carouselRef}>
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".hero-swiper-button-next",
                prevEl: ".hero-swiper-button-prev",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              loop={true}
              className="hero-swiper"
              style={{width: '100%', maxWidth: '100%'}}
            >
              {carouselSlides.map((slide) => (
                <SwiperSlide key={slide.id} className="position-relative">
                  <div className="carousel-slide" style={{
                    height: window.innerWidth < 768 ? '100vh' : 'auto',
                    minHeight: window.innerWidth < 768 ? '100vh' : 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                  }}>
                    <div className="container h-100">
                      <div className="row align-items-center flex-column flex-md-row h-100">
                        {/* Left: Image */}
                        <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center align-items-center h-100">
                          <div style={{position: 'relative', width: '100%'}}>
                            <img
                              src={slide.image}
                              alt={slide.alt}
                              className="img-fluid sliderimg rounded-4"
                              style={{
                                position: 'relative',
                                zIndex: 3,                                 
                              }}
                            />
                          </div>
                        </div>
                        {/* Right: Article */}
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center h-100">
                          <div className="carousel-content w-100 text-center text-md-start p-3 p-md-0" style={{
                            background: window.innerWidth < 768 ? 'rgba(32,24,93,0.08)' : 'none',
                            borderRadius: window.innerWidth < 768 ? '12px' : '0',
                            boxShadow: window.innerWidth < 768 ? '0 2px 8px rgba(32,24,93,0.07)' : 'none',
                            marginBottom: window.innerWidth < 768 ? '1rem' : '0'
                          }}>
                            <article>
                              <h3 className="roboto-bold text-uppercase mb-3">
                                {slide.title}
                              </h3>
                              <p className="mb-3" >{slide.description}</p>
                              {slide.link && (
                                <Link to={slide.link.url} className="btn-secondary text-uppercase mt-2 text-white">
                                  Read More About us
                                </Link>
                              )}
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="hero-swiper-button-prev swiper-nav-btn">
              <span className="icon-left-icon icomoon"></span>
            </div>
            <div className="hero-swiper-button-next swiper-nav-btn">
              <span className="icon-right-icon icomoon"></span>
            </div>
            {/* Custom Pagination (not linked to Swiper, for future use) */}
            {/* <div className="hero-swiper-pagination swiper-pagination-custom"></div> */}
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div>
            <div 
              className="modal fade show" 
              style={{ display: 'block' }}
              tabIndex="-1"
              role="dialog"
              aria-modal="true"
              onClick={handleCloseModal}
            >
              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                      {videoUrl && (
                        <iframe
                          ref={videoIframeRef}
                          src={videoUrl}
                          title="Video Player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show" style={{ zIndex: 1050 }} onClick={handleCloseModal}></div>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};

export default Homeherosection;
