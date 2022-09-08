import React, { useState } from "react";
import "./SingleProduct.scss";
import { Container, Divider, Grid } from "@mui/material";
import product from "../../assets/product-image.webp";
import StarIcon from "@mui/icons-material/Star";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ProductTaps from "./ProductTaps";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SubSlider from "../../components/SubSlider/SubSlider";
import MainCard from "../../components/MainCard/MainCard";
import ProductZoom from "./ProductZoom";

const SingleProduct = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="SingleProduct">
      <div style={{ backgroundColor: "#f5f5f5", height: "43vh" }}></div>
      <div className="main">
        <Container maxWidth="lg">
          <div className="breadcrumb"></div>
          <div className="product-details">
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  position: "relative",
                  zIndex: 1090,
                  display: { xs: "flex" },
                  justifyContent: { xs: "center" },
                }}
              >
                <div className="image-container">
                  <ProductZoom />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="details">
                  <h1 className="title">Sacrificial Chair Design</h1>
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
                  <div className="product-price">
                    <span className="price">$1,145.00</span>
                    <span className="discount">$1,145.00</span>
                  </div>
                  <div className="actions">
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

                    <div className="add-btn">
                      <AddIcon sx={{ fontSize: "22px" }} />
                      Add to Cart
                    </div>
                    <div className="buy-btn">Buy it now</div>
                  </div>
                  <Divider />
                  <div className="content">
                    <div className="item">
                      <p>
                        <span className="label">Availability :</span>
                        In Stock
                      </p>
                    </div>
                    <div className="item">
                      <p>
                        <span className="label">Vendor :</span>
                        velatheme
                      </p>
                    </div>
                    <div className="item">
                      <p>
                        <span className="label">SKU :</span>
                        N/A
                      </p>
                    </div>
                    <div className="item">
                      <p>
                        <span className="label">Collections :</span>
                        Best Sellter, Decor Art, Furniture, Home page,
                        Illumination, Kitchen Things
                      </p>
                    </div>
                  </div>
                  <Divider />
                  <div className="share">
                    <div className="icon-title">SHARE:</div>
                    <div className="share-icon">
                      <FacebookIcon />
                    </div>
                    <div className="share-icon">
                      <TwitterIcon />
                    </div>
                    <div className="share-icon">
                      <PinterestIcon />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div className="sub">
        <ProductTaps />
      </div>
      <Container maxWidth="lg">
        <div className="other-products">
          <SectionHeader title="Maybe You Like" />
          <div className="slider">
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
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
