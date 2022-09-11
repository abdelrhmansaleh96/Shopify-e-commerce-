import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./MainCard.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function MainCard({
  name,
  price,
  discount,
  image1,
  image2,
  id,
}) {
  return (
    <div className="container" key={id}>
      <div className="MainCard">
        <div className="media-container">
          <div className="label">
            <span>Sale</span>
          </div>

          <img src={image1} alt="green iguana" className="card-image first" />
          <img src={image2} alt="green iguana" className="card-image second" />
          <div className="icon">
            <Link to={`/products/${id}`}>
              <SearchIcon />
            </Link>
          </div>
        </div>
        <div className="card-content">
          <h5 className="header">{name}</h5>
          <div className="action-container">
            <div className="price">
              <span className="money">{price}</span>
              <span className="discount">{discount}</span>
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
