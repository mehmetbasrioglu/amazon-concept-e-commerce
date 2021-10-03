import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import data from "./json/data.json";

import {
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";

import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
import BasketPage from "./pages/BasketPage";
import BasketDetailPage from "./pages/BasketDetailPage";

function App() {
  const history = useHistory();

  const [basket, setBasketItems] = React.useState([]);

  const [likedItems, setLikedItems] = React.useState([]);

  const [search, setSearch] = React.useState("");

  return (
    <div className="container App">
      <nav class="navbar navbar-expand-md navbar-dark bg-black">
        <div class="container-fluid">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav me-auto d-flex align-items-center">
              <li
                class="nav-item active amazonlogo d-flex"
                onClick={() => history.push("/test")}
              >
                <img src={"assets/amazonlogo.png"} />
                <span className="text-white">.com.tr</span>
              </li>
              <li class="nav-item active" style={{ margin: 10, width: 200 }}>
                <div
                  className="d-flex text-white align-items-center"
                  style={{ fontSize: 12 }}
                >
                  <FaMapMarkerAlt size={30} />
                  <div
                    className="d-flex flex-column text-white"
                    style={{ fontSize: 12 }}
                  >
                    <span>Merhaba</span>
                    <span style={{ fontWeight: "bold" }}>
                      Teslimat Adresi Seçin
                    </span>
                  </div>
                </div>
              </li>
              <li class="nav-item active ">
                <div
                  className="bg-white d-flex align-items-center justify-content-between"
                  style={{ width: 500, height: 40, borderRadius: 10 }}
                >
                  <div
                    className="bg-grey d-flex align-items-center"
                    style={{
                      width: 200,
                      height: "100%",
                      padding: 10,
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    Tüm Kategoriler
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    style={{ border: "none", outline: 0, width: "100%" }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div
                    onClick={() => {
                      history.push("/search?name=" + search);
                      document.body.scrollTop = 0; // For Safari
                      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    }}
                    className=" d-flex align-items-center"
                    style={{
                      background: "#febd69",
                      height: "100%",
                      padding: 10,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  >
                    <FaSearch />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item" style={{ margin: 10 }}>
                <div
                  className="d-flex flex-column text-white"
                  style={{ fontSize: 12 }}
                >
                  <span>İadeler</span>
                  <span style={{ fontWeight: "bold" }}>Ve Siparişler</span>
                </div>
              </li>
              <li class="nav-item" style={{ margin: 10 }}>
                <div
                  className="d-flex flex-column text-white"
                  style={{ fontSize: 12 }}
                >
                  <span>Merhaba</span>
                  <span style={{ fontWeight: "bold" }}>Mehmet Basrioğlu</span>
                </div>
              </li>
              <li
                class="nav-item d-flex justify-content-center align-items-center"
                onClick={() => {
                  history.push("/basket");
                  document.body.scrollTop = 0; // For Safari
                  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                }}
              >
                <div style={{ position: "relative" }}>
                  <FaShoppingCart color="white" size={30} />
                  {JSON.parse(localStorage.getItem("sepetim")) &&
                    JSON.parse(localStorage.getItem("sepetim")).length > 0 && (
                      <span
                        style={{
                          position: "absolute",
                          top: "0%",
                          left: "40%",
                          width: 20,
                          height: 20,
                          background: "#f08804",
                          zIndex: 2,
                          borderRadius: 180,
                          fontSize: 10,
                          fontWeight: "bold",
                          color: "white",
                          textAlign: "center",
                          border: "2px solid white",
                        }}
                      >
                        {JSON.parse(localStorage.getItem("sepetim")).length > 9
                          ? "9+"
                          : JSON.parse(localStorage.getItem("sepetim")).length}
                      </span>
                    )}
                </div>
                <div
                  className="d-flex flex-column text-white"
                  style={{ fontSize: 12 }}
                >
                  <span>Alışveriş</span>
                  <span style={{ fontWeight: "bold" }}>Sepeti</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav
        class="navbar navbar-expand-md navbar-dark"
        style={{ background: "#232f3e" }}
      >
        <div class="container-fluid d-flex justify-content-between">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav me-auto d-flex align-items-center">
              <li class="nav-item active d-flex" style={{ margin: 10 }}>
                <span className="text-white">Satış Yap</span>
              </li>
              <li class="nav-item active d-flex" style={{ margin: 10 }}>
                <span className="text-white">Çok Satanlar</span>
              </li>
              <li class="nav-item active d-flex" style={{ margin: 10 }}>
                <span className="text-white">Hoşunuza Gidebilir</span>
              </li>
            </ul>
          </div>
          <div class="navbar-collapse collapse order-1 order-md-0 dual-collapse2">
            <img src="assets/superfirsat.jpg" />
          </div>
        </div>
      </nav>
      <div className="d-flex flex-column">
        <Switch>
          <Route path="/" exact>
            <Home
              setBasketItems={setBasketItems}
              setLikedItems={setLikedItems}
              likedItems={likedItems}
            />
          </Route>
          <Route path={`/search`} exact>
            <SearchPage data={data} setBasketItems={setBasketItems} />
          </Route>
          <Route path={`/basket`} exact>
            <BasketPage data={data} />
          </Route>
          <Route path={`/basket/detail`} exact>
            <BasketDetailPage setBasketItems={setBasketItems} />
          </Route>
          <Route exact>
            <NotFound />
          </Route>
        </Switch>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ background: "#37475a", padding: 10, color: "white" }}
        >
          Başa dön
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            background: "#232f3e",
            padding: 40,
            color: "white",
            height: 300,
          }}
        >
          <div className="d-flex align-items-center justify-content-between w-75">
            <div className="d-flex flex-column">
              <span style={{ fontWeight: "bold" }}>Hakkımızda</span>
              <span>Kariyer</span>
              <span>İletişim</span>
              <span>Bilgi Toplumu Hizmetleri</span>
            </div>
            <div className="d-flex flex-column">
              <span style={{ fontWeight: "bold" }}>Bizimle Para Kazanın</span>
              <span>Amazon'da Satış Yapın</span>
              <span>İletişim</span>
              <span>Bilgi Toplumu Hizmetleri</span>
            </div>
            <div className="d-flex flex-column">
              <span style={{ fontWeight: "bold" }}>Amazon Ödeme Araçları</span>
              <span>Kredi Kartı</span>
              <span>Taksitli Ödeme</span>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            background: "#131a22",
            padding: 40,
            color: "white",
            borderTop: "1px solid rgba(0,0,0,0.2)",
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src="assets/amazonlogo.png" style={{ width: 100 }} />
            <h5 style={{ margin: 30, color: "#f1941b", fontSize: 12 }}>
              clone concept made by mehmet basrioğlu.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
