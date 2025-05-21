 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 let foodItems= ['Dal','Green vegetables','Milk','Roti','Salad','Ghee']
  // let foodItems=[]
  // if (foodItems.length===0)
  //   return <h3>I am still  hungry</h3>
  //******OR********* */

// let emptyMessage=foodItems.length===0 ?<h3>I am still  hungry</h3>:null
//******OR********* */
 let emptyMessage=foodItems.length===0 &&<h3>I am still  hungry</h3> 
  return (
    <>
      <h1>Healthy food </h1>
      {emptyMessage}
      <ul className="list-group">
        {
        foodItems.map(item=><li className="list-group-item" key={item}> {item}</li> )
        }
        
          {/* <li className="list-group-item">Dal </li>       

         <li className="list-group-item">Green vegetable</li>       
        <li className="list-group-item">Milk </li>       
        <li className="list-group-item">Roti  </li>       
        <li className="list-group-item">Salad </li>          */}
  
      </ul>
      
       
    </>
  )
}

export default App
