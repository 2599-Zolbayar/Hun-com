import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Minus from "./itemPicture/Minus.svg";
import Plus from "./itemPicture/Plus.svg";
import Calendar from "./itemPicture/Calendar.svg";

const ProductInfo = ({ cart, setCart, setTotalQuantity, productInfo }) => {
  const [count, setCount] = useState(1);
  const quantity = 1;
  const { title, price, img } = productInfo;

  useEffect(() => {
    console.log("Cart updated:", quantity);
  }, [quantity]);

  const handleAddButton = () => {
    const item = { title, img, price, quantity };
    const itemIndex = cart.findIndex((cartItem) => cartItem.title === title);

    if (itemIndex >= 0) {
      const newCart = [...cart];
      newCart[itemIndex] = {
        ...newCart[itemIndex],
        quantity: count,
      };
      setCart(newCart);
    } else {
      setCart([...cart, item]);
      item.quantity = count;
    }
  };
  setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));

  const [selectedDate, setSelectedDate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleDateChange = (dates) => {
    setSelectedDate(dates);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center gap-20 xl:flex-row">
      <img
        id="largeimage"
        src={img}
        alt={title}
        className="w-full xl:w-52 xl:h-52"
      />
      <div className="flex flex-col">
        <div>
          <h2 className="text-5xl">{title}</h2>
          <div className="mt-3 pl-7 text-xl">
            <p className="text-btnColor2 text-3xl font-semibold">
              {price.toLocaleString({
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
                Үнэт эдлэл
              </div>
              <div className="w-40 h-10 flex items-center justify-center rounded-3xl bg-green-400 border-green-400 border">
                Үнэтэй
              </div>
              <div className="w-40 h-10 flex items-center justify-center rounded-3xl bg-green-400 border-green-400 border">
                Хаш чулуун
              </div>
              <div className="w-40 h-10 flex items-center justify-center rounded-3xl bg-green-400 border-green-400 border">
                Толботой
              </div>
            </div>
            <p>Тоо ширхэг</p>
            <div className="flex flex-row gap-3">
              <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                <img src={Minus} alt="minus" />
              </button>
              {count}
              <button onClick={() => setCount(count + 1)}>
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
                      {selectedDate.toLocaleDateString({
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
                <img src={Calendar} onClick={() => toggleVisibility()} />
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
