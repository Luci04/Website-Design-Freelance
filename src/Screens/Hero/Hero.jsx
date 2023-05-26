import React from "react";
import "./Hero.css";
import Compaies from "../../components/Companies/Compaies";
import Highlights from "../../components/Highlights/Highlights";
import ServicesGrid from "../../components/ServicesGrid/ServicesGrid";
import Whatweoffer from "../../components/What-we-offer/What-we-offer";
import InstagramPost from "../../components/InstagramPost/InstagramPost";
import Whatweoffer2 from "../../components/What-we-offer 2/What-we-offer2";


const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* Left-Side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"></div>
              <h1>
                Discover <br /> Most Suitable
                <br /> Property
              </h1>
            </div>

            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Find a variety of properties that suit you vert easily.
              </span>
              <span className="secondaryText">
                Forget all difficulties in finding a residence for you
              </span>
            </div>
          </div>

          {/* Right-Side */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/625d802e8acf449b7b041341/Semiconductor-and-circuit-board/960x0.jpg?format=jpg&width=960"
                alt="Side Image"
              />
            </div>
          </div>
        </div>
      </section>
      <Compaies />
      <Whatweoffer />
      <Highlights />
      <Whatweoffer2 />
      <ServicesGrid />
      <InstagramPost />
    </>
  );
};

export default Hero;
