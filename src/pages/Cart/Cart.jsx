import React, { useState } from "react";
import "./Cart.scss";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import { Button, Container, Grid, TextareaAutosize } from "@mui/material";
import { Paper } from "@mui/material";
import img1 from "../../assets/card1/1.webp";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const [counter, setCounter] = useState(1);
  const [open, setOpen] = useState(false);
  return (
    <div className="Cart">
      <MainBreadcrumb />
      <Container maxWidth="lg">
        <h1 className="title">Shopping Cart</h1>
        <Paper sx={{ backgroundColor: "#f7f7f7", marginBottom: "25px" }}>
          <Grid container spacing={2}>
            <Grid item sm={3}>
              <div className="header">IMAGE</div>
            </Grid>
            <Grid item sm={6}>
              <div className="header">PRODUCT</div>
            </Grid>
            <Grid item sm={3}>
              <div className="header">TOTAL</div>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={2}>
          <Grid item sm={3}>
            <div className="image-container">
              <img src={img1} alt="product" className="product-image" />
            </div>
          </Grid>
          <Grid item sm={6}>
            <div className="product-name">Wooden Chair</div>
            <p style={{ color: "#606060" }}>velatheme</p>
            <div className="price">$11.29</div>
            <div className="actions">
              {" "}
              <div className="counter">
                <div
                  className="icon-btn"
                  onClick={() => {
                    setCounter(counter - 1);
                  }}
                >
                  <RemoveIcon fontSize="inherit" />
                </div>
                <div className="amount">{counter}</div>
                <div
                  className="icon-btn"
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <AddIcon fontSize="inherit" />
                </div>
              </div>
              <div className="update">UPDATE CART</div>
              <div className="remove">REMOVE</div>
            </div>
          </Grid>
          <Grid item sm={3}>
            <div className="sub-total">$11.29</div>
          </Grid>
        </Grid>
        <Paper
          sx={{
            backgroundColor: "#f7f7f7",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Button
                startIcon={<CloseIcon />}
                variant="outlined"
                sx={{ width: "fit-content", margin: "15px 0" }}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                ADD ORDER NOTE
              </Button>
              {open && (
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={6}
                  style={{ width: 400 }}
                />
              )}
            </Grid>
            <Grid
              item
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div className="cart-total">
                <span className="total-title">Subtotal: </span>
                <span className="total-price">$11.29</span>
              </div>
              <p className="shipping">
                Shipping, taxes, and discounts will be calculated at checkout.
              </p>
              <div className="btns">
                <Button variant="outlined" sx={{ marginRight: "20px" }}>
                  UPDATE CART
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  CHECK OUT
                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Cart;
