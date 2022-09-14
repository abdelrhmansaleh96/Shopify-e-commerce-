import React, { useState } from "react";
import "./Cart.scss";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  TextareaAutosize,
  Alert,
  Snackbar,
  Paper,
} from "@mui/material";

import shopping from "../../assets/back-shopping.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useMainContext } from "../../context/main_context";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const { total_amount, cart, removeFromCart, toggleAmount, clearCart } =
    useMainContext();
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => {
    setOpenAlert(false);
  };
  const handleLoading = () => {
    setIsLoading(true);
    setOpenAlert(true);
    setTimeout(() => {
      setIsLoading(false);
      clearCart();
      navigate("/checkout");
      console.log("cart", cart);
    }, 3000);
  };
  const location = useLocation();

  return (
    <div className="Cart">
      <MainBreadcrumb location={location} />
      {cart.length >= 1 ? (
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

          {cart.map((cartItem, index) => {
            return (
              <Grid container spacing={2} key={cartItem.id}>
                <Grid item sm={3}>
                  <div className="image-container">
                    <img
                      src={cartItem.image}
                      alt="product"
                      className="product-image"
                    />
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="product-name">{cartItem.name}</div>
                  <p style={{ color: "#606060" }}>velatheme</p>
                  <div className="price">${cartItem.price}</div>
                  <div className="actions">
                    {" "}
                    <div className="counter">
                      <div
                        className="icon-btn"
                        onClick={() => {
                          toggleAmount(cartItem.id, "dec");
                        }}
                      >
                        <RemoveIcon fontSize="inherit" />
                      </div>
                      <div className="amount">{cartItem.amount}</div>
                      <div
                        className="icon-btn"
                        onClick={() => {
                          toggleAmount(cartItem.id, "add");
                        }}
                      >
                        <AddIcon fontSize="inherit" />
                      </div>
                    </div>
                    <div className="update">UPDATE CART</div>
                    <div
                      className="remove"
                      onClick={() => {
                        removeFromCart(cartItem.id);
                      }}
                    >
                      REMOVE
                    </div>
                  </div>
                </Grid>
                <Grid item sm={3}>
                  <div className="sub-total">
                    ${cartItem.amount * cartItem.price}
                  </div>
                </Grid>
                <Divider
                  sx={{
                    width: "100%",
                    margin: "20px",
                  }}
                />
              </Grid>
            );
          })}

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
                  <span className="total-price">${total_amount}</span>
                </div>
                <p className="shipping">
                  Shipping, taxes, and discounts will be calculated at checkout.
                </p>
                <div className="btns">
                  <Button variant="outlined" sx={{ marginRight: "20px" }}>
                    UPDATE CART
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "black" }}
                    startIcon={
                      isLoading ? <CircularProgress size="1rem" /> : null
                    }
                    onClick={() => {
                      handleLoading();
                    }}
                  >
                    CHECK OUT
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Snackbar
            open={openAlert}
            autoHideDuration={5000}
            onClose={handleClose}
          >
            <Alert severity="success">
              Cart has been Submitted Successfully
            </Alert>
          </Snackbar>
        </Container>
      ) : (
        <div className="back-shopping">
          <div className="header">Your Cart Is Empty!</div>
          <div className="back">
            <img src={shopping} alt="shopping" />
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/products");
              }}
            >
              Go Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
