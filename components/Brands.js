import React from "react";
import { motion } from "framer-motion";

const Brands = () => {

  return (
    <div
      className="mil-brands mil-p-160-80 overflow-hidden"
      style={{
        marginTop: "20px",
        marginBottom: "48px",
      }}
    >
      <div className="container">
        <h5 className="mil-text-center mil-soft mil-mb-50 mil-up">
          Powered by industry-leading partners and technology!
        </h5>
        <div
          style={{
            display: "flex",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              display: "flex",
              gap: "160px",
              paddingRight: "160px",
            }}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {["1", "2", "3", "4", "5", "6"].map((num) => (
                  <div
                    className="col-4 col-md-2 mil-text-center"
                    key={num}
                    style={{}}
                  >
                    <img
                      src={`/img/brands/${num}.svg`}
                      alt={`brand ${num}`}
                      className="mil-up"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
