import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
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
  // ******OR********* *

  // let emptyMessage=foodItems.length===0 ?<h3>I am still  hungry</h3>:null
  // ******OR********* *
  let emptyMessage = foodItems.length === 0 && <h3>I am still hungry</h3>;
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food </h1>
        <FoodInput></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          thid Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quidem neque commodi nesciunt deserunt sit, expedita debitis velit atque dolore quod asperiores sequi maxime qui repudiandae, non consequuntur ipsa ab!
        </p>

      </Container>
    </>
  );
}

export default App;
