import React from 'react'
import Navigation from './Navigation';
import './Model3.css';
import Details from './Details/Details.js';




const Model3 = () => {
  return (
    <>
      <Navigation
        tittle="Model 3"
        text1h="3.1 s"
        text1p=" 0-60 mph*"
        text2h="358 mi"
        text2p=" Range (EPA est.)"
        text3h="AWD"
        text3p=" Dual Motor"
        ButtonText="order Now"
        backgroundImg="Model-3-performance-Hero-Desktop-LHD.jpg"
      />

      <div className="featureSection" >
        <div className='grid'>
          <div className="image">
            <img src="/images/Model-3-hero-a-desktop.jpg" alt="cars inside" />
          </div>
          <div className="text">
            <h1>
              Built for Saftey
            </h1>
            <br />
            <p>
              Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.
              <br />
              <br />
              <span > 5-Star Rating</span><br />
              Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.
              <br />
              <br />
              <span>Top Safety Pick+</span>
              <br />
              Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.

            </p>
            <button> Order Now</button>
          </div>

        </div>
      </div>

      <Navigation

        text1h="3.1 s"
        text1p=" 0-60 mph*"
        text2h="162 mph"
        text2p=" Top Speed"
        text3h="AWD"
        text3p="Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions"
        backgroundImg="Model-3-Main-Hero-Desktop-LHD.jpg"

      />

      <Details
        top="Performance"
        below="Quickest Acceleration"
        Order="Order Now"
        ptext="Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3."
      />

      <Navigation

        text1h="2"
        text1p="Independent motors digitally control torque to the front and rear wheels "
        text2h="10 ms"
        text2p="Dual motors respond to changing conditions in as little as 10 milliseconds "
        text3h="Weather"
        text3p="Unparalleled traction and control, in all weather conditions"
        backgroundImg="Model-3-AWD-Hero-Desktop-LHD.jpg"
      />
      <Details
        top="Autopilot"
        below="Future of Driving"
        Order="Order Now"
        ptext="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. Chat with a Tesla Advisor to learn more about Model 3."
      />

      <Navigation

        text1h="15
        inch"
        text1p=" Touchscreen
        Display"
        text2h="Wifi"
        text2p=" Over-the-air
        Software
        Updates"
        text3h="Sunroof"
        text3p="All-Glass
        Roof"
        backgroundImg="Model-3-Interior-Hero-Desktop-LHD.jpg"

      />



    </>
  )
}

export default Model3;

