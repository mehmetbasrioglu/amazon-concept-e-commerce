import React from "react";
import { FaCheck } from "react-icons/fa";
import Lottie from "react-lottie";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

import data from "../json/data.json";
import ImageSlider from "../layouts/ImageSlider";

import hata from "../json/empty.json";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BasketDetailPage({ setBasketItems }) {
  let query = useQuery();

  const calculateTotalPrice = JSON.parse(localStorage.getItem("sepetim"))
    .map((item) => item.UnitPrice)
    .reduce((a, b) => a + b, 0);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div
        className="d-flex  min-vh-100"
        style={{
          zIndex: 99,
          position: "relative",
          marginLeft: "5%",
          marginRight: "5%",
          padding: 10,
        }}
      >
        <div
          className={`${
            JSON.parse(localStorage.getItem("sepetim")).length > 0
              ? "col-8"
              : "col"
          }`}
        >
          {JSON.parse(localStorage.getItem("sepetim")).length > 0 && (
            <div>
              <span style={{ fontSize: 30 }}>Alışveriş Sepeti</span>
            </div>
          )}
          {JSON.parse(localStorage.getItem("sepetim")).length > 0 ? (
            JSON.parse(localStorage.getItem("sepetim")).map(
              (product, index) => {
                return (
                  <div
                    className="d-flex justify-content-between"
                    style={{
                      height: 150,
                      margin: 10,
                      width: "100%",
                      borderTop: "1px solid #ccc",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px",
                        width: 200,
                      }}
                    >
                      <img
                        src={product.image[0].imageUrl}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          marginLeft: 10,
                          marginRight: 10,
                        }}
                      />
                    </div>
                    <div
                      className="d-flex flex-column  justify-content-start"
                      style={{ width: 800 }}
                    >
                      <h5 style={{ margin: 10 }}>
                        {truncate(product.ProductName, 60)}
                      </h5>
                      <span style={{ margin: 10 }}>
                        Gönderen ve Satan:<strong>Amazon</strong>
                      </span>
                    </div>
                    <div className="d-flex " style={{ margin: 10, width: 150 }}>
                      <h3 style={{ fontWeight: "bold" }}>
                        {product.UnitPrice} TL
                      </h3>
                    </div>
                  </div>
                );
              }
            )
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
        {JSON.parse(localStorage.getItem("sepetim")).length > 0 && (
          <div className="col-5" style={{ margin: 10 }}>
            <div className="d-flex flex-column align-items-center justify-content-end">
              <span style={{ fontSize: 20 }}>
                Ara Toplam (
                {JSON.parse(localStorage.getItem("sepetim")).length &&
                  JSON.parse(localStorage.getItem("sepetim")).length}{" "}
                Ürün):{calculateTotalPrice} TL
              </span>
              <button
                onClick={(e) => {
                  document.body.scrollTop = 0; // For Safari
                  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                  localStorage.setItem("sepetim", JSON.stringify([]));
                  setBasketItems(JSON.parse(localStorage.getItem("sepetim")));
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
        )}
      </div>
    </div>
  );
}

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}
export default BasketDetailPage;
