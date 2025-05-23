import React from 'react'
import  style from "./ButtonsContainer.module.css"
function ButtonsContainer({onButtonClick}) {
  const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']


  return (
    <>
    <div className={style.buttonsContainer}> 
      {
        buttonNames.map((btnName)=><button className={style.button} onClick={()=>onButtonClick(btnName)}  >{btnName}</button>)
      }
        
    
        </div>
    
    
    </>
  )
}

export default ButtonsContainer