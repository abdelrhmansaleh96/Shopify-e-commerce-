import React from "react";
import "./SectionHeader.scss";

const SectionHeader = ({ title, desc }) => {
  return (
    <div className="SectionHeader">
      <h3 className="title">{title}</h3>
      <span className="sub-title">
        Mirum est notare quam littera gothica quam nunc putamus parum claram!
      </span>
    </div>
  );
};

export default SectionHeader;
