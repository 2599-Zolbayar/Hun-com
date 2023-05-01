import { Component } from "react";

function ShoppingCart({ cart }) {
  return (
    <div>
      <div>Cart Items</div>
      {cart.lenght === 0 && <div>No items</div>}
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
