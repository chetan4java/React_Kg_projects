 
import { useContext } from 'react'
import './App.css'
import { MyContext, MyContextProvider } from './context.jsx'
import Component1 from './Component1.jsx'
  

 
function App() {
 
   return (
    
 
  <MyContextProvider>
      <Component1 />
  </MyContextProvider>
  
   

   )
}

export default App
