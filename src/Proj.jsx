import React from 'react'
import { NavLink } from 'react-router-dom'
import Projs from './ProjectsApi'

function Proj() {
  return (
   <div className='fullContainer'>
   <div >
    <NavLink exact to="/">
        <button className='btn btn-light'>GetBack to Home Page?</button>
    </NavLink>
    </div>
   {
    
    Projs.map((currEle,index)=>{
        return (
            <div className="card" id='newsId' >
    {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">{currEle.name} </h5>
              <p className="card-text">{currEle.Description} </p>
              <a href={currEle.link} target="_blank" className="btn btn-primary">Visit actual Site</a>
            </div>
          </div>
        )
    })
   }
   
   </div>
  )
}

export default Proj