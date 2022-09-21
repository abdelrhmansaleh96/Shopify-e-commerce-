import React from "react";
import "./Home.scss";
import MainSlider from "../../components/ImageSlider/MainSlider";
import HomeImage from "../../components/HomeImage/HomeImage";
import Trending from "../../components/Trending/Trending";
import Banner from "../../components/Banner/Banner";
import Sale from "../../components/Sale/Sale";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
const Home = () => {
  return (
    <div className="Home">
      <MainSlider />
      <HomeImage />
      <Trending />
      <Banner />
      <Sale />
      <BlogPosts />
    </div>
  );
};

export default Home;
