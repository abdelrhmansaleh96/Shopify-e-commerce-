import React from "react";
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

const Sale = () => {
  return (
    <>
      <SectionHeader title={"Sale Off"} />
      <div className="Sale">
        <div className="items">
          <SubSlider slides={4}>
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
          </SubSlider>
        </div>
        <div className="logos">
          <SubSlider slides={4}>
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
