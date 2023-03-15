import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/style.css";
import {FaPlus} from 'react-icons/fa'
// import images from "./image/best.jpg";
import UniqueCar from '../Component/image/bikeman2.jpg'
// import car from "./image/Car.jpg";

import {
  FaCheck,
  FaClock,
  FaList,
  FaMoneyBill,
  FaReceipt,
  FaPen,
} from "react-icons/fa";

// import Swippers from "./Swippers";
import Asked from "./Users/Asked";
import Ending from "./Ending";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";

const Home = () => {
  const [Questions, setQuestions] = useState([
    {
      name: "How Can I BooK A Ride",
      id: 1,
      title: <FaPlus/>,
      note: "lorem jenkdkknvnjjfjfndh njffhnjnfvnjjthhtjjdndc Lorem ipsum dolor sit amet consectetur adipisicing elitEsse iure ut dicta maxime perspiciatis odit tempora blanditiis velit nam eligendi maiores rem praesentium consequuntur adipisci commodi deleniti sit numquam Aperiam necessitatibus debitis quaerat voluptatum eos ea accusantium ut officiis enim ncnn cjnvjjg",
      catgorey: "dinner",
    },
    {
      name: "Where is Your Head Office",
      id: 2,
      title: <FaPlus/>,
      note: "lorem jenkdkknvnjjfjfndh njffhnjnfvnjjthhtjjdndc Lorem ipsum dolor sit amet consectetur adipisicing elitEsse iure ut dicta maxime perspiciatis odit tempora blanditiis velit nam eligendi maiores rem praesentium consequuntur adipisci commodi deleniti sit numquam Aperiam necessitatibus debitis quaerat voluptatum eos ea accusantium ut officiis enim ncnn cjnvjjg",
      catgorey: "dinner",
    },
    {
      name: "Time Of Arrival",
      id: 3,
      title: <FaPlus/>,
      note: "lorem jenkdkknvnjjfjfndh njffhnjnfvnjjthhtjjdndc Lorem ipsum dolor sit amet consectetur adipisicing elitEsse iure ut dicta maxime perspiciatis odit tempora blanditiis velit nam eligendi maiores rem praesentium consequuntur adipisci commodi deleniti sit numquam Aperiam necessitatibus debitis quaerat voluptatum eos ea accusantium ut officiis enim ncnn cjnvjjg",
      catgorey: "breakfast",
    },
    {
      name: "Time Of Arrival",
      id: 3,
      title: <FaPlus/>,
      note: "lorem jenkdkknvnjjfjfndh njffhnjnfvnjjthhtjjdndc Lorem ipsum dolor sit amet consectetur adipisicing elitEsse iure ut dicta maxime perspiciatis odit tempora blanditiis velit nam eligendi maiores rem praesentium consequuntur adipisci commodi deleniti sit numquam Aperiam necessitatibus debitis quaerat voluptatum eos ea accusantium ut officiis enim ncnn cjnvjjg",
      catgorey: "breakfast",
    },
    {
      name: "Time Of Arrival",
      id: 3,
      title: <FaPlus/>,
      note: "lorem jenkdkknvnjjfjfndh njffhnjnfvnjjthhtjjdndc Lorem ipsum dolor sit amet consectetur adipisicing elitEsse iure ut dicta maxime perspiciatis odit tempora blanditiis velit nam eligendi maiores rem praesentium consequuntur adipisci commodi deleniti sit numquam Aperiam necessitatibus debitis quaerat voluptatum eos ea accusantium ut officiis enim ncnn cjnvjjg",
      catgorey: "breakfast",
    },
  
  ]);
  const Weare = [
    {
      id: 1,
      numbring: '01',
      unique: 'Affordability',
      lesson: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    },
    {
      id: 2,
      numbring: '02',
      unique: 'Security',
      lesson: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    },
    {
      id: 3,
      numbring: '03',
      unique: 'Reliability',
      lesson: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    }
  ]
  const Wework = [
    {
      id: 1,
      icon: <FaCheck />,
      name:'Registered Account',
      letter: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    },
    {
      id: 2,
      icon: <FaList />,
      name:'Select Your Preffered Choice',
      letter: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    },
    {
      id: 2,
      icon: <FaClock />,
      name:'Set Time And Pick Up Station',
      letter: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    },
    {
      id: 3,
      icon: <FaMoneyBill />,
      name:'Proceed to Make payment',
      letter: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    },
    {
      id: 5,
      icon: <FaReceipt />,
      name:'Upload Proof',
      letter: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    },
    {
      id: 6,
      icon: <FaPen />,
      name:' Congratulations',
      letter: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maximeeius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae odit earum? Distinctio sapiente perferendis aliquam.'
    },
 
  ]
  const Testimonias = [
    {
      id: 1,
      header: "Crypto Baddie",
      emage: 'https://pbs.twimg.com/profile_images/1632891336763244544/LMdqT2j_.jpg',
      inform:
        "Crypto Baddie eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 2,
      header: "Joy Shaheb",
      emage: 'https://pbs.twimg.com/profile_images/1506884709879492612/zIcxxVIe.jpg',
      inform:
        "  Joy Saheb is my gee . the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 3,
      header: "John from Coding Addict",
      emage: 'https://pbs.twimg.com/profile_images/1520133642617503744/mzvfe61Y.jpg',
      inform:
        "  Coding Addict is a very unique programmer. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 4,
      header: "Agba Akin",
      emage: 'https://pbs.twimg.com/profile_images/1632457674569793537/_RhHPvX_.jpg',
      inform:
        "Agba Akin na boss ooh. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 5,
      header: "Coding Gossy",
      emage: 'https://pbs.twimg.com/profile_images/1520133642617503744/mzvfe61Y.jpg',
      inform:
        "  Coding gossy na one of the reasonable tech guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 6,
      header: "Sheezey",
      emage: 'https://pbs.twimg.com/profile_images/1591385400693719040/H3U8lLn3.jpg',
      inform:
        "  Sheezey is a back-end and cryto guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 7,
      header: "Seleem Devs",
      emage: 'https://pbs.twimg.com/profile_images/1632457674569793537/_RhHPvX_.jpg',
      inform:
        "  Sheezey is a front-end and math guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
  ];
  return (
    // <></>
    <>
      <section className="areaOne">
        <div>
          <h1>The Fast, Affordable And Reliable Way To Ride</h1>
          <p>
            Our Ride is the best ride across the world. We guarantee 100%
            customer satisfaction
          </p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus aliquam quidem suscipit voluptas magni nesciunt maxime
            eius esse dignissimos debitis accusamus facilis qui est minus
            explicabo, veniam, distinctio dolore consectetur ullam beatae quae
            odit earum? Distinctio sapiente perferendis aliquam.
          </small>
          <NavLink className="links" id="links" to="login">
            Book Your Ride
          </NavLink>
        </div>
        <div className="Second">
          {/* inside here i will put a little gif of a moving car
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus aliquam quidem suscipit voluptas magni nesciunt maxime
            eius esse dignissimos debitis accusamus facilis qui est minus
            explicabo, veniam, distinctio dolore consectetur ullam beatae quae
            odit earum? Distinctio sapiente perferendis aliquam. */}
        </div>
      </section>
      <section className="we-are">
        <div className="First">
          <h1>Who we are?</h1>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus aliquam quidem suscipit voluptas magni nesciunt maxime
            eius esse dignissimos debitis accusamus facilis qui est minus
            explicabo, veniam, distinctio dolore consectetur ullam beatae quae
            odit earum? Distinctio sapiente perferendis aliquam.
          </small>
          <h3>We are Fast, Reliable and Affordable</h3>
          <NavLink className="links" id="links" to="login">
            Contact Us
          </NavLink>
        </div>
        <div className="div2"></div>
      </section>
      <section className="main">
        <div className="threeItems">
          {Weare.map((x)=>{
            const {unique, numbring, lesson, id} = x
            return(
              <div className="child" key={id}>
              <div className="numbers">
                <h1>{numbring}</h1> <span>{unique}</span>
              </div>
              <p>
              {lesson}
              </p>
            </div>
            )
          })}
        </div>
      </section> 
      {/* --------------how does it work------------- */}
      <section className="how-work">
        <h1>How Does It Work</h1>
        <p>
          This will be an automatic guide for you so you will be able to <br />
          progress and enjoy your free ride
        </p>

        <div className="works">
          {Wework.map((x)=>{
            const {letter, id, icon, name} = x
            return(
              <div className="child" key={id}>
              <h3>
                {" "}
                {icon} {name}
              </h3>
              <p>
               {letter}
              </p>
            </div>
            )
          })}
    
        </div>
        <NavLink className="links" id="links" to="login">
          Get Started
        </NavLink>

        <div className="others">
          <div className="storage">
            <h1>
              Ride, storage, <br /> refurbishment
            </h1>
             <div className="image-div"></div> 
            <img src={UniqueCar} alt="name" />

            <div className="sub">
              <h2>We Strictly Work With Time</h2>
              <p>
                Time management is very important in order to satisfly out
                clients
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                temporibus aliquam quidem suscipit voluptas magni nesciunt
                maxime eius esse dignissimos debitis accusamus facilis qui est
                minus explicabo, veniam, distinctio dolore consectetur ullam
                beatae quae odit earum? Distinctio sapiente perferendis aliquam.
              </p>
              <NavLink className="links" id="links" to="entry">
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="circle"></div>
        </div>
      </section> 
   
       {/* <Swippers/> */}
      <Asked Questions={Questions} key={Questions.id}/>
      {/* the swipper js area for user testimony */}
      <div className="Realgees">
      <h1>User Testimonies</h1>
      <Swiper
          //  slidesPerView={3}
          //  spaceBetween= {20}
           breakpoints={{
            0:{
              slidesPerView:1.2,
          spaceBetween:20
            },

            1000:{
              slidesPerView:2,
              spaceBetween:20
            },

            1024:{
              slidesPerView:3,
              spaceBetween:20
            }
          }}
           className="mySwiper Mygeehs"
           // pagination={true}
           grabCursor={true}
           loop={true}
           modules={[Autoplay]}
           autoplay={{
             delay: 3500,
             disableOnInteraction: false,
           }}
          >
        
            {Testimonias.map((x) => (
              <SwiperSlide key={x.id}>
                <img src={x.emage} alt="cars" />
                <h4>{x.header}</h4>
                <p>{x.inform}</p>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
      <Ending/>  
    </>
  );
};

export default Home;
