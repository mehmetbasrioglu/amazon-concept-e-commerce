import React from "react";
import { FaCheck } from "react-icons/fa";
import Lottie from "react-lottie";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";

import hata from "../json/empty.json";
import data from "../json/data.json";
import ImageSlider from "../layouts/ImageSlider";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BasketPage() {
  let query = useQuery();

  let history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const calculateTotalPrice = JSON.parse(localStorage.getItem("sepetim"))
    .map((item) => item.UnitPrice)
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <div
        className="d-flex flex-column min-vh-100"
        style={{
          zIndex: 99,
          position: "relative",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        {JSON.parse(localStorage.getItem("sepetim")).length > 0 ? (
          JSON.parse(localStorage.getItem("sepetim"))
            .slice(
              JSON.parse(localStorage.getItem("sepetim")).length - 1,
              JSON.parse(localStorage.getItem("sepetim")).length
            )
            .map((product, index) => {
              return (
                <div
                  className="d-flex justify-content-between"
                  style={{
                    background: "#f3f3f3",
                    border: "1px solid gray",
                    height: 70,
                    margin: 10,
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      background: "#fafafa",
                      padding: "10px",
                      borderRight: "1px solid gray",
                      width: 380,
                    }}
                  >
                    <FaCheck style={{ color: "green", fontSize: 25 }} />
                    <img
                      src={product.image[0].imageUrl}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: "contain",
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    />
                    <span
                      style={{
                        color: "green",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      Sepete Eklendi
                    </span>
                  </div>
                  <div
                    className="d-flex align-items-center justify-content-start"
                    style={{ width: 800 }}
                  >
                    <h5 style={{ margin: 10 }}>
                      <span style={{ fontWeight: "bold" }}>Ara Toplam</span> (
                      {JSON.parse(localStorage.getItem("sepetim")).length > 0 &&
                        JSON.parse(localStorage.getItem("sepetim")).length}{" "}
                      Ürün) :{" "}
                      <span style={{ color: "#b12704", fontWeight: "bold" }}>
                        {("0000" + calculateTotalPrice).slice(4)} TL
                      </span>
                    </h5>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ margin: 10 }}
                  >
                    <button
                      onClick={(e) => {
                        document.body.scrollTop = 0; // For Safari
                        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                        history.push("/basket/detail");
                      }}
                      className="btn btn-amazon2"
                    >
                      Sepete Git
                    </button>
                    <button
                      onClick={(e) => {
                        // alert("Ürün Başarılı Şekilde Eklendi :"+product.ProductName+" - "+product.UnitPrice)
                      }}
                      className="btn btn-amazon"
                    >
                      Alışverişi Tamamla (
                      {JSON.parse(localStorage.getItem("sepetim")).length &&
                        JSON.parse(localStorage.getItem("sepetim")).length}
                      )
                    </button>
                  </div>
                </div>
              );
            })
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Lottie
              options={defaultOptions}
              height={500}
              width={500}
              isClickToPauseDisabled={true}
            />
            <h3>Oops! Alışveriş Sepeti Boş</h3>
          </div>
        )}
      </div>
    </div>
  );
}

function tahmini(date) {
  switch (date) {
    case 7:
      return "Pazar";
      break;
    case 1:
      return "Pazartesi";
      break;
    case 2:
      return "Salı";
      break;
    case 3:
      return "Çarşamba";
      break;
    case 4:
      return "Perşembe";
      break;
    case 5:
      return "Cuma";
      break;
    case 6:
      return "Cumartesi";
      break;
  }
}

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}
export default BasketPage;
