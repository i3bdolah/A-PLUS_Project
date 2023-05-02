import React from 'react'
import { google, amazon, airbnb, uberEats } from './index'

const OurClient = () => {
  return (
    <div className="ourclient ourclient-container">
      <div className="ourclient-container_l">
        <p className="ourclient-container_l-title">Our Client</p>
        <p className="ourclient-container_l-subtitle">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className="ourclient-container_r">
        <img src={google} id="google" alt="google" />
        <img src={amazon} id="amazon" alt="amazon" />
        <img src={airbnb} id="airbnb" alt="airbnb" />
        <img src={uberEats} id="uberEats" alt="uberEats" />
      </div>
    </div>
  )
}

export default OurClient
