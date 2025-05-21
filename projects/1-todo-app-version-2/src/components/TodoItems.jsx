import React from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css"

function TodoItems({ todoItems }) {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item)=>(
        <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} ></TodoItem>
      )
    )}
      
    </div>
  );
}

export default TodoItems;
