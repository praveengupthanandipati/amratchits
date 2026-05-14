import React, { useEffect, useRef } from "react";
import slideIllust1 from "../assets/img/slide_illust_1.png";
import slideIllust2 from "../assets/img/slide_illust_2.png";
import slideIllust3 from "../assets/img/slide_illust_3.png";
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
    return;
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
      image: slideIllust1,
      alt: "Chit Fund Benefits",
      title: "A Legacy of Trust, A Future of Security.",
      description: "For decades, we've empowered dreams with transparent, RBI-compliant chit funds. Your trusted partner for secure savings and timely loans.",
      link: { url: "/chitplans", label: "View Chit Plans" },
      imagePosition: "left"
    },
    {
      id: 2,
      image: slideIllust2,
      alt: "Investment Growth",
      title: "Your Goal, Our Plan. Achieve It Sooner. ",
      description: "Plan for education, a home, or a business with our disciplined chit schemes. Turn your ambitions into reality faster.",
      link: { url: "/chitplans", label: "View Chit Plans" },
      imagePosition: "right"
    },
    {
      id: 3,
      image: slideIllust3,
      alt: "Trusted Partnership",
      title: "Simple Savings, Collective Growth. ",
      description: "Join a community-driven financial journey. Save regularly and access a large fund when you need it most.",
      link: { url: "/chitplans", label: "View Chit Plans" },
      imagePosition: "left"
    },
  ];

  return (
    <React.Fragment>
      <section className="hero-section position-relative overflow-hidden" style={{ height: '60vh' }}>
        <div className="w-100 h-100">
          <div className="HeroCarousel h-100" ref={carouselRef}>
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".hero-swiper-button-next",
                prevEl: ".hero-swiper-button-prev",
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              loop={true}
              className="hero-swiper"
              style={{ width: '100%', maxWidth: '100%' }}
            >
              {carouselSlides.map((slide) => (
                <SwiperSlide key={slide.id} className="position-relative">
                  <div className="carousel-slide carousel-slide-inner">
                    <div className="container h-100">
                      <div className={`row align-items-center flex-column h-100 flex-md-row${slide.imagePosition === 'right' ? '-reverse' : ''}`}>
                        {/* Image Side */}
                        <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center align-items-center h-100 slide-image-container">
                          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                            <img
                              src={slide.image}
                              alt={slide.alt}
                              className="img-fluid sliderimg"
                              style={{
                                position: 'relative',
                                zIndex: 3,
                                display: 'block',
                                margin: '0 auto',
                                width: '100%',
                                objectFit: 'contain',
                                mixBlendMode: 'multiply'
                              }}
                            />
                          </div>
                        </div>
                        {/* Article Side */}
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center h-100 slide-content-container">
                          <div className="carousel-content carousel-content-wrapper text-center text-md-start d-flex flex-column justify-content-center" style={{ paddingLeft: slide.imagePosition === 'right' ? '0' : '5%', paddingRight: slide.imagePosition === 'right' ? '5%' : '0' }}>
                            <article>
                              <h3 className="roboto-bold text-uppercase mb-3">
                                {slide.title}
                              </h3>
                              <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{slide.description}</p>
                              {slide.link && (
                                <Link to={slide.link.url} className="btn-secondary text-uppercase mt-2 text-white">
                                  {slide.link.label}
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
