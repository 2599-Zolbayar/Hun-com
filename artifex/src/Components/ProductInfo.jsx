import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Minus from "./itemPicture/Minus.svg";
import Plus from "./itemPicture/Plus.svg";
import Calendar from "./itemPicture/Calendar.svg";

const ProductInfo = ({ cart, setCart, setTotalQuantity, data }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  const [count, setCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("Cart updated:", count);
  }, [count]);

  useEffect(() => {
    setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart, setTotalQuantity]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddButton = () => {
    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.title === product.title
    );

    if (itemIndex >= 0) {
      const newCart = [...cart];
      newCart[itemIndex] = {
        ...newCart[itemIndex],
        quantity: count,
      };
      setCart(newCart);
    } else {
      const newProduct = {
        ...product,
        quantity: count,
      };
      setCart([...cart, newProduct]);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col w-full items-center mt-6 justify-center gap-20 xl:flex-row">
      <img
        id="largeimage"
        src={product.img}
        alt={product.title}
        className="w-full xl:w-52 xl:h-52"
      />
      <div className="flex flex-col">
        <div>
          <h2 className="text-5xl">{product.title}</h2>
          <div className="mt-3 pl-7 text-xl">
            <p className="text-btnColor2 text-3xl font-semibold">
              {product.price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
              ₮
            </p>
            <p>Хэмжээ</p>
            <div className="w-40 h-10 flex items-center justify-center rounded-3xl bg-green-400 border-green-400 border">
              15cm x 9cm
            </div>
            <p>Төрөл</p>
            <div
              style={{ width: "500px" }}
              className="flex flex-wrap gap-1 xl:w-full"
            >
              <div className="w-40 h-10 flex items-center justify-center rounded-3xl bg-green-400 border-green-400 border">
                {product.type}
              </div>
              <div className="w-40 h-10 flex items-center justify-center rounded-3xl bg-green-400 border-green-400 border">
                Үнэтэй
              </div>
              <div className="w-40 h-10 flex items-center justify-center rounded-3xl bg-green-400 border-green-400 border">
                Цөөн тооны
              </div>
            </div>
            <p>Уран бүтээлч: {product.artist}</p>
            <p>Тоо ширхэг</p>
            <div className="text-base">
              Боломжит тоо: {product.itemQuantity}
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={() =>
                  setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
                }
              >
                <img src={Minus} alt="minus" />
              </button>
              {count}
              <button
                onClick={() =>
                  setCount((prevCount) =>
                    prevCount < product.itemQuantity ? prevCount + 1 : prevCount
                  )
                }
              >
                <img src={Plus} alt="plus" />
              </button>
            </div>
            <p>Огноо</p>
            <div className="relative">
              <div className="w-44 h-8 flex flex-row items-center justify-between rounded-xl bg-green-400 border-green-400 px-2 border">
                <div>
                  {selectedDate && (
                    <p>
                      {" "}
                      {selectedDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
                <img src={Calendar} onClick={toggleVisibility} alt="calendar" />
              </div>
              {isVisible && (
                <div className="absolute">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    inline
                    isClearable
                    showMonthDropdown
                    useShortMonthInDropdown
                    showYearDropdown
                  />
                </div>
              )}
            </div>
            <p>Боломжит газрууд</p>
            <ul className="text-base">
              <li>Улаанбаатар</li>
              <li>Дорнод</li>
              <li>Эрдэнэт</li>
            </ul>
          </div>
          <button
            onClick={handleAddButton}
            id="order"
            className="w-full ml-7 mt-5 border-2 rounded-xl bg-btnColor1 border-btnColor2 text-3xl text-btnColor2 hover:bg-btnColor2 hover:text-btnColor1"
          >
            Сагсанд нэмэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
