import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

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
            <div className="mil-card mil-up mil-mb-30">
              {" "}
              {/* Added card wrapper */}
              <h2 className="mil-mb-30 mil-up">
                Payments For Your
                <br />
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    "Smoke Shop",
                    2000,
                    "Online Store",
                    2000,
                    "Collection Agency",
                    2000,
                    "Restaurants",
                    2000,
                    "Landscaping Firm",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ color: "#060a57" }}
                />
              </h2>
              <ul className="mil-list-2 mil-mb-30">
                {features.map((feature, index) => (
                  <li key={index}>
                    <div className="mil-up">
                      <h5 className="mil-mb-15">{feature.title}</h5>
                      <p className="mil-text-m mil-soft">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-4 mil-mb-80">
            <div className="mil-image-container mil-image-frame mil-image-frame-2 mil-visible-overflow">
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
