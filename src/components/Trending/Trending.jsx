import React from "react";
import "./Trending.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import MainCard from "../MainCard/MainCard";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import products from "../../products";

const Trending = () => {
  return (
    <div className="Trending">
      <SectionHeader title={"Trending"} />
      <div className="grid">
        {products.slice(0, 8).map((product, index) => {
          return (
            <MainCard
              key={index}
              name={product.name}
              price={product.price}
              discount={product.discount}
              image1={product.image1}
              image2={product.image2}
              id={product.id}
            />
          );
        })}
      </div>
      <div className="action">
        <OutlinedButton text={"LOAD MORE"} />
      </div>
    </div>
  );
};

export default Trending;
