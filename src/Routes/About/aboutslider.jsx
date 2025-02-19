import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import "./About.css";


function MultipleItems() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="about-slider">
      <Slider {...settings} className="about-wrapper">
        <div className="review-slider" style={{width:'300px'}}>
          <p>
            I’m visiting from Seattle. Barry & Jill took me to Rare for
            Valentine’s Day. We had such a wonderful experience. The food was
            outstanding. The atmosphere was intimate and lively at the same
            time. Lisa the bartender kept us entertained as she delivered top
            notch service. I would recommend Rare and thanks for the great
            memories!!!
          </p>
          <span>★ ★ ★ ★ ★</span>
          <h4>Mike N.</h4>
        </div>
        <div className="review-slider">
          <p>
            " Best food best service best atmosphere! The waiter James was
            arguably the most attentive and personable waiter I’ve ever had I
            literally watched him feed a customers baby a bottle lol , love this
            place and will def be coming back !!
          </p>
          <span>★ ★ ★ ★ ★</span>
          <h4>Rixx N.</h4>
        </div>
        <div className="review-slider">
          <p >
            We had a wonderful night out here! Excellent food and drinks . It’s
            hard to find a nicely made cocktail and lisa was on point! We then
            sat in the dining room where we were greeted promptly. We order the
            porterhouse for two, asparagus and mashed and they were out of this
            world. Also thanks for Greg for your awesome photo skills, we will
            be back!
          </p>
          <span>★ ★ ★ ★ ★</span>
          <h4>Misha B</h4>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
