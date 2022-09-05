import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./MainCard.scss";
import card1 from "../../assets/card1/1.webp";
import card2 from "../../assets/card1/3.webp";
import SearchIcon from "@mui/icons-material/Search";

export default function MainCard() {
  return (
    <div className="container">
      <div className="MainCard">
        <div className="media-container">
          <div className="label">
            <span>Sale</span>
          </div>

          <img src={card1} alt="green iguana" className="card-image first" />
          <img src={card2} alt="green iguana" className="card-image second" />
          <div className="icon">
            <SearchIcon />
          </div>
        </div>
        <div className="card-content">
          <h5 className="header">Sacrificial Chair Design</h5>
          <div className="action-container">
            <div className="price">
              <span className="money">$132</span>
              <span className="discount">$148</span>
            </div>
            <div className="action">
              <AddIcon
                sx={{
                  fontSize: "15px",
                }}
              />
              <span>Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
