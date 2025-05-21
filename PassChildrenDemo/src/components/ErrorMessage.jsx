import React from 'react'

function ErrorMessage({items}) {

   let emptyMessage=items.length===0 &&<h3>I am still  hungry</h3>
  return (
    <div>{emptyMessage}</div>
  )
}

export default ErrorMessage