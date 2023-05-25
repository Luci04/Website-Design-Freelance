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
          <img
            className="insta-post-image"
            src="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
          />
          <img
            className="insta-post-image"
            src="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
          />
          <img
            className="insta-post-image"
            src="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
          />
          <img
            className="insta-post-image"
            src="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default InstagramPost;
