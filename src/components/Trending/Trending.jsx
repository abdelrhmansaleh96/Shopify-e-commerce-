import React from "react";
import "./Trending.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import MainCard from "../MainCard/MainCard";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import products from "../../products";
import { Container, Grid } from "@mui/material";

const Trending = () => {
  return (
    <div className="Trending">
      <Container maxWidth="lg">
        <SectionHeader title={"Trending"} />
        <Grid container spacing={2}>
          {products.slice(0, 8).map((product, index) => {
            return (
              <Grid item xs={6} sm={3} key={index}>
                <MainCard
                  key={index}
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
        </Grid>
      </Container>
      <div className="action">
        <OutlinedButton text={"LOAD MORE"} />
      </div>
    </div>
  );
};

export default Trending;
