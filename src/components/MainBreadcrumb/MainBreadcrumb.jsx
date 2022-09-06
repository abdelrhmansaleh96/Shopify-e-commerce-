import React from "react";
import "./MainBreadcrumb.scss";
import bg from "../../assets/main.webp";

const MainBreadcrumb = () => {
  return (
    <div className="MainBreadcrumb">
      <div className="image-container">
        <img className="image" src={bg} alt="bg" />
      </div>
    </div>
  );
};

export default MainBreadcrumb;
