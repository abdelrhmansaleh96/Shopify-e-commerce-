import { FlashlightOffOutlined } from "@mui/icons-material";
import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./Subslider.scss";

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

const SubSlider = (props) => {
  const settings = {
    dots: FlashlightOffOutlined,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: props.slidesToShow,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="SaleSlider">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};

export default SubSlider;
