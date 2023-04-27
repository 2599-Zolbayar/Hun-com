import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MakeProduct({
  title,
  img,
  price,
  setSelectedPrice,
  setSelectedTitle,
  setSelectedImage,
}) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleButtonClick = () => {
    navigate("/info");
    setSelectedPrice(price);
    setSelectedTitle(title);
    setSelectedImage(img);
  };
  return (
    <div onMouseEnter={() => setIsHovered(false)}>
      {isHovered ? (
        <div
          id="item-image"
          className="absolute flex flex-col justify-center bg-shadowColor items-center gap-7"
        >
          <button
            className="flex justify-center items-center w-48 h-10 border rounded-2xl text-btnColor1 border-btnColor1 bg-opacity-0 hover:bg-btnColor1 hover:text-btnColor2"
            onClick={handleButtonClick}
          >
            дэлгэрэнгүй
          </button>
          <button className="flex justify-center items-center w-48 h-10 border rounded-2xl text-btnColor2 border-btnColor2 bg-opacity-0 hover:bg-btnColor2 hover:text-btnColor1">
            сагсанд хийх
          </button>
        </div>
      ) : (
        ""
      )}

      <img id="item-image" onMouseEnter={() => setIsHovered(true)} src={img} />
      <div>
        <p className="text-2xl">{title}</p>
        <h2 className="text-3xl font-semibold text-btnColor2">{price} ₮</h2>
      </div>
    </div>
  );
}

export default MakeProduct;
