import React, { useState } from "react";
import { Container, Grid, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import { Alert, Snackbar } from "@mui/material";
import MainImage from "../../components/MainCard/MainImage";
import "./ListView.scss";
import { useMainContext } from "../../context/main_context";

const ListView = () => {
  const { addToCart, filteredProducts } = useMainContext();
  const [openAlert, setOpenAlert] = useState(false);
  const handleClose = () => {
    setOpenAlert(false);
  };
  return (
    <div className="ListView">
      <Container maxWidth="lg">
        {filteredProducts.map((item) => {
          return (
            <Grid container spacing={1} key={item.id}>
              <Grid item xs={12} sm={4} sx={{ marginBottom: "15px" }}>
                <div className="image-container">
                  {/* <img
                      src={item.image1}
                      alt={item.name}
                      className="product-image"
                    /> */}
                  <MainImage
                    image1={item.image1}
                    image2={item.image2}
                    id={item.id}
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <div className="header">{item.name}</div>
                <div className="reviews">
                  <div className="stars">
                    <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                    <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                    <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                    <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                    <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                  </div>
                  <Divider
                    orientation="vertical"
                    sx={{ marginRight: "4px" }}
                    flexItem
                  />

                  <div>5 reviews</div>
                </div>
                <p className="desc">
                  Sapien luctus id justo suscipit nonummy eget hymenaeos
                  phasellus felis enim, dolor tortor cras nonummy sit amet nam
                  wisi suspendisse mattis mi vel leo.
                </p>
                <div className="money">
                  <div className="price">${item.price}</div>
                  <div className="discount">{item.discount}</div>
                </div>
                <div
                  className="action"
                  onClick={() => {
                    addToCart(item.id, 1, item);
                    setOpenAlert(true);
                  }}
                >
                  <AddIcon />
                  Add To Cart
                  <Snackbar
                    open={openAlert}
                    autoHideDuration={3000}
                    onClose={handleClose}
                  >
                    <Alert>item has been added to the cart</Alert>
                  </Snackbar>
                </div>
              </Grid>

              <Divider
                sx={{
                  width: "85%",
                  marginLeft: "10px",
                  marginBottom: "15px",
                }}
              />
            </Grid>
          );
        })}
      </Container>
    </div>
  );
};

export default ListView;
