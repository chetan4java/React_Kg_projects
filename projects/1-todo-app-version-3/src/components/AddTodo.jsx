import { useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";


function AddTodo({onNewItem}) {

  const [todoName,setTodoName]=useState("")
  const [todoDate,setTodoDate]=useState("")
 
  const handleNameChange=((event)=>{
     setTodoName(event.target.value)
  })
  const handleDateChange=((event)=>{
     setTodoDate(event.target.value)
  })
  const handleAddButtonClicked=(event)=>{
   onNewItem(todoName,todoDate)
   setTodoDate("");
   setTodoName("");
  }
  return (
    <div className="container">

    
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" placeholder="Enter Todo here.." value={todoName}  onChange={
            handleNameChange
          }  />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" value={todoDate} onChange={handleDateChange}/>
        </div>
        <div className="col-4"> 
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
<IoMdPersonAdd />          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
