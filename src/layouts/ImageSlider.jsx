import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageSlider({ product }) {
  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={product.image[currentImage].imageUrl}
        alt={product.ProductName}
        style={{ height: 200, objectFit: "contain", userSelect: "none" }}
      />

      {currentImage > 0 && (
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(0%,-50%)",
          }}
          onClick={() => {
            setCurrentImage(currentImage - 1);
          }}
          className="btn btn-primary"
        >
          <FaChevronLeft />
        </button>
      )}
      {currentImage < product.image.length - 1 && (
        <button
          style={{
            position: "absolute",
            top: "50%",
            right: "0%",
            transform: "translate(0%,-50%)",
          }}
          onClick={() => {
            setCurrentImage(currentImage + 1);
          }}
          className="btn btn-primary"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}

export default ImageSlider;
