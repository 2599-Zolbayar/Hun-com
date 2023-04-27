import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./ProductPage";
import ProductInfo from "./Components/ProductInfo";
import React, { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);
  return (
    <div>
      <Router>
        <Link to="/products"> Products </Link>
        <Routes>
          <Route
            path="/products"
            element={
              <ProductPage
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
                img={selectedImage}
                title={selectedTitle}
                price={selectedPrice}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
