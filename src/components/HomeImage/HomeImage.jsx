import React from "react";
import "./HomeImage.scss";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

const HomeImage = () => {
  return (
    <div className="banner-container" style={{}}>
      <Container>
        <Grid
          style={{
            padding: 52,
            backgroundColor: "#fff",
          }}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={4}>
            <img
              src="https://cdn.shopify.com/s/files/1/1573/5553/files/banner1_540x.jpg?v=1522250209"
              alt="banner1"
              className="banner"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://cdn.shopify.com/s/files/1/1573/5553/files/banner2_540x.jpg?v=1509775455"
              alt="banner2"
              className="banner"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://cdn.shopify.com/s/files/1/1573/5553/files/banner3_540x.jpg?v=1522250245"
              alt="banner3"
              className="banner"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeImage;
