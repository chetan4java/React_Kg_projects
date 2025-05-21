import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";
// import "./css/App.css"
function App() {
  const todoItems = [
    {
     name : "Buy milk",
      dueDate: "4 / 10 / 2020",
    },
    {
    name  : "MILK ",
      dueDate:" 4 / 10 / 2420",
    },
    {
     name : "SODAda  mlk",
      dueDate: "4 / 10 / 2024",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="items-container">
          <AddTodo />
          <TodoItems todoItems={todoItems} />
          
        </div>
      </center>
    </>
  );
}

export default App;
