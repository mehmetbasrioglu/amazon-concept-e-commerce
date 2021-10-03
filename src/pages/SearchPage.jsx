import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

import data from "../json/data.json";
import ImageSlider from "../layouts/ImageSlider";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage({ setBasketItems }) {
  let query = useQuery();

  const dto = data.Products.filter((_) => {
    if (query.get("name")) {
      return _.ProductName.toLowerCase().includes(
        query.get("name").toLowerCase()
      );
    } else if (query.get("category")) {
      return _.Category.CategoryName.toLowerCase().includes(
        query.get("category").toLowerCase()
      );
    } else {
      return _;
    }
  });

  const onSepeteEkleHandler = async (data) => {
    // console.log(data);
    const oldData = localStorage.getItem("sepetim");
    if (oldData) {
      localStorage.setItem(
        "sepetim",
        JSON.stringify([...JSON.parse(oldData), data])
      );
      setBasketItems(JSON.parse(localStorage.getItem("sepetim")));
    } else {
      localStorage.setItem("sepetim", JSON.stringify([data]));
      setBasketItems(JSON.parse(localStorage.getItem("sepetim")));
    }
  };

  return (
    <div>
      <div
        style={{
          boxShadow: "0 4px 5px -2px  rgba(0,0,0,0.75)",
          padding: "10px",
        }}
      >
        {query.get("name") && (
          <div>
            {dto.length} sonuç bulundu. Aranan ürün:{" "}
            <span style={{ color: "#c45500", fontWeight: "bold" }}>
              {query.get("name") != "" ? query.get("name") : "Tümü"}
            </span>
          </div>
        )}
        {query.get("category") && (
          <div>
            {dto.length} sonuç bulundu. Aranan kategori:{" "}
            <span style={{ color: "#c45500", fontWeight: "bold" }}>
              {query.get("category") != "" ? query.get("category") : "Tümü"}
            </span>
          </div>
        )}
      </div>
      <div
        className="d-flex flex-wrap min-vh-100"
        style={{
          zIndex: 99,
          position: "relative",
          marginLeft: "11%",
          marginRight: "5%",
        }}
      >
        {dto.map((product, index) => {
          return (
            <div className="productlong" style={{ position: "relative" }}>
              <div className="d-flex flex-column" key={index}>
                <ImageSlider product={product} />
                <h3>{truncate(product.ProductName, 60)}</h3>
                <span>{product.UnitPrice} TL</span>
                <span style={{ fontWeight: "bold" }}>Tahmini Teslim</span>
                <span>
                  {new Date().getDate()}{" "}
                  {new Date().toLocaleString("default", { month: "long" })} -{" "}
                  {new Date().getDate() +
                    Math.floor(Math.random() * (8 - 5 + 1) + 3)}{" "}
                  {new Date().toLocaleString("default", { month: "long" })}{" "}
                </span>
              </div>
              <button
                style={{ marginTop: 20 }}
                onClick={(e) => {
                  onSepeteEkleHandler(product);
                  // alert("Ürün Başarılı Şekilde Eklendi :"+product.ProductName+" - "+product.UnitPrice)
                }}
                className="btn btn-primary"
              >
                Sepete Ekle
              </button>
            </div>
          );
        })}
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
export default SearchPage;
