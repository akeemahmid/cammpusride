import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from './Data'
import '../css/style.css'

const Singleproduct = () => {
  const { aboutId } = useParams();
  const [title, settitle] = useState("");
  const [imagee, setimagee] = useState('')
  const [others, setothers] = useState("");
  const [readmore, setreadmore] = useState(false)
  useEffect(() => {
    const newItems = Data.find((about)=> about.id === parseInt(aboutId))
    settitle(newItems.name)
    setothers(newItems.more)
    setimagee(newItems.image)
  }, []);
  return (
    <div id="Compound">
  <div id="product">
  <h2>{title}</h2>
  <img src={imagee}/>
  <p>{readmore ? others : `${others.substring(0, 150)}...`}
    <button className="readmore" onClick={()=>setreadmore(!readmore)}>{readmore ? 'Show less' : 'Read More'}</button>
  </p>
 <button> <Link to='/about' className="leinks">Back to product</Link></button>
 <button> <Link to='/login' className="leinks">Book Your Ride</Link></button> 
 <br/>
 <small>Login to Book your Ride</small>
  </div>
    </div>
 
  )
};

export default Singleproduct;
