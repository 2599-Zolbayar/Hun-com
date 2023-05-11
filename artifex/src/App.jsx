import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Components/Product";
import ProductInfo from "./Components/ProductInfo";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import React, { useState, useEffect } from "react";
import data from "./Data";
import "./index.css";
import Basket from "./Components/itemPicture/Basket.svg";
import useLocalStorage from "./use-local-storage";

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

  return (
    <div className="bg-main relative">
      <Router>
        <Link to="/УранЗураг"> Уран зураг </Link>
        <Link to="/ҮнэтЭдлэл"> Үнэт эдлэл </Link>
        <Link to="/БэлэгДурсгал"> Бэлэг дурсгал </Link>
        <Link to="/Хувцас"> Хувцас </Link>
        <button
          onClick={() => {
            setLoginVisible(true);
          }}
        >
          Нэвтрэх
        </button>
        {loginVisible ? (
          <div className="absolute w-full h-screen flex bg-shadowColor gap-7 z-10">
            <Login
              setUser={setUser}
              userData={userData}
              setLoginVisible={setLoginVisible}
            />
          </div>
        ) : (
          ""
        )}
        <button
          className="relative h-10 w-10"
          onClick={() => setCartVisible(!cartVisible)}
        >
          <img src={Basket} alt="basket" />
          <p className="absolute bottom-0 right-0 rounded-full px-1 text-xs bg-btnColor1 text-btnColor2">
            {totalQuantity}
          </p>
        </button>
        <p>{user}</p>
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
            path="/Бүртгүүлэх"
            element={
              <SignUp
                setUserData={setUserData}
                userData={userData}
                setLoginVisible={setLoginVisible}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
