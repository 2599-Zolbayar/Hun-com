import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MakeProduct({
  cart,
  itemQuantity,
  artist,
  setCart,
  title,
  img,
  price,
  setTotalQuantity,
  id,
}) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));

  const handleButtonClick = () => {
    navigate(`/info/${id}`);
  };

  const handleAddButton = () => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.title === title);

    if (itemIndex >= 0) {
      const newCart = [...cart];
      newCart[itemIndex] = {
        ...newCart[itemIndex],
        quantity: newCart[itemIndex].quantity + quantity,
      };
      setQuantity(itemQuantity > newCart[itemIndex].quantity ? 1 : 0);
      setCart(newCart);
    } else {
      const item = { title, img, price, quantity, itemQuantity };
      setQuantity(0);
      setCart([...cart, item]);
    }
  };

  return (
    <div>
      {isHovered && (
        <div
          id="item-image"
          className="absolute flex flex-col justify-center bg-shadowColor items-center gap-7 z-10"
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col text-btnColor1">
            <p>Уран бүтээлч: {artist}</p>
            <p>Боломжит тоо: {itemQuantity}</p>
          </div>
          <button
            className="flex justify-center items-center w-48 h-10 border rounded-2xl text-btnColor1 border-btnColor1 bg-opacity-0 hover:bg-btnColor1 hover:text-btnColor2"
            onClick={handleButtonClick}
          >
            дэлгэрэнгүй
          </button>
          <button
            onClick={handleAddButton}
            className="flex justify-center items-center w-48 h-10 border rounded-2xl text-btnColor2 border-btnColor2 bg-opacity-0 hover:bg-btnColor2 hover:text-btnColor1"
          >
            сагсанд хийх
          </button>
        </div>
      )}

      <img
        id="item-image"
        onMouseEnter={() => setIsHovered(true)}
        src={img}
        alt={title}
      />
      <div>
        <p className="text-2xl">{title}</p>
        <h2 className="text-3xl font-semibold text-btnColor2">
          {price.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
          ₮
        </h2>
      </div>
    </div>
  );
}

export default MakeProduct;
