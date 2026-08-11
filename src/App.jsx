import React from 'react'
import { useState } from 'react'

const App = () => {
  let[val,setval]=useState("Prachiiiiiiiiii")
  function aa(event){
    setval(event.target.value)
  }
  return (
    <div>
      <from action="">
        <h1>{val}</h1>
      <input type='text'onChange={aa} value={val}/>
      </from>
    </div>
  )
}

export default App
