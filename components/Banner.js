"use client";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";

const Banner = ({
  title = "Process Payments Now",
  subTitle = "Trusted by Small Businesses Nationwide",
  img = "img/home-2/1.png",
  style = { maxWidth: "135%", transform: "translateX(5%)" },
  dark = false,
}) => {
  useEffect(() => {
    gsap.fromTo(
      ".mil-banner-text h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".mil-banner-text h6",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      ".mil-buttons-frame",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className={`mil-banner mil-dissolve ${dark ? "mil-dark-2" : ""}`}>
      <div className="mil-banner-bg"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="mil-banner-text">
              <h6 className="mil-text-gradient-2 mil-mb-20">{subTitle}</h6>
              <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                {title}
              </h1>
              <div className="mil-buttons-frame">
                <Link
                  href="register"
                  className="mil-btn btn-shadow mil-md mil-add-arrow"
                >
                  Start An Application
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=gRhoYxy9Oss"
                  className="mil-btn mil-md mil-light mil-add-play has-popup-video"
                >
                  Schedule A Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src={img}
              alt="Banner Image"
              style={style}
              className="mil-banner-img"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mil-banner {
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }
        .mil-banner-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          animation: gradientAnimation 15s ease infinite;
          z-index: -1;
        }
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .mil-banner-text h1,
        .mil-banner-text h6 {
          font-family: "Poppins", sans-serif;
        }
        .mil-buttons-frame .mil-btn {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mil-buttons-frame .mil-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Banner;
