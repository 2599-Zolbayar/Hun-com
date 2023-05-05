import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Components/Product";
import ProductInfo from "./Components/ProductInfo";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import React, { useState, useEffect } from "react";
import data from "./Data";

function App() {
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState([
    {
      username: "admin1",
      password: "12345678",
    },
  ]);
  const [cartVisible, setCartVisible] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [user, setUser] = useState("Зочин");
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
        <Link to="/Нэвтрэх"> Нэвтрэх </Link>
        <button onClick={() => setCartVisible(true)}>
          Карт {totalQuantity}
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
            path="/Нэвтрэх"
            element={<Login setUser={setUser} userData={userData} />}
          />
          <Route
            path="/Бүртгүүлэх"
            element={<SignUp setUserData={setUserData} userData={userData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
