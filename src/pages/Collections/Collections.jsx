import { Container, Grid } from "@mui/material";
import React from "react";
import "./Collections.scss";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import { useLocation, useNavigate } from "react-router-dom";

const Collections = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="Collections">
      <MainBreadcrumb location={location} />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="container">
              <div className="main-container">
                <img
                  className="main"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/collections/h5727c01661f83_540x.jpg?v=1511443926"
                  alt="collection1"
                />
              </div>
              <div className="header">ILLUMINATION</div>
              <div className="details">4 products</div>
              <div
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                SHOP THE COLLECTION
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="container">
              <div className="main-container">
                <img
                  className="main"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/collections/18_540x.jpg?v=1511442950"
                  alt="collection1"
                />
              </div>
              <div className="header">ILLUMINATION</div>
              <div className="details">4 products</div>
              <div
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                SHOP THE COLLECTION
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="container">
              <div className="main-container">
                <img
                  className="main"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/collections/7_540x.jpg?v=1511442889"
                  alt="collection1"
                />
              </div>
              <div className="header">ILLUMINATION</div>
              <div className="details">4 products</div>
              <div
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                SHOP THE COLLECTION
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="container">
              <div className="main-container">
                <img
                  className="main"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/collections/2_540x.jpg?v=1511444047"
                  alt="collection1"
                />
              </div>
              <div className="header">ILLUMINATION</div>
              <div className="details">4 products</div>
              <div
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                SHOP THE COLLECTION
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="container">
              <div className="main-container">
                <img
                  className="main"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/collections/12_540x.jpg?v=1511442995"
                  alt="collection1"
                />
              </div>
              <div className="header">ILLUMINATION</div>
              <div className="details">4 products</div>
              <div
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                SHOP THE COLLECTION
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="container">
              <div className="main-container">
                <img
                  className="main"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/collections/16_540x.jpg?v=1511444013"
                  alt="collection1"
                />
              </div>
              <div className="header">ILLUMINATION</div>
              <div className="details">4 products</div>
              <div
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                SHOP THE COLLECTION
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="container">
              <div className="main-container">
                <img
                  className="main"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/collections/Arc-Large-Cup_540x.jpg?v=1511443696"
                  alt="collection1"
                />
              </div>
              <div className="header">ILLUMINATION</div>
              <div className="details">4 products</div>
              <div
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                SHOP THE COLLECTION
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="container">
              <div className="main-container">
                <img
                  className="main"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/collections/21_540x.jpg?v=1511442906"
                  alt="collection1"
                />
              </div>
              <div className="header">ILLUMINATION</div>
              <div className="details">4 products</div>
              <div
                className="btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                SHOP THE COLLECTION
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Collections;
