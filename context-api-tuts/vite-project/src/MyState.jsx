import React, { useContext } from 'react'
import { MyContext } from './context'


function MyState() {

  const {myState}=useContext(MyContext)
  return (
    <div>   {myState?"maha":"gujrat"}  </div>
  )
}

export default MyState