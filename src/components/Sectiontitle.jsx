import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sectiontitle = ({ title, description, className, titleClass, descriptionClass }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    return;
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div className={`section-title ${className || ''}`} ref={titleRef}>
      <h2 className={`section-title-h2 ${titleClass || ''}`}>{title}</h2>
      <p className={descriptionClass || ''}>{description}</p>
    </div>
  )
}

export default Sectiontitle
