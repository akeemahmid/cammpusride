import React from 'react'
import { Link } from 'react-router-dom'
// import Data from './Data'
import '../css/style.css'
// import Logo from './Users/logo192.png'

const About = ({Data}) => {
  return (
    <>  
     <h1 className='align'>We Gat You Covered</h1>
    <div className='Compound'>
      {Data.map((about)=>{
        
       return(
        <div key={about.id} className='product'>
               
        <h3>{about.name}</h3>
        <img src={about.image} alt='name'/>
        <h3>{about.title}</h3>
       <button> <Link className='leynks' to={`/about/${about.id}`}>Link to my bio</Link></button>
    </div>
  
       )
      })}
    </div>
    </>
  )
}

export default About