import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Industry-Specific Payment Solutions",
    description:
      "From collection agencies to smoke shops, we deliver tailored payment solutions designed to fit your unique business model and streamline your transactions.",
  },
  {
    title: "Comprehensive Customer Support",
    description:
      "We offer round-the-clock US-based support for merchants and sales partners, understanding that your business operates 24/7 and requires reliable assistance every second of the day.",
  },
  {
    title: "Scalable Payment Gateways and Point of Sales",
    description:
      "We offer flexible systems that grow alongside your business. Our solutions can be tailor fit for any industry. From payment gateways to complete point of sale solutions, we got you covered.",
  },
];

const FeatureLeft = () => {
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
        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-80">
            <h2 className="mil-mb-30 mil-up">
              Your Partner For Credit Card and ACH Processing
            </h2>
            <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              The Process Payments Now ecosystem of payment solutions is
              designed to empower your business by streamlining transactions and
              enhancing cash flow. From flexible pricing and ACH origination to
              innovative recurring billing solutions, we provide tools that
              simplify payment management and improve customer satisfaction.
              With our comprehensive support and scalable options, your business
              will have the resources it needs to grow efficiently and thrive in
              a competitive market.
            </p>
            <ul className="mil-list-1">
              {features.map((feature, index) => (
                <li key={index} className="mil-feature-item">
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
      `}</style>
    </div>
  );
};

export default FeatureLeft;
