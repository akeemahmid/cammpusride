import React from 'react'
import Response from './Response'

const Asked = ({Questions}) => {
    
 return(
  <>
  <div className='family'>

  {Questions.map((question)=>{
    return (
      <Response key={question.id} {...question}/>
    )
  })}
  </div>

  </>
 )
}

export default Asked