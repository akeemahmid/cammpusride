import React, { useState } from "react";
import {FaTimes, FaTrash} from 'react-icons/fa'
import "../css/style.css";

const Dashboard = ({ User, setHeestory }) => {
  const [required, setrequired] = useState("");
  const [Details, setDetails] = useState({
    PickupStation: "",
    DropStation: "",
    Agendas: "",
    Datte: "",
  });
  const [success, setsuccess] = useState(false);
  const [processing, setprocessing] = useState(false);
  const [list, setlist] = useState([]);

  const Entries = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...Details, [name]: value });
  };

  const driver = (e) => {
    e.preventDefault();
    if (
      Details.PickupStation &&
      Details.DropStation &&
      Details.Agendas &&
      Details.Datte
    ) {
      setsuccess(true);
      setprocessing(true);
      const histoory = { ...Details, id: Math.floor(Math.random() * 200) };

      setrequired("Order successfully Booked");
      setlist([...list, histoory]);

      setTimeout(() => {
        setrequired("");
        setDetails({
          PickupStation: "",
          DropStation: "",
          Agendas: "",
          Datte: "",
        });
        setprocessing(false);
      }, 2000);
    } else {
      setsuccess(false);
      setrequired("Please Ensure to fill all fields");
      setTimeout(() => {
        setrequired("");
      }, 3000);
      return;
    }
    // setHeestory(list)
  };
  const deleteMe = (id) =>{
    setlist(list.filter((x)=> x.id !== id))
  }
  return (
    <>
      <div className='map'>
    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=badagry&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
      <div className="position">
        <h2>Let get Started</h2>
        <div>
          Hello <span>{User?.name}</span> please proceed with your order
        </div>
      </div>
      {/* <div>{User?.email}</div> */}

      <div className="box1">
        <div className="bookings">
          <span className={success ? "success" : "error2"}>{required}</span>
          <input
            type="text"
            placeholder="Pick up Station"
            name="PickupStation"
            value={Details.PickupStation}
            onChange={Entries}
          />
          <input
            type="text"
            placeholder="Destination"
            name="DropStation"
            value={Details.DropStation}
            onChange={Entries}
          />
          <input
            type="time"
            name="Agendas"
            value={Details.Agendas}
            onChange={Entries}
          />
          <input
            type="Date"
            name="Datte"
            value={Details.Datte}
            onChange={Entries}
          />
          <button onClick={driver} className="sumit">
            {processing ? "Processing" : "Submit"}
          </button>
        </div>
      </div>
      {/* <div className='RideHistory'>
    {list.map((x)=>{
      return<ul key={x.id
      }>
      <li>Pick Up: {x.PickupStation} <span>Destination: {x.DropStation}</span> <span>Time: {x.Agendas}</span> <span>Date: {x.Datte}</span></li>
      {/* <h2>{x.DropStation}</h2>
      <h2>{x.Agendas}</h2> *}
      </ul>
    })}</div> */}
      {/* <div>list</div> */}
      <div className="ridehistory">
        <h1>Ride History</h1>
        {list.map((x) => {
          return (
            <ul key={x.id}>
              <li className="liest">
           <div><span>Pick Up:</span> {x.PickupStation}</div>
                <div><span>Destination:</span> {x.DropStation}</div>
                <div><span>Time:</span> {x.Agendas}</div> <div><span>Date:</span> {x.Datte}</div>
                <div className="delete"><FaTrash  onClick={()=> deleteMe(x.id)}/></div>
              </li>
              {/* <h2>{x.DropStation}</h2>
      <h2>{x.Agendas}</h2> */}
            </ul>
            
          );
        })}
        <button className="Clearbtn" onClick={()=> setlist([])}>Clear History</button>
      </div>
    </>
  );
};

export default Dashboard;
