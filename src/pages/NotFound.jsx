import React from "react";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import hata from "../json/404.json";

function NotFound() {
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Lottie options={defaultOptions} height={500} width={500} />
      <h3>Oops! Veri Bulunamadı</h3>
      <button
        className="btn "
        style={{ background: "#ed3a27", color: "white" }}
        onClick={() => {
          history.push("/");
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }}
      >
        {" "}
        Amazon'a git
      </button>
    </div>
  );
}

export default NotFound;
