import React from 'react'
import serviceRecCont from '../assets/backgrounds/service-rec.png'
import serviceCircle from '../assets/backgrounds/service-cir.png'
import serviceDots from '../assets/backgrounds/dots.png'
import serviceRecSm from '../assets/backgrounds/sm-service-rec.png'
// import CardService from './CardService'
import Business from '../assets/help/business.png'
import Market from '../assets/help/market.png'
import Development from '../assets/help/development.png'
import Financial from '../assets/help/financial.png'

const cardsInfo = [
  {
    id: 1,
    title: 'Business Idea Planning',
    description: 'We present you a proposal and discuss niffty-gritty like',
    img: Business,
    color: '#F1F7FF',
  },
  {
    id: 3,
    title: 'Development Website and App',
    description: 'Communication protocols apart from engagement models',
    img: Development,
    color: '#FFF2F8',
  },
]

const cardsInfo2 = [
  {
    id: 2,
    title: 'Financial Planning System',
    description: 'Protocols apart from aengage models, pricing billing',
    img: Financial,
    color: '#FFF7E3',
  },

  {
    id: 4,
    title: 'Market Analysis Project',
    description: 'Protocols apart from aengage models, pricing billing',
    img: Market,
    color: '#DEFFEE',
  },
]
const CardService = () => {
  return (
    <div id="card">
      <div className="card-img-con-l">
        {cardsInfo.map((el) => (
          <div className="card-container" key={el.id}>
            <div className="card-img-container">
              <img
                src={el.img}
                alt={el.img + el.id}
                className={`img`}
                style={{
                  background: el.color,
                }}
              />
            </div>
            <p className="card-container-r-title">{el.title}</p>
            <p className="card-container-r-subtitle">{el.description}</p>
          </div>
        ))}
      </div>
      <div className="card-img-con-r">
        {cardsInfo2.map((el) => (
          <div className="card-container" key={el.id}>
            <div className="card-img-container">
              <img
                src={el.img}
                alt={el.img + el.id}
                className={`img`}
                style={{
                  background: el.color,
                }}
              />
            </div>
            <p className="card-container-r-title">{el.title}</p>
            <p className="card-container-r-subtitle">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const Service = () => {
  return (
    <div className="service-parent-container">
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
