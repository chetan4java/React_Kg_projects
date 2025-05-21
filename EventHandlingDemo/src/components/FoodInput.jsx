import React from "react";
import style from "./FoodInput.module.css";
function FoodInput() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        className={style.foodInput}
        placeholder="enter txt"
        // onChange={(event) => handleOnChange(event)}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default FoodInput;
