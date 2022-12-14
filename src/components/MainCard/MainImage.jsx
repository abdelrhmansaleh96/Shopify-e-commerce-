import React from "react";
import "./MainImage.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const MainImage = (props) => {
  return (
    <div className="media-container">
      <div className="label">
        <span>Sale</span>
      </div>

      <img src={props.image1} alt="green iguana" className="card-image " />
      <img
        src={props.image2}
        alt="green iguana"
        className="card-image second"
      />
      <Link to={`/products/${props.id}`}>
        <div className="icon">
          <SearchIcon />
        </div>
      </Link>
    </div>
  );
};

export default MainImage;
