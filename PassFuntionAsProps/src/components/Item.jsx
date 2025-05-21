import React from "react";
import styles from "./Item.module.css";

function Item({ item, baught, handleBuyButton }) {
  //  const handleClick=()=>{
  //   console.log(`button is clicked ${item} `)
  //  }

  // const handleClick = (event) => {
  //   console.log(`button is clicked ${item} `);
  // };

  return (
    <div>
      {
        <li
          className={` ${styles["kg-item"]} list-group-item ${
            baught && "active"
          } `}
        >
          <span className={styles["kg-span"]}>{item}</span>
          {/* <button className={`btn btn-info ${styles.button}`} onClick={handleClick} >Buy</button>
        </li> */}
          <button
            className={`btn btn-info ${styles.button}`}
            onClick={handleBuyButton}
          >
            {baught ? "remove" : "Buy"}
          </button>
        </li>
      }
    </div>
  );
}

export default Item;
