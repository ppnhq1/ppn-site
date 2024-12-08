"use client";
import EmbedPopup from "@/components/EmbedPopup";
import { plaxUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollProgress from "./ScrollProgress";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PlaxLayout = ({ children, bg, margin, noFooter, dark, footer }) => {
  useEffect(() => {
    plaxUtility.scrollAnimations();
    plaxUtility.smoothScroll();
    plaxUtility.counters();
    plaxUtility.stickMenu();
    plaxUtility.backToTop();

    gsap.fromTo(
      ".mil-wrapper",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mil-wrapper",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Fragment>
      <EmbedPopup />
      <div id="smooth-wrapper" className="mil-wrapper">
        {/* scroll progress */}
        <ScrollProgress />
        {/* scroll progress end */}
        {/* back to top */}
        <a href="#" className="progress-wrap active-progress">
          <span className="progress-icon">↑</span>
        </a>
        {/* top panel end */}
        <Header dark={dark} />
        {/* top panel end */}
        {/* content */}
        <div
          id="smooth-content"
          className={`mil-content ${bg ? "mil-bg" : ""} ${
            margin ? "mil-margin" : ""
          }`}
        >
          {children}
        </div>
        {/* content end */}
        {/* footer */}
        {!noFooter && <Footer footer={footer} />}
        {/* footer end */}
      </div>
      <style jsx>{`
        .mil-wrapper {
          opacity: 0;
        }
        .progress-wrap {
          position: fixed;
          right: 30px;
          bottom: 30px;
          height: 72px;
          width: 72px;
          background-color: #223dff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
        }
        .progress-wrap.active-progress {
          opacity: 1;
          visibility: visible;
        }
        .progress-wrap:hover {
          filter: brightness(110%);
        }
        .progress-icon {
          font-size: 24px;
          color: #f6f8ff;
        }
      `}</style>
    </Fragment>
  );
};

export default PlaxLayout;
