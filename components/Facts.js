import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDollarSign, FaThumbsUp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Facts = () => {
  useEffect(() => {
    gsap.fromTo(
      ".mil-fact-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".mil-facts",
          start: "top 80%",
        },
      }
    );
  }, []);

  const facts = [
    {
      value: 83,
      description: "Average Monthly Savings",
      icon: <FaDollarSign size={50} className="mil-icon" />,
    },
    {
      value: 100,
      description: "Of Users Recommend Process Payments Now",
      icon: <FaThumbsUp size={50} className="mil-icon" />,
    },
  ];

  return (
    <div className="mil-facts mil-p-160-80">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {facts.map((fact, index) => (
            <div
              key={index}
              className={`col-xl-6 mil-fact-item ${
                index === 1
                  ? "mil-sm-text-center mil-mb-80"
                  : "mil-sm-text-center mil-mb-30"
              } mil-up`}
            >
              <div className="mil-icon-box">{fact.icon}</div>
              <p className="h1 mil-display mil-mb-15">
                <span
                  className="mil-accent mil-counter"
                  data-number={fact.value}
                >
                  {fact.value}
                </span>
                <span className="mil-accent">%</span>
              </p>
              <h5 className="mil-light">{fact.description}</h5>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .mil-fact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .mil-icon-box {
          margin-bottom: 20px;
        }
        .mil-icon {
          color: #223dff;
        }
      `}</style>
    </div>
  );
};

export default Facts;
