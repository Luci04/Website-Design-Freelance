import React from "react";
import "./What-we-offer.css";

const Whatweoffer = () => {
  return (
    <div className="mid paddings what-we-offer-wrapper innerWidth">
      <div className="what-we-offer-container">
        <div className="img-container"></div>
        <div className="text-container">
          <h3 className="head">
            What We <span className="highlight"> Offering </span>
            To Solve Your Problem
          </h3>
          <div>
            <li>Experienced, knowledgeable, honest ready to help you,</li>
            <li>Advanced & Proprpetary technoloyes.</li>
            <li>
              Driven, relentless. unwavering JN of soluttons for the problems
              you are facing
            </li>
            <li>Experienced, knowledgeable, honest ready to help you,</li>
            <li>Our ioyaity and our commitment to your success.</li>
          </div>

          <button type="button" className="btn btn-primary btn-outline">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whatweoffer;
