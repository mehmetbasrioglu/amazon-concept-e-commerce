import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function HomeCarousel({ data }) {
  const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <img style={{ width: "100%" }} src={data.sliders[currentImage].image} />
        {currentImage > 0 && (
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "0%",
              transform: "translate(0%,-50%)",
              zIndex: 1,
              height: "200px",
              marginRight: 20,
              fontSize: 60,
            }}
            onClick={() => {
              setCurrentImage(currentImage - 1);
            }}
            className="btn"
          >
            <FaChevronLeft />
          </button>
        )}
        {currentImage < data.sliders.length - 1 && (
          <button
            style={{
              position: "absolute",
              top: "50%",
              right: "0%",
              transform: "translate(0%,-50%)",
              zIndex: 1,
              height: "200px",
              marginRight: 20,
              fontSize: 60,
            }}
            onClick={() => {
              setCurrentImage(currentImage + 1);
            }}
            className="btn "
          >
            <FaChevronRight />
          </button>
        )}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            height: "100%",

            width: "100%",
            background:
              "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
          }}
        ></div>
      </div>
    </div>
  );
}

export default HomeCarousel;
