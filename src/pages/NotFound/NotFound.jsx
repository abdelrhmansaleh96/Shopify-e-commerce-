import React from "react";
import "./NotFound.scss";
import bg from "../../assets/404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
      <div className="image-container">
        <img src={bg} alt="bg" className="image" />
        <h1
          className="btn"
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
