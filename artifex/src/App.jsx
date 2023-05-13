import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Components/Product";
import Logo from "./Components/itemPicture/Logo.svg";
import ProductInfo from "./Components/ProductInfo";
import Cart from "./Components/Cart";
import { FiUser } from "react-icons/fi";
import Login from "./Components/Login";
import React, { useState, useEffect } from "react";
import data from "./Data";
import "./index.css";
import Basket from "./Components/itemPicture/Basket.svg";
import useLocalStorage from "./use-local-storage";
import Search from "./Components/Search";

function App() {
  const [cart, setCart] = useLocalStorage("products", []);
  const [userData, setUserData] = useState([
    {
      username: "admin1",
      password: "12345678",
    },
  ]);
  const [cartVisible, setCartVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [user, setUser] = useLocalStorage("name", "Зочин");
  const [productInfo, setProductInfo] = useState({
    title: data[0].title,
    price: data[0].price,
    img: data[0].img,
  });

  console.log("hello" + productInfo);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  useEffect(() => {
    console.log("totalQuantity updated:", totalQuantity);
  }, [totalQuantity]);

  const [checkLogin, setCheckLogin] = useState(true);

  useEffect(() => {
    if (user !== "Зочин") setCheckLogin(false);
  }, [user, checkLogin]);

  function handleLogOut() {
    setUser("Зочин");
    setCheckLogin(true);
  }

  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="bg-main relative">
      <Router>
        <div>
          <div className="flex flex-row justify-between px-8 items-center">
            <img className="h-16" src={Logo} alt="" />
            <div className="flex flex-row h-11 gap-2">
              <Search
                data={data}
                filteredData={filteredData}
                setFilteredData={setFilteredData}
              />
              <div className="relative flex flex-col items-center w-9">
                <FiUser className="w-7 h-7" />
                <p className="text-xs p-0 absolute bottom-0 ">{user}</p>
              </div>
              <button
                className="relative h-11 w-11"
                onClick={() => setCartVisible(!cartVisible)}
              >
                <img src={Basket} alt="basket" />
                <p className="absolute bottom-0 right-0 rounded-full px-1 text-xs bg-btnColor1 text-btnColor2">
                  {totalQuantity}
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <Link
              className="w-1/5 h-12 flex items-center justify-center"
              to="/УранЗураг"
            >
              Уран зураг
            </Link>
            <Link
              className="w-1/5 h-12 flex items-center justify-center"
              to="/ҮнэтЭдлэл"
            >
              {" "}
              Үнэт эдлэл{" "}
            </Link>
            <Link
              className="w-1/5 h-12 flex items-center justify-center"
              to="/БэлэгДурсгал"
            >
              {" "}
              Бэлэг дурсгал{" "}
            </Link>
            <Link
              className="w-1/5 h-12 flex items-center justify-center"
              to="/Хувцас"
            >
              {" "}
              Хувцас{" "}
            </Link>
            {checkLogin ? (
              <button
                className="w-1/5 h-12 flex items-center justify-center"
                onClick={() => {
                  setLoginVisible(true);
                }}
              >
                Нэвтрэх
              </button>
            ) : (
              <button
                className="text-red-500 text-sm font-semibold leading-6"
                onClick={() => {
                  handleLogOut();
                }}
              >
                Гарах
              </button>
            )}
            {loginVisible ? (
              <div className="absolute w-full h-screen flex bg-shadowColor gap-7 z-10">
                <Login
                  user={user}
                  setUser={setUser}
                  userData={userData}
                  setLoginVisible={setLoginVisible}
                  setUserData={setUserData}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {cartVisible ? (
            <Cart
              user={user}
              cart={cart}
              setCart={setCart}
              setCartVisible={setCartVisible}
              setTotalQuantity={setTotalQuantity}
            />
          ) : (
            ""
          )}
        </div>

        <Routes>
          <Route
            path="/ҮнэтЭдлэл"
            element={
              <Product
                setProductInfo={setProductInfo}
                title="Үнэт эдлэл"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/Хувцас"
            element={
              <Product
                setProductInfo={setProductInfo}
                title="Хувцас"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/БэлэгДурсгал"
            element={
              <Product
                setProductInfo={setProductInfo}
                title="Бэлэг дурсгал"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/УранЗураг"
            element={
              <Product
                setProductInfo={setProductInfo}
                title="Уран зураг"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/Дэлгэрэнгүй"
            element={
              <ProductInfo
                productInfo={productInfo}
                data={data}
                cart={cart}
                setCart={setCart}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/Хайлт"
            element={
              <Product
                setProductInfo={setProductInfo}
                title="Хайлтын үр дүн"
                cart={cart}
                setCart={setCart}
                data={filteredData}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
