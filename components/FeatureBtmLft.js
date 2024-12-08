import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMoneyBillWave, FaUniversity, FaShieldAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const FeatureBtmLft = () => {
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

  const features = [
    {
      title: "Lending and Working Capital",
      description:
        "We don’t just process payments—we help your business grow. With flexible lending options and working capital solutions, we provide the funds you need to seize opportunities and keep things moving forward.",
      icon: <FaMoneyBillWave size={50} className="mil-icon" />,
    },
    {
      title: "Banking Services",
      description:
        "We make banking easy with same-day deposits for eligible merchants who use our payment processing. Get fast access to your funds and streamline your operations—all with one simple solution.",
      icon: <FaUniversity size={50} className="mil-icon" />,
    },
    {
      title: "Business Insurance",
      description:
        "We’ve got you covered with business and personal insurance through our trusted partner, Harborstone Independent Insurance. Get peace of mind knowing your business and personal assets are protected.",
      icon: <FaShieldAlt size={50} className="mil-icon" />,
    },
  ];

  return (
    <div className="mil-features mil-p-160-80">
      <div className="container">
        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-80">
            <h2 className="mil-mb-30 mil-up">More Than Merchant Services</h2>
            <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              We’re not your average merchant services provider. Along with
              smooth payment processing, we’ve got your back with lending,
              banking, and insurance services to help your business thrive.
            </p>
            <ul className="mil-list-1">
              {features.map((feature, index) => (
                <li key={index} className="mil-feature-item">
                  <div className="mil-icon-box">{feature.icon}</div>
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
              src="img/featuresleft/1.webp"
              alt="Features"
              className="mil-up"
              onError={(e) => {
                console.error("Image not found: img/featuresleft/1.webp");
                e.target.src = "img/featuresleft/default.png"; // Fallback image
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
          color: #223dff;
        }
      `}</style>
    </div>
  );
};

export default FeatureBtmLft;
