import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./MainCard.scss";
import { useMainContext } from "../../context/main_context";
import { Alert, Snackbar } from "@mui/material";
import MainImage from "./MainImage";
import { useNavigate } from "react-router-dom";

const MainCard = ({ name, price, discount, image1, image2, id }) => {
  const { addToCart } = useMainContext();
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpenAlert(false);
  };
  const product = {
    id: id,
    name: name,
    price: price,
    image1: image1,
    image2: image2,
    discount: discount,
  };
  return (
    <div className="container" key={id}>
      <div className="MainCard">
        <MainImage
          image1={product.image1}
          image2={product.image2}
          id={product.id}
        />
        <div className="card-content">
          <h5
            className="header"
            onClick={() => {
              navigate(`/products/${id}`);
            }}
          >
            {name}
          </h5>
          <div className="action-container">
            <div className="price">
              <span className="money">{price}</span>
              <span className="discount">{discount}</span>
            </div>
            <div
              className="action"
              onClick={() => {
                addToCart(id, 1, product);
                setOpenAlert(true);
              }}
            >
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
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
        <Alert>item has been added to the cart</Alert>
      </Snackbar>
    </div>
  );
};

export default MainCard;
