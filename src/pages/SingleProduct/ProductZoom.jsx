import React from "react";
import ReactImageZoom from "react-image-zoom";
import img1 from "../../assets/product-image.webp";

const ProductZoom = (props) => {
  const settings = {
    width: 400,
    zoomWidth: 250,
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
