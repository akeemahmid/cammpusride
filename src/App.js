import React, { useEffect, useState } from "react";
import Index from "./Component/Index";  
import Loading from "./Component/Loading";
import './css/style.css'
const url = 'https://api.github.com/users'


function App() {
  const [loading, setloading] = useState(true)
  const fetching = async()=>{
    const question = await fetch(url)
    const response = await question.json()
    console.log(response);
    setloading(false)
  } 
  useEffect(()=>{
    fetching()
  },[])
  return (
<>
<div>
      {loading? <Loading/> :  <Index/>}
    </div>
</>
  );
}

export default App;
