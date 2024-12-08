import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypeAnimation } from "react-type-animation";

gsap.registerPlugin(ScrollTrigger);

const FeaturesRight = () => {
  const features = [
    {
      title: "In Person Payments",
      description:
        "Accept payments anywhere with ease. Process Payments Now offers quick setup, flexible payment options, and reliable technology to keep your in-person transactions running smoothly.",
    },
    {
      title: "Online Payments",
      description:
        "Power your online store with secure, seamless payment solutions. Process Payments Now integrates effortlessly with your e-commerce platform, offering customizable options for a flawless checkout experience.",
    },
    {
      title: "Cash Management",
      description:
        "Take control of your finances with Process Payments Now’s cash management tools. From simplifying receivables to optimizing cash flow, we help you stay financially agile and prepared.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".mil-feature-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".mil-features",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="mil-features mil-p-0-80">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-80">
            <div className="mil-card mil-up mil-mb-30">
              <TypeAnimation
                sequence={[
                  "Innovative Payment Solutions",
                  2000,
                  "Tailored for Your Business",
                  2000,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="mil-display mil-text-gradient-3"
              />
            </div>
            <ul className="mil-list-1">
              {features.map((feature, index) => (
                <li key={index} className="mil-feature-item">
                  <div className="mil-icon-box"></div>
                  <div>
                    <h5 className="mil-mb-15 mil-up">{feature.title}</h5>
                    <p className="mil-text-m mil-soft">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-5">
            <img
              src="img/featuresright/1.webp"
              alt="Features"
              className="mil-up"
              onError={(e) => {
                console.error("Image not found: img/home-1/features-right.png");
                e.target.src = "img/home-1/default.png"; // Fallback image
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mil-feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 30px;
        }
        .mil-icon-box {
          margin-right: 20px;
        }
        .mil-icon {
          width: 50px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default FeaturesRight;
