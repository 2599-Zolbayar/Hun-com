import React from "react";
import MakeProduct from "./makeProduct";
function Product(props) {
  const cart = props.cart;
  const title = props.title;
  const setCart = props.setCart;
  const setTotalQuantity = props.setTotalQuantity;
  const data = props.data;
  const productList = data.map((product) => {
    if (product.type === title) {
      return (
        <MakeProduct
          itemQuantity={product.itemQuantity}
          artist={product.artist}
          cart={cart}
          setCart={setCart}
          setTotalQuantity={setTotalQuantity}
          title={product.title}
          img={product.img}
          price={product.price}
          id={product.id}
        />
      );
    }

    if (title === "Хайлтын үр дүн") {
      return (
        <MakeProduct
          itemQuantity={product.itemQuantity}
          artist={product.artist}
          cart={cart}
          setCart={setCart}
          setTotalQuantity={setTotalQuantity}
          title={product.title}
          img={product.img}
          price={product.price}
          id={product.id}
        />
      );
    }
  });
  return (
    <div className="flex flex-col items-center w-full gap-10 mt-6">
      <h1 className="text-3xl">{title}</h1>
      <div className="grid gap-x-20 gap-y-12 grid-cols-3 max-[1220px]:grid-cols-2 max-[791px]:grid-cols-1">
        {productList}
      </div>
    </div>
  );
}

export default Product;
