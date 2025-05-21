import React from "react";
import style from "./FoodInput.module.css";
function FoodInput({ handleOnKeyDown }) {
  return (
    <div>
      <input
        type="text"
        className={style.foodInput}
        placeholder="enter txt"
        // onChange={(event) => handleOnChange(event)}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
}

export default FoodInput;
