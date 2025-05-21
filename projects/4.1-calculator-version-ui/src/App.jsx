
 import appstyle from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
// import "./App.module.css"
 function App() {

  return (
   <center>
    <div className={appstyle.calculator}>
      <Display></Display>

       <ButtonsContainer />      
  
     </div>
     </center>
  )
}export default App;
