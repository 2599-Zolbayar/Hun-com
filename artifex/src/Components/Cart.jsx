import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";

function Cart({ cart, setCart, setCartVisible, setTotalQuantity, user }) {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  // Картанд орсон барааны тоог өөрчлөх
  const updateQuantity = (item, index, newQuantity) => {
    const newCart = [...cart];

    if (index >= 0) {
      newCart[index] = { ...item, quantity: newQuantity };
      setCart(newCart);
    }
  };
  //Нийт үнэ
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  //Нийт тоо хэмжээ
  setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
  //order button click
  function clickHandleButton() {
    if (user !== "Зочин") {
      alert("Захиалга амжилттай");
      setCart([]);
    } else alert("Хүсэлт амжилтгүй. Нэвтрэх хэсэгт дарж нэвтэрнэ үү");
  }

  return (
    <div
      style={{
        width: "500px",
      }}
      className="absolute top-0 right-0 bg-main p-6 flex flex-col gap-2 z-20 rounded-xl drop-shadow-2xl top-28"
      id="cart"
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl">МИНИЙ САГС</h2>
        <div className="flex flex-row gap-2">
          <button onClick={() => setCart([])}>
            <HiOutlineTrash className="w-6 h-6 text-red-500 rounded-full" />
          </button>
          <button onClick={() => setCartVisible(false)}>
            <MdOutlineClear className="w-7 h-7 text-btnColor2 rounded-full" />
          </button>
        </div>
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
                      updateQuantity(
                        item,
                        index,
                        //itemQuanity is stock
                        item.itemQuantity > item.quantity
                          ? item.quantity + 1
                          : item.quantity
                      )
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
