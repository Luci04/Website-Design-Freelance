import React from "react";
import "./Highlights.css";

const Highlights = () => {
  return (
    <div className="bg">
      <div className="mid paddings">
        <div className="head">
          <h3 className="text-center">
            Uncover<span className="highlight"> Immediate Cost Savings</span>
            <br />
            with Contextualixed Insights
          </h3>
        </div>
        <p className="p__center">
          <strong>Immediately turn insights into action </strong>
          with smart collaboration features including built-in supplier
          negotiation playbooks
        </p>
        <div className="items">
          <div className="item text-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/63b73b714814130cd0439649/371bd684-c597-43d8-807c-511224fb9a40/FBR_Unit+F06.jpg?format=750w"
              alt="img"
              className="icon"
            />
            <div className="item__head">Dramatically Reduce Costs</div>
            <div className="item__content">
              by quickly identifying the best price for components, parts, and
              raw materials.
            </div>
          </div>
          <div className="item text-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/63b73b714814130cd0439649/925aaadc-89c8-48ea-9404-aafebfbfee7c/FBR_Unit+F26.jpg?format=750w"
              alt="img"
              className="icon"
            />
            <div className="item__head">
              Increase your Spend Under Management
            </div>
            <div className="item__content">
              without adding workload or resources to your team.
            </div>
          </div>
          <div className="item text-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/63b73b714814130cd0439649/371bd684-c597-43d8-807c-511224fb9a40/FBR_Unit+F06.jpg?format=750w"
              alt="img"
              className="icon"
            />
            <div className="item__head">Deliver Bottom-Line Results</div>
            <div className="item__content">
              for your company and your customers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
