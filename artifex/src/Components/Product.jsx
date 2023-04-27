import React from "react";
import MakeProduct from "./makeProduct";
function Product(props) {
  const setSelectedPrice = props.setSelectedPrice;
  const setSelectedTitle = props.setSelectedTitle;
  const setSelectedImage = props.setSelectedImage;
  const data = props.data;
  const productList = data.map((product) => {
    return (
      <MakeProduct
        setSelectedPrice={setSelectedPrice}
        setSelectedTitle={setSelectedTitle}
        setSelectedImage={setSelectedImage}
        title={product.title}
        img={product.img}
        price={product.price}
      />
    );
  });
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <h1 className="text-3xl">Үнэт зүйлс</h1>
      <div className="grid gap-x-20 gap-y-12 grid-cols-3 max-[1220px]:grid-cols-2 max-[791px]:grid-cols-1">
        {productList}
      </div>
    </div>
  );
}

export default Product;