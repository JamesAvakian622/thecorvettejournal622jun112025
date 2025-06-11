import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZR1 from "./ZR1/CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
// import OnPageZR1 from "./ZR1/OnPageZR1";
// import CarouselFlag from "./ZR1/CarouselFlag";
// //import SidebarZR1 from "./SidebarZR1";
// import SidebarZR1 from "./ZR1/SidebarZR1";
// import SidebarZR1B from "./ZR1/SidebarZR1B";
import NavbarVideos from './NavbarVideos';
import NavbarTracks from './NavbarTracks';

import NavbarMore from "./NavbarMore"
import "./More.css";

export default function More2() {

  const items = [
    {
      id: 1,
      title: "F1 Racing ",
      image: "zrz.png",
      // image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://www.formula1.com/en/latest/article/drivers-teams-cars-circuits-and-more-everything-you-need-to-know-about.7iQfL3Rivf1comzdqV5jwc",
    },
    {
      id: 2,
      title: "F1 Racing, China",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 3,
      title: "F1 Racing, Belgium",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },

    {
      id: 4,
      title: "F1 Racing, Las Vegas",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 5,
      title: "F1 Racing, Brizil",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://developer.mozilla.org",
    },
    {
      id: 6,
      title: "F1 Racing, Qatar",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://developer.mozilla.org",
    },


    {
      id: 7,
      title: "F1 Racing, Silverstone, UK",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://developer.mozilla.org",
    },
    {
      id: 8,
      title: "F1 Racing, Spa-Francorchamps, Belgium",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://developer.mozilla.org",
    },
    {
      id: 9,
      title: "F1 Racing, D'Italia, Italy",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://developer.mozilla.org",
    },
    {
      id: 10,
      title: "F1 Racing, Suzuka, Japan",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 11,
      title: "MDN Web Docs",
      image: "https://developer.mozilla.org/favicon.ico",
      url: "https://developer.mozilla.org",
    },
    {
      id: 12,
      title: "W3Schools",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://www.w3schools.com",
    },


    {
      id: 13,
      title: "ReactJS Official",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 14,
      title: "MDN Web Docs",
      image: "https://developer.mozilla.org/favicon.ico",
      url: "https://developer.mozilla.org",
    },
    {
      id: 15,
      title: "W3Schools",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://www.w3schools.com",
    },

    {
      id: 16,
      title: "ReactJS Official",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 17,
      title: "MDN Web Docs",
      image: "https://developer.mozilla.org/favicon.ico",
      url: "https://developer.mozilla.org",
    },
    {
      id: 18,
      title: "W3Schools",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://www.w3schools.com",
    },


    {
      id: 19,
      title: "ReactJS Official",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 20,
      title: "MDN Web Docs",
      image: "https://developer.mozilla.org/favicon.ico",
      url: "https://developer.mozilla.org",
    },
    {
      id: 21,
      title: "W3Schools",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://www.w3schools.com",
    },
    {
      id: 22,
      title: "ReactJS Official",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 23,
      title: "MDN Web Docs",
      image: "https://developer.mozilla.org/favicon.ico",
      url: "https://developer.mozilla.org",
    },
    {
      id: 24,
      title: "W3Schools",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://www.w3schools.com",
    },


    {
      id: 25,
      title: "ReactJS Official",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 26,
      title: "MDN Web Docs",
      image: "https://developer.mozilla.org/favicon.ico",
      url: "https://developer.mozilla.org",
    },
    {
      id: 27,
      title: "W3Schools",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://www.w3schools.com",
    },

  ];


  // Second Json DataSource

  const items2 = [
    {
      id: 1,
      title: 'F1 Racing ',
      image: 'zrz.png',
      // image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: 'https://www.formula1.com/en/latest/article/drivers-teams-cars-circuits-and-more-everything-you-need-to-know-about.7iQfL3Rivf1comzdqV5jwc',
    },
    {
      id: 2,
      title: 'F1 Racing, China',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },
    {
      id: 3,
      title: 'F1 Racing, Belgium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },

    {
      id: 4,
      title: 'F1 Racing, Las Vegas',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },
    {
      id: 5,
      title: 'F1 Racing, Brizil',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 6,
      title: 'F1 Racing, Qatar',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://developer.mozilla.org',
    },

    {
      id: 7,
      title: 'F1 Racing, Silverstone, UK',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 8,
      title: 'F1 Racing, Spa-Francorchamps, Belgium',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 9,
      title: "F1 Racing, D'Italia, Italy",
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 10,
      title: 'F1 Racing, Suzuka, Japan',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },
    {
      id: 11,
      title: 'MDN Web Docs',
      image: 'https://developer.mozilla.org/favicon.ico',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 12,
      title: 'W3Schools',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://www.w3schools.com',
    },

    {
      id: 13,
      title: 'ReactJS Official',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },
    {
      id: 14,
      title: 'MDN Web Docs',
      image: 'https://developer.mozilla.org/favicon.ico',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 15,
      title: 'W3Schools',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://www.w3schools.com',
    },

    {
      id: 16,
      title: 'ReactJS Official',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },
    {
      id: 17,
      title: 'MDN Web Docs',
      image: 'https://developer.mozilla.org/favicon.ico',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 18,
      title: 'W3Schools',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://www.w3schools.com',
    },

    {
      id: 19,
      title: 'ReactJS Official',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },
    {
      id: 20,
      title: 'MDN Web Docs',
      image: 'https://developer.mozilla.org/favicon.ico',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 21,
      title: 'W3Schools',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://www.w3schools.com',
    },
    {
      id: 22,
      title: 'ReactJS Official',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },
    {
      id: 23,
      title: 'MDN Web Docs',
      image: 'https://developer.mozilla.org/favicon.ico',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 24,
      title: 'W3Schools',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://www.w3schools.com',
    },

    {
      id: 25,
      title: 'ReactJS Official',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      url: 'https://reactjs.org',
    },
    {
      id: 26,
      title: 'MDN Web Docs',
      image: 'https://developer.mozilla.org/favicon.ico',
      url: 'https://developer.mozilla.org',
    },
    {
      id: 27,
      title: 'W3Schools',
      image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
      url: 'https://www.w3schools.com',
    },
  ];

// Third Json DataSource

const items3 = [
  {
    id: 1,
    title: 'F1 Racing ',
    image: 'zrz.png',
    // image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    url: 'https://www.formula1.com/en/latest/article/drivers-teams-cars-circuits-and-more-everything-you-need-to-know-about.7iQfL3Rivf1comzdqV5jwc',
  },
  {
    id: 2,
    title: 'F1 Racing, China',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },
  {
    id: 3,
    title: 'F1 Racing, Belgium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },

  {
    id: 4,
    title: 'F1 Racing, Las Vegas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },
  {
    id: 5,
    title: 'F1 Racing, Brizil',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 6,
    title: 'F1 Racing, Qatar',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://developer.mozilla.org',
  },

  {
    id: 7,
    title: 'F1 Racing, Silverstone, UK',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 8,
    title: 'F1 Racing, Spa-Francorchamps, Belgium',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 9,
    title: "F1 Racing, D'Italia, Italy",
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 10,
    title: 'F1 Racing, Suzuka, Japan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },
  {
    id: 11,
    title: 'MDN Web Docs',
    image: 'https://developer.mozilla.org/favicon.ico',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 12,
    title: 'W3Schools',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://www.w3schools.com',
  },

  {
    id: 13,
    title: 'ReactJS Official',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },
  {
    id: 14,
    title: 'MDN Web Docs',
    image: 'https://developer.mozilla.org/favicon.ico',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 15,
    title: 'W3Schools',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://www.w3schools.com',
  },

  {
    id: 16,
    title: 'ReactJS Official',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },
  {
    id: 17,
    title: 'MDN Web Docs',
    image: 'https://developer.mozilla.org/favicon.ico',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 18,
    title: 'W3Schools',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://www.w3schools.com',
  },

  {
    id: 19,
    title: 'ReactJS Official',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },
  {
    id: 20,
    title: 'MDN Web Docs',
    image: 'https://developer.mozilla.org/favicon.ico',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 21,
    title: 'W3Schools',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://www.w3schools.com',
  },
  {
    id: 22,
    title: 'ReactJS Official',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },
  {
    id: 23,
    title: 'MDN Web Docs',
    image: 'https://developer.mozilla.org/favicon.ico',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 24,
    title: 'W3Schools',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://www.w3schools.com',
  },

  {
    id: 25,
    title: 'ReactJS Official',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    url: 'https://reactjs.org',
  },
  {
    id: 26,
    title: 'MDN Web Docs',
    image: 'https://developer.mozilla.org/favicon.ico',
    url: 'https://developer.mozilla.org',
  },
  {
    id: 27,
    title: 'W3Schools',
    image: 'https://www.w3schools.com/images/w3schools_logo_436_2.png',
    url: 'https://www.w3schools.com',
  },
];


  return (
    <>

      <div className="rowPage">
        <CarouselZR1 />
      </div>

      <div className="center">
      <NavbarVideos />
         <br />              

        <NavbarMore />

        <NavbarTracks />

      </div>


      <br />            <br />            <br />
      {/* the corvette Resources */}
      <div id="1" className="card-container">

        {items.map((item) => (
          <div key={item.id} className="card">
            <img
              src={item.image}
              alt={item.title}
              className="card-image"
            />

            <a href={item.url} target="_blank" rel="noopener noreferrer" className="card-link">
              {item.title}


              <h2 className="card-title">{item.title}
                <a href={item.url}>   {
                  item.title
                }
                </a>

              </h2>
            </a>

          </div>
        ))}
      </div>


      <hr />

      {/* MotorSports Index */}
       <div id="#2" className="center">
        <h1>   MotorSports, Races, And Track Index </h1>
      </div>
      <hr />



      <br />            <br />                     <br />

     

      <div className="card-container">

        {items2.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-image" />

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {item.title}

              <h2 className="card-title">
                {item.title}
                <a href={item.url}>
                  {item.title}
                </a>

              </h2>
            </a>

          </div>
        ))}
      </div>

<hr />
     {/* MotorSports Index */}
     <div id="#3" className="center">
        <h1>   NASCAR Track Index </h1>
      </div>
      <hr />



      <br />            <br />                   <br />

     

      <div className="card-container">

        {items3.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-image" />

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {item.title}

              <h2 className="card-title">
                {item.title}
                <a href={item.url}>
                  {item.title}
                </a>

              </h2>
            </a>

          </div>
        ))}
      </div>


      <Footer />




    </>
  );
}
