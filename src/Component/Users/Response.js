import {useState} from 'react'
import {FaMinus} from 'react-icons/fa'
import '../../css/style.css'
const Response = (question) => {
  const {title, name, note}= question
  const [Opening, setOpening] = useState(false)
  return (
    <>
 
    <div className='Question' >
        <div className='innerOne'>
            <p>{name}</p>
            <p onClick={()=>setOpening(!Opening)}>{Opening? <FaMinus/> : title }</p>
        </div>
        <p className='note'>{Opening && note}</p>
    </div>
   
    
    </>
  )
}

export default Response