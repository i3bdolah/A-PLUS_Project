import React from 'react'

const Nav = () => {
  return (
    <div className="nav nav_container">
      <p className="nav nav_container-title">
        <span className="nav nav_container-span">A+ </span>Studio
      </p>
      <nav className="nav nav_container-nav">
        <ul className="nav nav_container-ul">
          <li className="nav nav_container-li">
            <a className="nav_container-a" href="#Home">
              Home
            </a>
          </li>
          <li className="nav nav_container-li">
            <a className="nav_container-a" href="#What">
              What We Do
            </a>
          </li>
          <li className="nav nav_container-li">
            <a className="nav_container-a" href="#Service">
              Service
            </a>
          </li>
          <li className="nav nav_container-li">
            <a className="nav_container-a" href="#Project">
              Project
            </a>
          </li>
          <li className="nav nav_container-li">
            <a className="nav_container-a" href="#Blog">
              Blog
            </a>
          </li>
          <li className="nav nav_container-li">
            <a className="nav_container-a" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
