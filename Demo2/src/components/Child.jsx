import React from 'react'


function Child(props) {
  return (
    <div>
      <h1 style={{color:'black',fontSize:'large'}}>Area he visited for marketing</h1>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Child
