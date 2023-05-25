import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to={"/"}>
          <img src="./sunportinc_p5.png" alt="logo" width={100} />
        </Link>

        <div className="flexCenter h-menu">
          <Link to={"/services"}>Services</Link>
          <button className="button">
            <Link to={"/contact"}>Contact</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
