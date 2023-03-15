import React from "react";
import "../css/style.css";
// import '../../public/Bike.jpg'
import car from "./image/Car.jpg";
import Ending from "./Ending";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import Swiper from "swiper";

const Frequently = () => {
  const arrays = [
    {
      id: 1,
      title: "Meet Our Driver",
      image:'https://cdn.shopify.com/s/files/1/0271/5015/5836/files/earth_2048x.jpg?v=1614731575',
      Sentence:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maxime  ${<br/>} eius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae ${<br/>} odit earum? Distinctio sapiente perferendis aliquam.hj`,
      button: "Get Started",
    },
    {
      id: 2,
      title: "Coupon and Reward",
      image:'https://img.freepik.com/premium-photo/paper-bags-with-big-percent-promo-code-concept-earn-point-get-reward-3d-render_18622-734.jpg?size=338&ext=jpg&ga=GA1.2.1643642804.1678317474&semt=ais',
      Sentence:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maxime  `<br/>` eius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae <br/> odit earum? Distinctio sapiente perferendis aliquam.hj",
      button: "Get Started",
    },
    {
      id: 3,
      title: "Discounts",
      image:'https://brownies.sirv.com/images/promo/discount-icon.gif',
      Sentence:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maxime  `<br/>` eius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae <br/> odit earum? Distinctio sapiente perferendis aliquam.hj",
      button: "Get Started",
    },
    {
      id: 4,
      title: "Refreshment",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4_8quPUcGMV0sOAsJi0y0jv8v6XpHfKDsA&usqp=CAU',
      Sentence:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus aliquam quidem suscipit voluptas magni nesciunt maxime  `<br/>` eius esse dignissimos debitis accusamus facilis qui est minus explicabo, veniam, distinctio dolore consectetur ullam beatae quae <br/> odit earum? Distinctio sapiente perferendis aliquam.hj",
      button: "Get Started",
    },
  ];
  const array2 = [
    {
      name: "Engagement and Fun",
      message: "Full Stack Course Available",
    },
    {
      name: "Blood and Family",
      message: "Become One Of Us",
    },
    {
      name: "CAD Academy",
      message: "We Also Teach About Cryto",
    },
    {
      name: "Man united 0:7 Liverpool",
      message: "Will You Like to Engage in Sport",
    },
    {
      name: "Entertaiment",
      message: "We Rise Next Rated Artist",
    },
  ];
  const array3 = [
    {
      id: 1,
      header: "Sheriff Sheezey",
      imeage:'https://assets-wp.boundless.com/uploads/2021/06/immigrant-driving-car.png',
      inform:
        "  Sheezey is a back-end and cryto guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 2,
      header: "Selim Alabi yellow",
      imeage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9ktraC7TIo3lLZsiMqUVpPiHwF6x7yHgxw&usqp=CAU',
      inform:
        "  Sheezey is a back-end and cryto guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 3,
      header: "Sheriff Sheezey",
      imeage:'https://img.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-30191.jpg?size=626&ext=jpg&ga=GA1.1.1643642804.1678317474&semt=ais',
      inform:
        "  Sheezey is a back-end and cryto guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 4,
      header: "Selim Alabi yellow",
      imeage:'https://img.freepik.com/free-photo/female-taxi-driver-paying-attention-road_23-2149236675.jpg?size=626&ext=jpg&ga=GA1.1.1643642804.1678317474&semt=ais',
      inform:
        "  Sheezey is a back-end and cryto guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 5,
      header: "Selim Alabi yellow",
      imeage:'https://blog.drivedifferent.com/hs-fs/hubfs/SMI-BLOG-Ways-to-Improve-Drivers-Happiness%20(1).jpg?width=782&name=SMI-BLOG-Ways-to-Improve-Drivers-Happiness%20(1).jpg',
      inform:
        "  Sheezey is a back-end and cryto guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
    {
      id: 7,
      header: "Selim Alabi yellow",
      imeage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgX_LTjUGBjq4da3-AXy4d73dubfdAUVY2Q&usqp=CAU',
      inform:
        "  Sheezey is a back-end and cryto guru. the werey mad gon eius esse dignissimos debitis accusamus facilis qui est minus explicabo,veniam, distinctio dolore consectetur ullam beatae quae",
    },
  ];
  return (
    <>
      <div className="ourTeam">
        <div className="TeamBackground">
          <h2>Join our ride</h2>
          <p>
            Our goal is to make people life simplier and more plaesant to give
            everyone a stress <br /> free and comfortable ride anywhere across
            the world
          </p>
          <button>Get Started</button>
        </div>
      </div>

      <div className="Drivers">
        <Swiper
          slidesPerView={1}
          className="mySwiper"
          // pagination={true}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {arrays.map((x) => (
            <SwiperSlide key={x.id}>
              <div className="detailled">
                <h1>{x.title}</h1>
                <div className="detImg">
                  <img src={x.image} alt="cars" />
                </div>
                <p>{x.Sentence}</p>
                <button>{x.button}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="detailled">
        <h1>Meet Our Drivers</h1>
          <div className="detImg">
            <img src={car}  alt='cars'/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus aliquam quidem suscipit voluptas magni nesciunt maxime <br/>
            eius esse dignissimos debitis accusamus facilis qui est minus
            explicabo, veniam, distinctio dolore consectetur ullam beatae quae <br/>
            odit earum? Distinctio sapiente perferendis aliquam.hj</p>
            <button>Get Started</button>
        </div> */}
      </div>
      <div className="Gees">
        <h1>Alaye Partner With Us</h1>

        <div className="omoAlaye">
          <Swiper
            // slidesPerView={3}
            // spaceBetween={20}
            breakpoints={{
              0:{
                slidesPerView:1.5,
            spaceBetween:20
              },

              900:{
                slidesPerView:2.5,
                spaceBetween:15
              },

              1024:{
                slidesPerView:3,
                spaceBetween:20
              }
            }}
            className="mySwiper"
            id="myswiper"
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet swiper-pagination-testClass",
            }}
            grabCursor={true}
            loop={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {array2.map((x) => (
              <SwiperSlide className="swipers">
                <div className="iteems">
                  <h3>{x.name}</h3>
                  <p>{x.message}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div>
          <h3>Bad guy Pablo</h3>
          <p>If i no see anything in you i no go  reason you</p>
        </div>
        <div>
          <h3>Bad guy Pablo</h3>
          <p>If i no see anything in you i no go  reason you</p>
        </div> */}
        </div>
        <button>Find your Ride</button>
      </div>

      <div className="Realgees">
        <h1>Meet Our Drivers</h1>
        <p>
          It doesn't matters where you come form and what team you join. We will
          walk you through your entire experience of working at Our Ride
          <br />
          and support you to do the best
        </p>

      
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
            {array3.map((x) => (
              <SwiperSlide key={x.id}>
                <img src={x.imeage} alt="cars" />
                <h4>{x.header}</h4>
                <p>{x.inform}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div>
            <img src={car} alt="cars" />
            <h4>Sheriff Sheezey</h4>
            <p>
              Sheezey is a back-end and cryto guru. the werey mad gon eius esse
              dignissimos debitis accusamus facilis qui est minus explicabo,
              veniam, distinctio dolore consectetur ullam beatae quae
            </p>
          </div>
          <div>
            <img src={car} alt="cars" />
            <h4>Selim Alabi yellow</h4>
            <p>
              Selim is a front-end developer. the werey no get joy at all eius
              esse dignissimos debitis accusamus facilis qui est minus
              explicabo, veniam, distinctio dolore consectetur ullam beatae quae
            </p>
          </div>
          <div>
            <img src={car} alt="cars" />
            <h4>Selim Alabi yellow</h4>
            <p>
              Selim is a front-end developer. the werey no get joy at all eius
              esse dignissimos debitis accusamus facilis qui est minus
              explicabo, veniam, distinctio dolore consectetur ullam beatae quae
            </p>
          </div> */}
     
      </div>
      <Ending />
    </>
  );
};

export default Frequently;
