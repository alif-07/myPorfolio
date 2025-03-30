import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import ecommerce1 from '../Components/photo/ecommerce1.jpg';
import ecommerce2 from '../Components/photo/ecommerce2.jpg';
import ecommerce3 from '../Components/photo/ecommerce3.jpg';
import ecommerce4 from '../Components/photo/ecommerce4.jpg';
import ecommerce5 from '../Components/photo/ecommerce5.jpg';
import portfolio1 from '../Components/photo/portfolio1.jpg';
import portfolio2 from '../Components/photo/portfolio2.jpg';
import AdminFirst from '../Components/photo/adminFirst.jpg';

const Services = () => {
  const containerRef = useRef(null);
  const sections = useRef([]);

  useEffect(() => {
    gsap.to(sections.current, {
      xPercent: -100 * (sections.current.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        start: 'top top',
        end: '+=3000',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden w-full">
      <div className="flex w-[800%]">
        {[ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5, portfolio1, portfolio2, AdminFirst].map((image, index) => (
          <section
            key={index}
            ref={(el) => (sections.current[index] = el)}
            className="h-screen w-screen flex justify-center items-center bg-[#0D0D0D]"
          >
            <img
              src={image}
              alt={`Service ${index + 1}`}  
              className="sm:w-[90%] sm:h-[90%] md:w-[85%] md:h-[85%] lg:w-[80%] lg:h-[80%] xl:w-[75%] xl:h-[75%] 2xl:w-[70%] 2xl:h-[70%]" 
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
