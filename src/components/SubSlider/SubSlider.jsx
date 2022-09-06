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
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="SaleSlider">
      <Slider {...settings} slidesToShow={props.slides}>
        {props.children}
      </Slider>
    </div>
  );
};

export default SubSlider;
