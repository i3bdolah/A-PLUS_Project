import React from 'react'
import serviceRecCont from '../assets/backgrounds/service-rec.png'
import serviceCircle from '../assets/backgrounds/service-cir.png'
import serviceDots from '../assets/backgrounds/dots.png'
import serviceRecSm from '../assets/backgrounds/sm-service-rec.png'
import CardService from './CardService'

const Service = () => {
  return (
    <div className="service ">
      <div className="service-container-l">
        <div className="service-container-l-titleContainter">
          <p className="service-container-l-title">
            How can we help your Business ?
          </p>
          <p className="service-container-l-subtitle">
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <img src={serviceDots} alt="serviceDots" className="serviceDots" />
        <img src={serviceRecSm} alt="serviceRecSm" className="serviceRecSm" />
      </div>
      <div className="service-container-r">
        <div>
          <CardService />
        </div>
        <img
          src={serviceCircle}
          alt="serviceCircle"
          className="serviceCircle"
        />
      </div>
    </div>
  )
}

export default Service
