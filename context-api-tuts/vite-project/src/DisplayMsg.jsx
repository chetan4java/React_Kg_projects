import React, { useContext } from 'react'
import { MyContext } from './context'



function DisplayMsg() {

  const {myMsg}=useContext(MyContext)
  return (
    <div> {myMsg}</div>
  )
}

export default DisplayMsg