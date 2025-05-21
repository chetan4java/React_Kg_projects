import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodItems = [
    "Dal",
    "Green vegetables",
    "Milk",
    "Roti",
    "Salad",
    "Ghee",
    "sabji",
  ];
  // let foodItems=[]
  // if (foodItems.length===0)
  //   return <h3>I am still  hungry</h3>
  //******OR********* */

  // let emptyMessage=foodItems.length===0 ?<h3>I am still  hungry</h3>:null
  //******OR********* */
  let emptyMessage = foodItems.length === 0 && <h3>I am still hungry</h3>;
  return (
    <>
      <h1 className="food-heading">Healthy food </h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
