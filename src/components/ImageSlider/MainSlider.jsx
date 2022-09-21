import "./MainSlider.scss";
import React from "react";
import slide1 from "../../assets/imageSlider1/slide1.jpg";
import slide2 from "../../assets/imageSlider1/slide2.jpg";
import slide3 from "../../assets/imageSlider1/slide3.jpg";
import Slider from "react-slick";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import { motion } from "framer-motion/dist/framer-motion";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NavigateNextIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      <NavigateBeforeIcon />
    </div>
  );
}

const MainSlider = () => {
  const sliderItems = [
    {
      image: slide1,
      title: "Slide 1",
      header: "Handmade",
      sub: "Hand Carved Coffe",
      desc: " As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.",
    },
    {
      image: slide2,
      title: "Slide 2",
      header: "Think Different &",
      sub: "Do otherwise",
      desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
    },
    {
      image: slide3,
      title: "Slide 3",
      header: "High Beam",
      sub: "By Tom Chung",
      desc: "High Beam is an adjustable desk or shelf light that offers a wide variety of lighting possibilities.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="imageSlider">
      <Slider {...settings}>
        {sliderItems.map((item, index) => {
          return (
            <div key={item.title} className="imageContainer">
              <img
                style={{
                  minHeight: "632px",
                }}
                className="slideImage"
                src={item.image}
                alt={item.title}
              />

              <div
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="info"
              >
                <h2 className="header">{item.header}</h2>
                <h3 className="header">{item.sub}</h3>
                <div className="desc">{item.desc}</div>
                <div className="btn">DISCOVER NOW</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default MainSlider;

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class MainSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
