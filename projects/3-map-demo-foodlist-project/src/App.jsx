 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 
  let foodItems=['Dal','Green vegetables','Milk','Roti','Salad','Ghee']
  return (
    <>
      <h1>Healthy food </h1>
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
