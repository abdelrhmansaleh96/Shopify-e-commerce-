import React from "react";
import MainCard from "../../components/MainCard/MainCard";
import products from "../../products";
import { Grid } from "@mui/material";

const GridView = () => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <Grid item xs={6} sm={4} lg={3} key={product.id}>
            <MainCard
              name={product.name}
              price={product.price}
              discount={product.discount}
              image1={product.image1}
              image2={product.image2}
              id={product.id}
            />
          </Grid>
        );
      })}
    </>
  );
};

export default GridView;
