import React from "react";
import "./Trending.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import MainCard from "../MainCard/MainCard";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

const Trending = () => {
  return (
    <div className="Trending">
      <SectionHeader title={"Trending"} />
      <div className="grid">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      <div className="action">
        <OutlinedButton text={"LOAD MORE"} />
      </div>
    </div>
  );
};

export default Trending;
