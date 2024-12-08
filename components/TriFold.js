"use client";
import Link from "next/link";
import { FaPiggyBank, FaHandshake, FaRocketchat } from "react-icons/fa";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TriFold = () => {
  useEffect(() => {
    gsap.fromTo(
      ".mil-trifold-item",
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

  const items = [
    {
      href: "/about",
      icon: <FaPiggyBank size={68} className="mil-icon" />,
      title: "Powering Local Business Growth",
      description:
        "Our solutions are designed to help local businesses thrive by providing the tools they need to manage payments efficiently.",
    },
    {
      href: "/partners",
      icon: <FaHandshake size={68} className="mil-icon" />,
      title: "Building Strong Partnerships",
      description:
        "We believe in the power of partnerships. Our collaborative approach ensures mutual growth and success.",
    },
    {
      href: "/contact",
      icon: <FaRocketchat size={68} className="mil-icon" />,
      title: "Exceptional Customer Support",
      description:
        "Our dedicated support team is here to assist you with any questions or issues, ensuring a smooth experience.",
    },
  ];

  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-p-160-130">
          <div className="row align-items-end">
            <div className="col-xl-8 mil-mb-80-adaptive-30">
              <h2 className="mil-up mil-light">
                We empower businesses with payment technology
              </h2>
            </div>
            <div className="col-xl-4 mil-mb-80 mil-up">
              <Link
                href="/services"
                className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-md-4 mil-trifold-item">
                <Link href={item.href} className="mil-trifold-link">
                  <div className="mil-icon-box mil-center mil-hover">
                    {item.icon}
                    <h5 className="mil-mb-15 mil-up">{item.title}</h5>
                    <p className="mil-text-m mil-soft">{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .mil-trifold-item {
          margin-bottom: 30px;
        }
        .mil-trifold-link {
          text-decoration: none;
          color: inherit;
        }
        .mil-icon-box {
          padding: 40px 20px;
          background-color: #f6f8ff;
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mil-icon-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .mil-icon {
          margin-bottom: 20px;
          color: #223dff;
        }
      `}</style>
    </div>
  );
};

export default TriFold;
