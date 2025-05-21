import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
// import "./css/App.css"
function App() {
  const [todoItems,setTodoItems]=useState([
     
  ]);

  const handleNewItem=(todoName,todoDate)=>{

  const  newTodoItem=[...todoItems,{ name : todoName,
      dueDate: todoDate}]
      setTodoItems(newTodoItem)
  }
  const handleDeleteItem=(todoName)=>{
    const newTodoItems=todoItems.filter(item=>item.name !=  todoName)
    setTodoItems(newTodoItems)
    
  }
  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="items-container">
          <AddTodo onNewItem={handleNewItem}/>
            {todoItems.length === 0  &&  <WelcomeMessage className="align-content-center"/> }
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
          
        </div>
      </center>
    </>
  );
}

export default App;
