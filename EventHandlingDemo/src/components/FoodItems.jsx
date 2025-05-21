import React from "react";
import Item from "./Item";

function FoodItems({ items }) {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} item={item}></Item>
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
