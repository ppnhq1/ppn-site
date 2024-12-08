import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ bg = true, margin = 160, footer }) => {
  useEffect(() => {
    gsap.fromTo(
      ".mil-footer-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".mil-footer",
          start: "top 80%",
        },
      }
    );
  }, []);

  switch (footer) {
    case 1:
      return <Footer1 bg={bg} margin={margin} />;
    case 2:
      return <Footer2 bg={bg} margin={margin} />;
    case 3:
      return <Footer3 bg={bg} margin={margin} />;
    default:
      return <Footer1 bg={bg} margin={margin} />;
  }
};

export default Footer;

const Footer1 = ({ bg = true, margin = 160 }) => {
  return (
    <footer
      className={`${
        bg ? "mil-footer-with-bg" : ""
      } mil-p-${margin}-0 mil-footer`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-3 mil-footer-item">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img
                src="img/logo.png"
                alt="Process Payments Now"
                width={174}
                height={68}
              />
            </a>
          </div>
          <div className="col-xl-3 mil-footer-item">
            <h5 className="mil-mb-30">Quick Links</h5>
            <ul className="mil-footer-list">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-footer-item">
            <h5 className="mil-mb-30">Resources</h5>
            <ul className="mil-footer-list">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-footer-item">
            <h5 className="mil-mb-30">Contact Us</h5>
            <p className="mil-text-m mil-soft">
              1234 Street Name, City, State, 12345
            </p>
            <p className="mil-text-m mil-soft">
              Email: info@processpaymentsnow.com
            </p>
            <p className="mil-text-m mil-soft">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .mil-footer {
          background-color: #f6f8ff;
          padding: 60px 0;
        }
        .mil-footer-logo img {
          transition: transform 0.3s ease;
        }
        .mil-footer-logo img:hover {
          transform: scale(1.1);
        }
        .mil-footer-list li {
          list-style: none;
          margin-bottom: 10px;
        }
        .mil-footer-list li a {
          color: #223dff;
          transition: color 0.3s ease;
        }
        .mil-footer-list li a:hover {
          color: #1a2eb8;
        }
      `}</style>
    </footer>
  );
};
