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
import { CSSTransition } from "react-transition-group";
import Footer from "./Components/Footer";

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
  const [setLogin, setSignUp] = useState(true);
  const [user, setUser] = useLocalStorage("name", "Зочин");

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
            <Link className="h-16" to="/">
              <img className="h-full" src={Logo} alt="" />
            </Link>
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
              className="w-1/5 h-12 flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-125"
              to="/painting"
            >
              Уран зураг
            </Link>
            <Link
              className="w-1/5 h-12 flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-125"
              to="/accessor"
            >
              {" "}
              Үнэт эдлэл{" "}
            </Link>
            <Link
              className="w-1/5 h-12 flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-125"
              to="/souvenirs"
            >
              {" "}
              Бэлэг дурсгал{" "}
            </Link>
            <Link
              className="w-1/5 h-12 flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-125"
              to="/clothes"
            >
              {" "}
              Хувцас{" "}
            </Link>
            {checkLogin ? (
              <button
                className="w-1/5 h-12 flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-125"
                onClick={() => {
                  setLoginVisible(true);
                }}
              >
                Нэвтрэх
              </button>
            ) : (
              <button
                className="text-red-500 w-1/5 h-12 flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-125"
                onClick={() => {
                  handleLogOut();
                }}
              >
                Гарах
              </button>
            )}
            {loginVisible ? (
              <div className="fixed w-screen h-screen flex bg-shadowColor gap-7 z-10">
                <Login
                  user={user}
                  setUser={setUser}
                  userData={userData}
                  setLoginVisible={setLoginVisible}
                  setUserData={setUserData}
                  setLogin={setLogin}
                  setSignUp={setSignUp}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <CSSTransition
            in={cartVisible}
            timeout={500}
            classNames="cart"
            unmountOnExit
          >
            <Cart
              user={user}
              cart={cart}
              setCart={setCart}
              cartVisible={cartVisible}
              setCartVisible={setCartVisible}
              setTotalQuantity={setTotalQuantity}
            />
          </CSSTransition>
        </div>

        <Routes>
          <Route
            path="/accessor"
            element={
              <Product
                title="Үнэт эдлэл"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/clothes"
            element={
              <Product
                title="Хувцас"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/souvenirs"
            element={
              <Product
                title="Бэлэг дурсгал"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/painting"
            element={
              <Product
                title="Уран зураг"
                cart={cart}
                setCart={setCart}
                data={data}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/info/:id"
            element={
              <ProductInfo
                data={data}
                cart={cart}
                setCart={setCart}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Product
                title="Хайлтын үр дүн"
                cart={cart}
                setCart={setCart}
                data={filteredData}
                setTotalQuantity={setTotalQuantity}
              />
            }
          />
        </Routes>
        <Footer setLoginVisible={setLoginVisible} setSignUp={setSignUp} />
      </Router>
    </div>
  );
}

export default App;
