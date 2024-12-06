import { motion } from "framer-motion";
import React from "react";

const FeaturesLeft = () => {
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

  return (
    <div className="mil-features mil-p-0-80">
      <div className="container">
        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <motion.div
            className="col-xl-6 mil-mb-80"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h5 className="mil-mb-15 mil-up">{feature.title}</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    {feature.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="col-xl-5 mil-mb-80"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mil-image-frame mil-visible-overflow">
              <div className="mil-circle-background mil-up"></div>
              <img
                src="img/featuresleft/1.webp"
                alt="image"
                className="mil-up"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesLeft;

