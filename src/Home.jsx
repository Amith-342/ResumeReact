import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="fullContainer">
    <div>
        <h1 className='nameTitle'>Amith Simha</h1>
    <span className='bTitle'>Mobile No:7204052256| Email: amithsimhav2002@gmail.com</span>
    
    </div>

    <hr />
<div className="box2 skills">
    <h3 className='start'>SKILLS</h3>
    <h5 className='mid1'>Front End Development:</h5>
    <ul className=' langs end'>HTML</ul>
    <ul className=' langs end'>CSS</ul>
    <ul className=' langs end'>JavaScript</ul>
    <ul className=' langs end'>ReactJS</ul>

    <h5 className='mid1'>BackEnd Development:</h5>
    <ul className=' langs end'>NodeJS</ul>
    <ul className=' langs end'>ExpressJS</ul>
    <ul className=' langs end'>Java</ul>
    <ul className=' langs end'>Mongoose</ul>

    <h5 className='mid1'>Competetive Programming:</h5>
    <ul className=' langs end'>C</ul>
    <ul className=' langs end'>C++</ul>
    <a className='end' href="#" target="_blank">My Hackerrank Profile&emsp; </a>
    <a className='end' href='https://www.codingninjas.com/codestudio' target="_blank">My CodeStudio Profile</a>

    
    <h5 className='mid1 lan'>Languages:</h5>
    <h6 className='mid2'>Experienced:</h6>
    <ul className=' langs end'>C++</ul>
    <ul className=' langs end'>HTML</ul>
    <ul className=' langs end'>CSS</ul>
    <ul className=' langs end'>JavaScript</ul>
    <ul className=' langs end'>ReactJS</ul>

    <h6 className='mid2'>Familiar:</h6>
    <ul className=' langs end'>NodeJS</ul>
    <ul className=' langs end'>Mongoose</ul>
    <ul className=' langs end'>Python</ul>
    <ul className=' langs end'>JAVA</ul>
    <ul className=' langs end'>SQL</ul>

</div>

<div className="box2 projects">
    <h3 className='start'>PROJECTS</h3>
    <NavLink className='projBtn' to="/projects">
        <button id='btnProj' className='btn'>My Projects</button>
    </NavLink>
    <h5 className='mid1 proj'>HTML & CSS</h5>
    <ul className=' langs end proj'>Tindog</ul>
    <ul className=' langs end proj'>My Site</ul>

    <h5 className='mid1 proj'>JavaScript</h5>
    <ul className=' langs end proj'>Simon Game</ul>
    <ul className=' langs end proj'>Drum Kit</ul>
    <ul className=' langs end proj'>Rock Paper Scissor</ul>
    <ul className=' langs end proj'>Pixel Editor</ul>

    <h5 className='mid1 proj'>Node and Mongoose</h5>
    <ul className=' langs end proj'>Todo List</ul>



    <h5 className='mid1 proj'>Other</h5>
    <ul className=' langs end proj'>NewsLetter Signup(NodeJS)</ul>
    <ul className=' langs end proj'>ToDoList (Mongoose)</ul>
    <ul className=' langs end proj'>KeeperApp(ReactJS)</ul>
    <ul className=' langs end proj'>Combined React Project</ul>




</div>

<div className="edu box2">
    <h3 className='start'>EDUCATION</h3>
<h5 className='mid1'>Schooling:</h5>
<p className='end schl'>
    Mount Senoria School<br></br>Located in Bengaluru Karnataka<br></br>
Score:&emsp;86%.
</p>

<h5 className='mid1'>PUC:</h5>
<p className='end schl'>
    Oxford PU College<br></br>Located in Bengaluru Karnataka<br></br>
    Score:&emsp;68%.
</p>

<h5 className='mid1'>B.Tech</h5>
<p className='end schl'>
    International Institute of Information Technoloy,Bhubaneswar.<br></br>
    Located in Bhubaneswar,Odisha.<br></br>
    Branch:Computer Engineering.<br></br>
   Current CGPA:  &emsp;7.74 (by the end of 5th Semester).
   </p>

</div>

<div className="links">
    <a href='https://github.com/Amith-342?tab=repositories' target="_blank">My GitHub Profile Link&emsp;&emsp;</a>
    
    <a href='https://www.codingninjas.com/codestudio' target="_blank">My CodeStudio Profile Link</a>
</div>

    </div>
    </>
  )
}

export default Home