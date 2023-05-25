import React from "react";
import "./ServicesGrid.css";
import { Link } from "react-router-dom";
import { BsFilePerson, BsArrowRightShort } from "react-icons/bs";

const ServicesGrid = () => {
  return (
    <div className="servicegrid-wrapper">
      <div className="Services-Grid-Wrapper">
        <div className="paddings">
          <div className="head text-center">
            <h3>
              Explore
              <span className="highlight"> Integration</span>
              Types
            </h3>
          </div>
          <p className="p__center">
            <strong>Immediately turn insights into action </strong>
            with smart collaboration features including built-in supplier
            negotiation playbooks
          </p>
          <div className="items">
            <div className="item">
              <BsFilePerson color="var(--primary)" size={40} />
              <div className="item__head">Dramatically Reduce Costs</div>
              <div className="item__content">
                by quickly identifying the best price for components, parts, and
                raw materials.
              </div>

              {/* <Link className="item-btn" to="">
                Schedule a Consultation
                <BsArrowRightShort
                  className="arrow-move"
                  color="var(--primary)"
                  size={25}
                />
              </Link> */}
              <button type="button" className="btn btn-primary btn-outline">
                Schedule a Consultation
              </button>
            </div>
            <div className="item">
              <BsFilePerson color="var(--primary)" size={40} fontWeight={400} />
              <div className="item__head">Dramatically Reduce Costs</div>
              <div className="item__content">
                by quickly identifying the best price for components, parts, and
                raw materials.
              </div>

              {/* <Link className="item-btn" to="">
                Schedule a Consultation
                <BsArrowRightShort
                  className="arrow-move"
                  color="var(--primary)"
                  size={25}
                />
              </Link> */}
              <button type="button" className="btn btn-primary btn-outline">
                Schedule a Consultation
              </button>
            </div>
            <div className="item">
              <BsFilePerson color="var(--primary)" size={40} />
              <div className="item__head">Dramatically Reduce Costs</div>
              <div className="item__content">
                by quickly identifying the best price for components, parts, and
                raw materials.
              </div>

              {/* <Link className="item-btn" to="">
                Schedule a Consultation
                <BsArrowRightShort
                  className="arrow-move"
                  color="var(--primary)"
                  size={25}
                />
              </Link> */}
              <button type="button" className="btn btn-primary btn-outline">
                Schedule a Consultation
              </button>
            </div>
            <div className="item">
              <BsFilePerson color="var(--primary)" size={40} />
              <div className="item__head">Dramatically Reduce Costs</div>
              <div className="item__content">
                by quickly identifying the best price for components, parts, and
                raw materials.
              </div>

              {/* <Link className="item-btn" to="">
                Schedule a Consultation
                <BsArrowRightShort
                  className="arrow-move"
                  color="var(--primary)"
                  size={25}
                />
              </Link> */}
              <button type="button" className="btn btn-primary btn-outline">
                Schedule a Consultation
              </button>
            </div>
            <div className="item">
              <BsFilePerson color="var(--primary)" size={40} />
              <div className="item__head">Dramatically Reduce Costs</div>
              <div className="item__content">
                by quickly identifying the best price for components, parts, and
                raw materials.
              </div>

              {/* <Link className="item-btn" to="">
                Schedule a Consultation
                <BsArrowRightShort
                  className="arrow-move"
                  color="var(--primary)"
                  size={25}
                />
              </Link> */}
              <button type="button" className="btn btn-primary btn-outline">
                Schedule a Consultation
              </button>
            </div>
            <div className="item">
              <BsFilePerson color="var(--primary)" size={40} />
              <div className="item__head">Dramatically Reduce Costs</div>
              <div className="item__content">
                by quickly identifying the best price for components, parts, and
                raw materials.
              </div>

              {/* <Link className="item-btn" to="">
                Schedule a Consultation
                <BsArrowRightShort
                  className="arrow-move"
                  color="var(--primary)"
                  size={25}
                />
              </Link> */}
              <button type="button" className="btn btn-primary btn-outline">
                Schedule a Consultation
              </button>
            </div>
          </div>
          {/* <div className="items"></div> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
