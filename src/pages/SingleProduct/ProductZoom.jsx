import React from "react";
import ReactImageZoom from "react-image-zoom";

const ProductZoom = (props) => {
  const settings = {
    width: 400,
    zoomWidth: 100,

    img: props.image,
    offset: {
      vertical: 0,
      horizontal: 50,
    },
  };
  return (
    <div className="ProductZoom">
      <ReactImageZoom {...settings} />
    </div>
  );
};

export default ProductZoom;
