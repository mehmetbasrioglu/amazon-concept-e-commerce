import React from "react";

import data from "../json/data.json";
import basket from "../json/basket.json";
import Lottie from "react-lottie";
import ImageSlider from "../layouts/ImageSlider";
import HomeCarousel from "../layouts/HomeCarousel";
import GamingStoreCarousel from "../layouts/GamingStoreCarousel";

function Home({ setBasketItems, setLikedItems, likedItems }) {
  const [animCount, setAnimCount] = React.useState(0);

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
    <div className="min-vh-100">
      <HomeCarousel data={data} />
      <div
        className="d-flex flex-column justify-content-center"
        style={{
          marginTop: -150,
          zIndex: 99,
          position: "relative",
          marginLeft: "11%",
          marginRight: "5%",
        }}
      >
        <h4>Çok Satan 3 Ürün</h4>
        <div className="d-flex flex-wrap">
          {data.Products.slice(0, 3).map((product, index) => {
            return (
              <div className="product" style={{ position: "relative" }}>
                <div className="d-flex flex-column" key={index}>
                  <ImageSlider product={product} />
                  <h3>{truncate(product.ProductName, 60)}</h3>
                  <span>{product.UnitPrice} TL</span>
                  <span>Tahmini Teslim</span>
                  <span>
                    {new Date().getDate()}({tahmini(new Date().getDate())}) -{" "}
                    {new Date().getDate() + 5}{" "}
                    {new Date().toLocaleString("default", { month: "long" })}(
                    {tahmini(new Date().getDate() + 5)})
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
      <div
        style={{
          zIndex: 99,
          position: "relative",
          marginLeft: "11%",
          marginRight: "5%",
        }}
      >
        <h4 style={{ marginTop: 20 }}>Amazon Prime Gaming</h4>
        <GamingStoreCarousel data={data.gamingSliders} />
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
export default Home;
