import React, { useState } from "react";
import Minus from "./itemPicture/Minus.svg";
import Plus from "./itemPicture/Plus.svg";

const ProductInfo = ({ title, price, img }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex flex-row w-full justify-center gap-20">
      <img id="largeimage" src={img} alt={title} className="w-full" />
      <div className="flex flex-col">
        <div>
          <h2 className="text-5xl">{title}</h2>
          <div className="mt-3 pl-7 text-xl">
            <p className="text-btnColor2 text-3xl font-semibold">{price}₮</p>
            <p>Хэмжээ</p>
            <div className="w-40 h-10 flex items-center justify-center rounded-3xl bg-green-400 border-green-400 border">
              15cm x 9cm
            </div>
            <p>Төрөл</p>
            <div style={{ width: "510px" }} className="flex flex-wrap gap-1">
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
              <button onClick={() => setCount(count - 1)}>
                <img src={Minus} alt="minus" />
              </button>
              {count}
              <button onClick={() => setCount(count + 1)}>
                <img src={Plus} alt="plus" />
              </button>
            </div>
            <p>Огноо</p>
            <div></div>
            <p>Боломжит газрууд</p>
            <ul className="text-base">
              <li>Улаанбаатар</li>
              <li>Дорнод</li>
              <li>Эрдэнэт</li>
            </ul>
          </div>
          <button
            id="order"
            className="w-full ml-7 mt-5 border-2 rounded-xl bg-btnColor1 border-btnColor2 text-3xl text-btnColor2"
          >
            Сагсанд нэмэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
