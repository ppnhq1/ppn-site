"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <Link href="/" className="mil-logo">
          <img
            src={dark ? "img/logo-light.png" : "img/logo.png"}
            alt="Process Payments Now"
            width={145}
            height={56}
          />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li className={`${currentPath == "/" ? "mil-active" : ""}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${activeMenuFuntion(["industries"])}`}>
              <Link href="industries">Industries</Link>
            </li>
            <li className={`${activeMenuFuntion(["payment-solutions"])}`}>
              <Link href="solutions">Solutions</Link>
            </li>
            <li className={`${activeMenuFuntion(["blog"])}`}>
              <Link href="blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="mil-menu-buttons">
          <Link href="register" className="mil-btn mil-clear">Log in</Link>
          <Link href="apply-now" className="mil-btn mil-sm">
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
