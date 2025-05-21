import React from "react";
 import styles from "./Item.module.css"

function Item({ item }) {
  return (
    <div>
      {
        <li className={`list-group-item ${styles["kg-item"]}`} >
         <span className={styles["kg-span"]}>{item}</span>
 
        </li>
      }
    </div>
  );
}

export default Item;
          