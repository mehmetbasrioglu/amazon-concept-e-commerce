import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useHistory } from "react-router";

function GamingStoreCarousel({ data }) {
  const [hovering, setHovering] = React.useState(false);

  const innerSlider = React.useRef(null);
  const Slider = React.useRef(null);

  const handleMouseOver = React.useCallback(() => {
    setHovering(true);
  }, []);
  const handleMouseOut = React.useCallback(() => {
    setHovering(false);
  }, []);

  const history = useHistory();

  return (
    <div className="d-flex" style={{ position: "relative" }}>
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "-2%",
          transform: "translate(0%,-50%)",
          zIndex: 1,
          height: "120px",
          marginRight: 20,
          fontSize: 30,
          background: "white",
          boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
        }}
        onClick={() => {
          Slider.current.scrollBy({ left: -150, top: 0, behavior: "smooth" });
        }}
        className="btn"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => {
          Slider.current.scrollBy({ left: 150, top: 0, behavior: "smooth" });
        }}
        style={{
          position: "absolute",
          top: "50%",
          right: "2%",
          transform: "translate(0%,-50%)",
          zIndex: 1,
          height: "120px",
          marginRight: 20,
          fontSize: 30,
          background: "white",
          boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
        }}
        className="btn"
      >
        <FaChevronRight />
      </button>
      <div
        ref={Slider}
        className={`customscroll ${hovering && "customscrollShow"}`}
        style={{ overflowX: "scroll", width: "93%" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="d-flex w-100" ref={innerSlider}>
          {data.map((item, index) => {
            return (
              <img
                onClick={() => {
                  document.body.scrollTop = 0; // For Safari
                  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                  history.push(
                    "/search?category=" + item.Category.CategoryName
                  );
                }}
                draggable="false"
                style={{ margin: 10, userSelect: "none" }}
                src={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GamingStoreCarousel;
