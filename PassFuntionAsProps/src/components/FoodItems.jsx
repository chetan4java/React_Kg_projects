import React from "react";

import Item from "./Item";
import { useState } from "react";

function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (event, item) => {
    // console.log(activeItems);
    let newItems;
    if (activeItems.includes(item))
      newItems = activeItems.filter((i) => i !== item);
    else newItems = [...activeItems, item];

    setActiveItems(newItems);
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            item={item}
            baught={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(event, item)}
          ></Item>
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
