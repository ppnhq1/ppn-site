import React from "react";
import Link from "next/link";

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

  return (
    <div className="mil-features mil-p-0-80">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-80">
            <h2 className="mil-mb-30 mil-up">
              Take Full Control of Your Payments
            </h2>
            <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              Gain complete control over your payment processes with solutions
              designed to streamline transactions, improve cash flow, and
              enhance customer satisfaction. With Process Payments Now, you
              manage your payments your way—efficiently and effortlessly.
            </p>
            <ul className="mil-list-2 mil-mb-60">
              {features.map((feature, index) => (
                <li key={index}>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{feature.title}</h5>
                    <p className="mil-text-m mil-soft">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mil-up mil-mb-60">
              <Link
                href="/about"
                className="mil-btn mil-button-transform mil-m mil-add-arrow"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-xl-4 mil-mb-80">
            <div className="mil-image-frame mil-image-frame-2 mil-visible-overflow">
              <img
                src="img/featuresright/1.webp"
                alt="image"
                className="mil-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesRight;
