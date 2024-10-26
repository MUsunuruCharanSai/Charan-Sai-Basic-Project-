import React, { useState } from 'react'
import Child from './components/child'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import "./styles/App.css"

function App() {


  const [value,setvalue] = useState("")


  function handleText(event){
    setvalue(event.target.value)

  }

  function handleSubmit(event){
   event.preventDefault()
  }
  return (
    <div className='top'>
    <div className='main'>
      <BrowserRouter>
      <h6 className='heading'>Area he visited yesterday for marketing</h6>
      <form onSubmit={handleSubmit}>
      <input className='textbox' type="text" onChange={handleText} />
      <br />
      </form>
      <br />
      <Link className='btn' to='/Child'>Next</Link>

   
      <Routes>
        <Route path="/Child" element={<Child name={value}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
