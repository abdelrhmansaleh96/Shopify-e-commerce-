import { FlashlightOffOutlined } from "@mui/icons-material";
import React from "react";
import Slider from "react-slick";
import MainCard from "../MainCard/MainCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ArrowForwardIosIcon
        sx={{
          color: "white",
          width: "fit-content",
          height: "fit-content",
          padding: "8px",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ArrowBackIosNewIcon
        sx={{
          color: "white",
          width: "fit-content",
          height: "fit-content",
          padding: "8px",
        }}
      />
    </div>
  );
}

const SaleSlider = () => {
  const settings = {
    dots: FlashlightOffOutlined,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="SaleSlider">
      <Slider {...settings}>
        <div className="item">
          <MainCard />
        </div>
        <div className="item">
          <MainCard />
        </div>
        <div className="item">
          <MainCard />
        </div>
        <div className="item">
          <MainCard />
        </div>
        <div className="item">
          <MainCard />
        </div>
        <div className="item">
          <MainCard />
        </div>
      </Slider>
    </div>
  );
};

export default SaleSlider;
