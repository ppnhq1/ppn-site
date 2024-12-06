"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaCreditCard, FaCashRegister, FaTools } from "react-icons/fa"; // Using react-icons for icons

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFunction = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}>
      <div className="mil-mega-menu-container">
        <Link href="/" className="mil-logo">
          <img
            src={dark ? "img/logo.png" : "img/logo.png"}
            alt="Process Payments Now"
            width={145}
            height={56}
          />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li className={`${currentPath == "/" ? "mil-active" : ""}`}>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={`mil-mega-menu ${activeMenuFunction(["industries"])}`}
            >
              <Link href="/industries" className="nav-link">
                Industries
              </Link>
              <div className="mega-menu-content">
                <div className="mega-menu-column">
                  <h4>Retail</h4>
                  <Link href="/industries/retail" className="nav-link">
                    <div className="menu-icon-container">
                      <FaCashRegister className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link
                    href="/industries/retail-solutions"
                    className="nav-link"
                  >
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Solutions
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <h4>Hospitality</h4>
                  <Link href="/industries/hospitality" className="nav-link">
                    <div className="menu-icon-container">
                      <FaCreditCard className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link
                    href="/industries/hospitality-tools"
                    className="nav-link"
                  >
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Tools
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <h4>E-commerce</h4>
                  <Link href="/industries/ecommerce" className="nav-link">
                    <div className="menu-icon-container">
                      <FaCashRegister className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link
                    href="/industries/ecommerce-platforms"
                    className="nav-link"
                  >
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Platforms
                  </Link>
                </div>
              </div>
            </li>
            <li
              className={`mil-mega-menu ${activeMenuFunction([
                "payment-solutions",
              ])}`}
            >
              <Link href="/solutions" className="nav-link">
                Solutions
              </Link>
              <div className="mega-menu-content">
                <div className="mega-menu-column">
                  <h4>Credit Card Processing</h4>
                  <Link
                    href="/solutions/credit-card-processing"
                    className="nav-link"
                  >
                    <div className="menu-icon-container">
                      <FaCreditCard className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link href="/solutions/credit-card-fees" className="nav-link">
                    <div className="menu-icon-container">
                      <FaCashRegister className="menu-icon" />
                    </div>
                    Fees
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <h4>ACH Payments</h4>
                  <Link href="/solutions/ach-payments" className="nav-link">
                    <div className="menu-icon-container">
                      <FaCreditCard className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link href="/solutions/ach-tools" className="nav-link">
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Tools
                  </Link>
                </div>
                <div className="mega-menu-column">
                  <h4>POS Systems</h4>
                  <Link href="/solutions/pos-systems" className="nav-link">
                    <div className="menu-icon-container">
                      <FaCashRegister className="menu-icon" />
                    </div>
                    Overview
                  </Link>
                  <Link href="/solutions/pos-hardware" className="nav-link">
                    <div className="menu-icon-container">
                      <FaTools className="menu-icon" />
                    </div>
                    Hardware
                  </Link>
                </div>
              </div>
            </li>
            <li className={`${activeMenuFunction(["blog"])}`}>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mil-menu-buttons">
          <Link href="/register" className="nav-link mil-btn mil-clear">
            Log in
          </Link>
          <Link href="/apply-now" className="nav-link mil-btn mil-sm">
            Apply Now
          </Link>
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

