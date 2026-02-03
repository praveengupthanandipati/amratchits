import React, { useRef, useState, useEffect } from 'react';
//Import swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    return;
    // Set initial visibility
    if (swiperRef.current) {
      gsap.set(swiperRef.current, { clearProps: "all" });
    }

    // Animate testimonials swiper on scroll
    if (swiperRef.current) {
      gsap.fromTo(swiperRef.current,
        {
          scale: 0.95,
        },
        {
          scrollTrigger: {
            trigger: swiperRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // Testimonials data
  const testimonialsData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      designation: "Business Owner, Hyderabad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "Amrat Chits has been a game-changer for my business. Their transparent process and timely payouts have helped me expand my shop significantly. The customer service is exceptional and I highly recommend their services."
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Homemaker, Warangal",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: "I've been investing with Amrat Chits for 2 years now. The monthly savings plan helped me save for my daughter's education. Very trustworthy and reliable service with excellent support team."
    },
    {
      id: 3,
      name: "Venkat Reddy",
      designation: "IT Professional, Secunderabad",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "The customer service is exceptional. They guided me through every step and made the chit fund process very simple and transparent. I'm extremely satisfied with their professional approach."
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      designation: "Teacher, Karimnagar",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "Amrat Chits helped me achieve my dream of buying a house. Their flexible payment options and reliable service made it possible. The team is very supportive and understanding."
    }
  ];

  return (
    <React.Fragment>
      <div ref={swiperRef}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="testimonialsSwiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-slide">
                {/* Top right corner quote icon */}
                <div className="quote-icon">
                  <span className="icon-quotes icomoon"></span>
                </div>

                {/* Second row: Avatar and Name/Designation */}
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <div className="testimonial-image me-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="avatar-img rounded-circle"
                      onError={(e) => {
                        // Fallback to avatar with initials if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="avatar-circle rounded-circle" style={{ display: 'none' }}>
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h5 className="testimonial-name mb-1">{testimonial.name}</h5>
                    <p className="testimonial-designation mb-0">{testimonial.designation}</p>
                  </div>
                </div>
                {/* Third row: Testimonial description */}
                <div className="testimonial-description">
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  )
}

export default Testimonials
