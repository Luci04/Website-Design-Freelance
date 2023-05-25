import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="paddings footer">
        <div className="footer__1">
          <a href="">
            <img
              width={200}
              src="./sunportinc_p5.png"
              alt="ig"
              className="footer__img"
            />
          </a>
          <div>
            <div>
              <a href="#" className="footer-link">
                avinashukla@gmail.com
              </a>
            </div>
            <div>
              <a href="mailto:careers.us@levadata.com" className="footer-link">
                avinashukla@gmail.com
              </a>
            </div>
            <div>
              <a
                href="mailto:careers.india@levadata.com"
                className="footer-link"
              >
                avinashukla@gmail.com
              </a>
            </div>

            <div className="footer__socialbar">
              <a
                href="https://www.linkedin.com/company/levadata-inc/"
                className="link-social w-inline-block"
              >
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/63f8fa8305db102b12d032ed/63ff7b94f078b02c5aff5343_Icon_Linkedin.svg"
                  alt=""
                  className="icon-social"
                />
              </a>
              <a
                href="https://twitter.com/LevaData"
                className="link-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/63f8fa8305db102b12d032ed/63ff7b99ad8c08316dd787cb_Icon_Twitter.svg"
                  alt=""
                  className="icon-social"
                />
              </a>
              <a
                href="https://www.instagram.com/levadata/"
                className="link-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/63f8fa8305db102b12d032ed/63ff7b8fcbc9056d7f05010d_Icon_Instagram.svg"
                  alt=""
                  className="icon-social"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCpgZsAh39C_pJ5ammU5klOQ"
                className="link-social w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/63f8fa8305db102b12d032ed/63ff7b993491378d1ca78489_Icon_YouTube.svg"
                  alt=""
                  className="icon-social"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__2">
          <div className="footer__links">
            <a href="/platform" className="footer-link list">
              Services
            </a>
            <a href="/about" className="footer-link list">
              About Us
            </a>
            <a href="/careers" className="footer-link list">
              Careers
            </a>
            <a href="#" className="footer-link list hide-this">
              Newsroom
            </a>
            <a
              href="https://cognitive.levadata.net/levadata/#/login"
              className="footer-link list"
            >
              Login
            </a>
          </div>
          <div className="footer__links">
            <a href="#" className="footer-link list hide-this">
              Thought Leadership
            </a>
            <a href="/knowledge-center" className="footer-link list">
              Knowledge Center
            </a>
            <a href="/request-a-demo" className="footer-link list">
              Request a Demo
            </a>
            <a href="/free-part-insights" className="footer-link list">
              Get Free Part Insights
            </a>
            <a href="/contact" className="footer-link list">
              Contact Us
            </a>
            <a href="/privacy-policy" className="footer-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
