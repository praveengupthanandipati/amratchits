import React from "react";
import heroleftimg from "../assets/img/heroleft-banner.jpg";
import herocarousel01 from "../assets/img/Herocarousel01.png";
import herocarousel02 from "../assets/img/Herocarousel02.jpg";
import herocarousel03 from "../assets/img/Herocarousel03.jpg";
import herobannerpattern from "../assets/img/herobannerpattern.png";
import herovideoimg from "../assets/img/video-img.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Homeherosection = () => {
  // Carousel slides data
  const carouselSlides = [
    {
      id: 1,
      image: herocarousel01,
      alt: "Chit Fund Benefits",
      title: "Building your dreams with reliable savings and disciplined financial planning",      
    },
    {
      id: 2,
      image: herocarousel02,
      alt: "Investment Growth",
      title: "Building your dreams with reliable savings and disciplined financial planning",      
    },
    {
      id: 3,
      image: herocarousel03,
      alt: "Trusted Partnership",
      title: "Building your dreams with reliable savings and disciplined financial planning",
    }
  ];

  return (
    <React.Fragment>
      <div className="custom-container">
        <div className="row py-4 align-items-center">
          <div className="col-lg-6">
            <div className="Heroleftimg position-relative">
              <img
                src={heroleftimg}
                alt="Heroleftimg"
                className="img-fluid w-100 rounded-5"
              />
              <article>
                <h1 className="text-uppercase text-white font-bold">
                  Secure Your Future with Amrat Chits India{" "}
                </h1>
                <p className="text-white pb-2 pt-1">
                  Secure your tomorrow with our reliable chit fund schemes and
                  guaranteed, timely payouts.
                </p>
                <Link to="/contact" className="btn-primary-light">
                  Read More about us
                </Link>
              </article>
            </div>
          </div>
          <div className="col-lg-6">
            {/* carousel */}
            <div className="HeroCarousel">
               
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
              >
                {carouselSlides.map((slide) => (
                  <SwiperSlide key={slide.id} className="position-relative">
                     
                    <div className="carousel-slide">
                        <img src={herobannerpattern} alt="herobannerpattern" className="herobannerpattern position-absolute" />
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="img-fluid w-100 rounded-4 sliderimg"
                      />
                      <div className="carousel-content">
                         <article>
                             <h3 className="roboto-bold text-white text-uppercase">{slide.title}</h3>             
                        </article>         
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="hero-swiper-button-prev swiper-nav-btn">
                <span className="nav-icon">‹</span>
              </div>
              <div className="hero-swiper-button-next swiper-nav-btn">
                <span className="nav-icon">›</span>
              </div>

              {/* Custom Pagination */}
              <div className="hero-swiper-pagination swiper-pagination-custom"></div>
            </div>

            {/** cards */}
            <div className="row pt-4">
                <div className="col-lg-4">
                    <div className="hero-rt-card rounded-4">
                       <article>
                         <h2 className="lato-black">1000+</h2>
                         <h5>Customers</h5>
                       </article>
                       <figure className="mt-5">
                            <span className="icon-customers icomoon"></span>
                       </figure>
                    </div>
                </div>
                 <div className="col-lg-4">
                    <div className="hero-rt-card rounded-4">
                       <article>
                         <h2 className="lato-black">150+</h2>
                         <h5>Chit Agents</h5>
                       </article>
                       <figure className="mt-5">
                            <span className="icon-agents icomoon"></span>
                       </figure>
                    </div>
                </div>
                <div className="col-lg-4">
                    <figure className="position-relative herovideoimg">
                        <img src={herovideoimg} alt="herovideoimg" className="img-fluid rounded-4" />
                        <Link to="#" className="video-play-btn position-absolute">
                           <span className="icon-play icomoon"></span>
                        </Link>
                    </figure>
                </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homeherosection;
