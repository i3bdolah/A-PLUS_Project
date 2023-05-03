import React from 'react'
import cir from '../assets/backgrounds/project-cir.png'
import rec from '../assets/backgrounds/project-rec.png'
import people from '../assets/people/project-people.jpg'
import play from '../assets/icons/project-play.png'

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-container_img">
        {/* <img src={people} alt="" /> */}
        <div>
          <img
            src={play}
            alt="play icon"
            className="project-container_img_play_icon"
          />
          <img
            src={cir}
            alt="bg circle"
            className="project-container_img_bg_cir"
          />
        </div>
      </div>

      <div className="abdullah">
        <img
          src={rec}
          alt="rectangle icon"
          className="project-container_text_bg_rec"
        />
        <div className="project-container_text">
          <p className="project-container_text_title">
            Great Digital Product Agency since 2016{' '}
          </p>
          <p className="project-container_text_subtitle">
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project
