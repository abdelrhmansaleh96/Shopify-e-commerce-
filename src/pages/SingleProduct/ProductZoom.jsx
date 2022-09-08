import React from "react";
import ReactImageZoom from "react-image-zoom";
import img1 from "../../assets/product-image.webp";

const ProductZoom = () => {
  const props = {
    width: 400,
    zoomWidth: 250,
    img: img1,
    offset: {
      vertical: 0,
      horizontal: 50,
    },
  };
  return (
    <div className="ProductZoom">
      <ReactImageZoom {...props} />
    </div>
  );
};

export default ProductZoom;
