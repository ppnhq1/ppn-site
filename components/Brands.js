import React from "react";

const Brands = () => {
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
    </div>
  );
};

export default Brands;
