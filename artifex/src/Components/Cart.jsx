import React, { useState } from "react";

function Cart({ cart, setCart, setCartVisible, setTotalQuantity, user }) {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (item, index, newQuantity) => {
    const newCart = [...cart];

    if (index >= 0) {
      newCart[index] = { ...item, quantity: newQuantity };
      setCart(newCart);
    }
  };
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));

  function clickHandleButton() {
    if (user !== "Зочин") {
      alert("Захиалга амжилттай");
      setCart([]);
    } else alert("Хүсэлт амжилтгүй. Нэвтрэх хэсэгт дарж нэвтэрнэ үү");
  }

  return (
    <div
      style={{ width: "500px" }}
      className="absolute top-0 right-0 bg-main p-6 flex flex-col gap-2 z-20 rounded-xl drop-shadow-2xl"
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl">МИНИЙ САГС</h2>
        <button onClick={() => setCartVisible(false)}>X</button>
      </div>
      <hr />
      {cart.map((item, index) => {
        if (item.quantity === 0) {
          removeFromCart(index);
          return null;
        }
        return (
          <div key={index} className="flex flex-row p-2 justify-between">
            <div className="flex flex-row gap-6">
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 rounded"
              />
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p>
                  {item.price.toLocaleString({
                    maximumFractionDigits: 2,
                  })}
                  ₮
                </p>
                <div className="flex flex-row gap-1">
                  <button
                    onClick={() =>
                      updateQuantity(item, index, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() =>
                      updateQuantity(item, index, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500"
            >
              Хасах
            </button>
          </div>
        );
      })}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 text-lg">
          <p>НИЙТ ҮНИЙН ДҮН: </p>
          <p className="text-btnColor2 font-semibold">
            {totalPrice.toLocaleString({
              maximumFractionDigits: 2,
            })}
            ₮
          </p>
        </div>
        <button
          onClick={() => clickHandleButton()}
          className="flex justify-center items-center w-24 border rounded-2xl bg-btnColor1 text-btnColor2 hover:bg-btnColor2 hover:text-btnColor1"
        >
          Захиалах
        </button>
      </div>
    </div>
  );
}

export default Cart;
