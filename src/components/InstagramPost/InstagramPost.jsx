import React from "react";
import Carousel from "react-multi-carousel";
import WithStyles from "./WithStyles";
import "react-multi-carousel/lib/styles.css";
import "./InstagramPost.css";

function InstagramPost() {
  return (
    <div style={{ backgroundColor: "#f2eae7" }}>
      <div className="mid paddings innerWidth">
        <div className="head text-center">
          <h3 style={{ marginBottom: "50px", fontWeight: 400 }}>
            Follow along as we create homes people <i>love.</i>
            {/* <span className="highlight"> Immediate Cost Savings</span> */}
            {/* <br />
          with Contextualixed Insights */}
          </h3>
        </div>
        <Carousel
          arrows
          autoPlaySpeed={3000}
          containerClass="container-with-dots"
          infinite
          partialVisible={false}
          // keyBoardControl
          pauseOnHover
          draggable={false}
          renderButtonGroupOutside={true}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
            },
            mobile: {
              breakpoint: {
                max: 768,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 768,
              },
              items: 2,
            },
          }}
          itemClass="insta-post-image"
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <iframe className="insta-post-image" src="https://www.instagram.com/p/CsWLWFCJQH5/embed/?cr=1&v=13&wp=540&rd=https%3A%2F%2Fwww.example.com&rp=%2F" height="550" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          <iframe className="insta-post-image" src="https://www.instagram.com/p/CqcosJaLTnE/embed/?cr=1&v=13&wp=540&rd=https%3A%2F%2Fwww.example.com&rp=%2F" height="550" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          <iframe className="insta-post-image" src="https://www.instagram.com/p/Cr5i7bMOhF6/embed/?cr=1&v=13&wp=540&rd=https%3A%2F%2Fwww.example.com&rp=%2F" height="550" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          <iframe className="insta-post-image" src="https://www.instagram.com/p/CjNLfRnLgzo/embed/?cr=1&v=13&wp=540&rd=https%3A%2F%2Fwww.example.com&rp=%2F" height="550" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

        </Carousel>
      </div>
    </div>
  );
}

export default InstagramPost;
