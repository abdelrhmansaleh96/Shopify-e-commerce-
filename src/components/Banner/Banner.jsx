import React from "react";
import "./Banner.scss";
import banner1 from "../../assets/home-images/banner1.webp";
import banner2 from "../../assets/home-images/banner2.webp";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="item">
        <img className="image" src={banner1} alt="banner1" />
      </div>
      <div className="item">
        <img className="image" src={banner2} alt="banner2" />
      </div>
    </div>
  );
};

export default Banner;
