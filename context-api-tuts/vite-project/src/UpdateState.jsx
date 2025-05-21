import React, { useContext } from 'react'
import { MyContext } from './context'

function UpdateState() {

  const {setMyState,myState}=useContext(MyContext)
  const handleStateChange=(e)=>{
     setMyState(!myState)
 
  }
  return (
   <>
    
        <button onClick={handleStateChange}>update 
          State
           </button>
   
   </>
  )
}

export default UpdateState