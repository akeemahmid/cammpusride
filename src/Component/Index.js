import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import DashRoute from "./DashRoute";
import Error from "./Error";
import Form from "./Form";
import Frequently from "./Frequently";
import Home from "./Home";
import Login from "./Login";
import SharedLayout from "./SharedLayout";
import Data from './Data'
import Singleproduct from "./Singleproduct";
import History from "./History";

const Index = () => {
    const [User, setUser] = useState('');
    const [Heestory, setHeestory] = useState(null)
    return (
      <BrowserRouter>
        <Routes>
          <Route path="entry" element={<Form setUser={setUser} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
  
          <Route path="Dashboard" element={<DashRoute User={User} />}>
            <Route index element={<Dashboard User={User} setHeestory={setHeestory} />} />
            <Route path="history" element={<History Heestory={Heestory}/>}/>
          </Route>
  
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About Data={Data} />} />
             <Route path="about/:aboutId" element={<Singleproduct/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="frequently" element={<Frequently />} />
            <Route path="*" element={<Error />} />
          
<Route /> 
          </Route> 
        </Routes>
      </BrowserRouter>
    );
  };

export default Index