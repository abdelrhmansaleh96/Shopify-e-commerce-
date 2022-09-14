import React, { useState, useEffect } from "react";
import "./Sale.scss";
import "../SectionHeader/SectionHeader.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import SubSlider from "../SubSlider/SubSlider";
import MainCard from "../MainCard/MainCard";
import logo1 from "../../assets/small-logos/logo_image1.webp";
import logo2 from "../../assets/small-logos/logo_image2.webp";
import logo3 from "../../assets/small-logos/logo_image3.webp";
import logo4 from "../../assets/small-logos/logo_image4.webp";
import logo5 from "../../assets/small-logos/logo_image5.webp";
import logo6 from "../../assets/small-logos/logo_image6.webp";
import products from "../../products";

const Sale = () => {
  const [slides, setSlides] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 999) {
        setSlides(3);
      }
      if (window.innerWidth < 570) {
        setSlides(2);
      }
    };
    handleResize();
    // window.addEventListener("resize", handleResize);
  });
  return (
    <>
      <div className="Sale">
        <SectionHeader title={"Sale Off"} />
        <div className="items">
          <SubSlider slides={slides}>
            {products.slice(0, 7).map((product, index) => {
              return (
                <MainCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                  image1={product.image1}
                  image2={product.image2}
                  id={product.id}
                />
              );
            })}
          </SubSlider>
        </div>
        <div className="logos">
          <SubSlider slides={slides}>
            <div>
              <img className="logo" src={logo1} alt="logo" />
            </div>
            <div>
              <img className="logo" src={logo2} alt="logo" />
            </div>
            <div>
              <img className="logo" src={logo3} alt="logo" />
            </div>
            <div>
              <img className="logo" src={logo4} alt="logo" />
            </div>
            <div>
              <img className="logo" src={logo5} alt="logo" />
            </div>
            <div>
              <img className="logo" src={logo6} alt="logo" />
            </div>
          </SubSlider>
        </div>
      </div>
    </>
  );
};

export default Sale;
