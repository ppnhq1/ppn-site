import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CallToAction1 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".mil-cta .mil-up",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".mil-cta",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0">
          <div className="row align-items-end">
            <div className="col-12 mil-text-center">
              <h2 className="mil-mb-30 mil-light mil-up">
                Discover the Difference When You Switch <br />
                To Process Payments Now
              </h2>
              <p className="mil-text-m mil-light mil-mb-60 mil-up">
                At Process Payments Now, we empower our clients with better
                payment solutions. <br />
                Learn more about the power of Process Payments Now today!
              </p>
              <div className="mil-up mil-mb-60">
                <Link
                  href="/register"
                  className="mil-btn mil-button-transform mil-md mil-add-arrow"
                >
                  Schedule A Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="mil-illustration-absolute mil-type-2 mil-up">
            <img src="/img/cta/1.webp" alt="illustration" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mil-cta {
          position: relative;
          padding: 100px 0;
          background-color: #f6f8ff;
          overflow: hidden;
        }
        .mil-btn {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mil-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .mil-illustration-absolute {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 50%;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
};
