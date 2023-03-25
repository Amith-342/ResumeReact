import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Proj from "./Proj"

function App() {
  return (
    
    <>
    <Routes>
      <Route exact path='/' element = {<Home/>} />
      <Route exact path='/projects' element = {<Proj/>} />

    </Routes>
    
    </>
  )
}

export default App