"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  useEffect(() => {
    gsap.fromTo(
      ".mil-brand img",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".mil-brands",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="mil-brands mil-p-160-160">
      <div className="container">
        <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
          Powered by industry leading partners and technology!
        </h5>
        <div className="row justify-content-center">
          {["1", "2", "3", "4", "5", "6"].map((num) => (
            <div className="col-4 col-md-2 mil-text-center" key={num}>
              <div className="mil-brand">
                <img
                  src={`/img/brands/${num}.svg`}
                  alt={`brand ${num}`}
                  className="mil-up"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .mil-brand img {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mil-brand img:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Brands;
