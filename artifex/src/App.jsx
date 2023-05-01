import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Components/Product";
import ProductInfo from "./Components/ProductInfo";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import React, { useState, useEffect } from "react";
import data from "./Data";

function App() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  useEffect(() => {
    console.log("totalQuantity updated:", totalQuantity);
  }, [totalQuantity]);

  return (
    <div className="bg-main relative">
      <Router>
        <Link to="/products"> Үнэт эдлэл </Link>
        <Link to="/login"> Нэвтрэх </Link>
        <button onClick={() => setCartVisible(true)}>
          Карт {totalQuantity}
        </button>
        {cartVisible ? (
          <Cart
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
            path="/products"
            element={
              <Product
                title="Үнэт эдлэл"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
                setSelectedImage={setSelectedImage}
                setSelectedTitle={setSelectedTitle}
                setSelectedPrice={setSelectedPrice}
              />
            }
          />
          <Route
            path="/info"
            element={
              <ProductInfo
                cart={cart}
                setCart={setCart}
                img={selectedImage}
                title={selectedTitle}
                price={selectedPrice}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
