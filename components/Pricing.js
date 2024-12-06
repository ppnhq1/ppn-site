"use client";
import Link from "next/link";
import { useState } from "react";

// Reusable PricingCard Component
const PricingCard = ({
  planName,
  description,
  features,
  yearlyPrice,
  monthlyPrice,
  isFeatured = false,
}) => {
  const [time, setTime] = useState("month");
  const price = time === "year" ? yearlyPrice : monthlyPrice;

  return (
    <div className={`col-md-4 col-sm-6`}>
      <div
        className={`mil-price-card mil-up mil-mb-30 ${
          isFeatured ? "mil-featured" : ""
        }`}
      >
        <h6 className={`mil-mb-15 ${isFeatured ? "mil-light" : ""}`}>
          {planName}
        </h6>
        <p className="mil-text-s mil-dark-soft mil-mb-30">{description}</p>
        <h4 className={`mil-mb-30 ${isFeatured ? "mil-light" : ""}`}>
          ${price}
          <span className="mil-sup-text mil-soft"> / month</span>
        </h4>
        <Link
          href="contact"
          className="mil-btn mil-m mil-fw mil-mb-30"
          aria-label={`Choose the ${planName} plan`}
        >
          Choose a plan
        </Link>
        <ul className="mil-text-list mil-check mil-type-2 mil-text-s mil-dark-soft mil-mb-60">
          {features.map((feature, index) => (
            <li key={index} className="mil-dark-soft">
              {feature}
            </li>
          ))}
        </ul>
        <a href="#." className="mil-link mil-accent">
          View all features
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [time, setTime] = useState("month");

  const plans = [
    {
      planName: "Plax Consumer",
      description: "Sending and receiving money in up to 5 countries",
      features: [
        "Unlimited transactions",
        "Basic Technical Support (Email)",
        "Instructional advisor",
      ],
      yearlyPrice: "0.00",
      monthlyPrice: "0.00",
    },
    {
      planName: "Plax Business",
      description: "Access to multi-currency accounts and local payments",
      features: [
        "Unlimited transactions",
        "Basic Technical Support (Email)",
        "Instructional advisor",
      ],
      yearlyPrice: "9.99",
      monthlyPrice: "14.99",
      isFeatured: true,
    },
    {
      planName: "Plax Enterprise",
      description: "Secure and reliable transactions at the enterprise level",
      features: [
        "Unlimited transactions",
        "Basic Technical Support (Email)",
        "Instructional advisor",
      ],
      yearlyPrice: "34.99",
      monthlyPrice: "49.00",
    },
  ];

  return (
    <div className="row justify-content-center">
      {/* Time Switcher */}
      <div className="mil-switcher mil-mb-60 mil-up">
        <span
          className={time === "month" ? "mil-active" : ""}
          onClick={() => setTime("month")}
          role="button"
          tabIndex={0}
        >
          Monthly
        </span>
        <span
          className={time === "year" ? "mil-active" : ""}
          onClick={() => setTime("year")}
          role="button"
          tabIndex={0}
        >
          Yearly
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="row">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            planName={plan.planName}
            description={plan.description}
            features={plan.features}
            yearlyPrice={plan.yearlyPrice}
            monthlyPrice={plan.monthlyPrice}
            isFeatured={plan.isFeatured}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
