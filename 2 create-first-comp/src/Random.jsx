export function Random(){
  let number =Math.random()*100
  return <>
  <h1 style={{backgroundColor:'green', color :'white'}}>This is Random Number :- {number} round {Math.round(number)}</h1>
  </>

}
