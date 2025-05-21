import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  const [textToShow, setTextToShow] = useState();
  const [foodItems, setFooditems] = useState([]);

  const onKeyDown = (event) => {
    console.log(event);
    console.log(event.key);

    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newitems = [...foodItems, newFoodItem];
      setFooditems(newitems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food </h1>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          thid Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          quidem neque commodi nesciunt deserunt sit, expedita debitis velit
          atque dolore quod asperiores sequi maxime qui repudiandae, non
          consequuntur ipsa ab!
        </p>
      </Container>
    </>
  );
}

export default App;
