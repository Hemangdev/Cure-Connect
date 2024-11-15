/* eslint-disable no-unused-vars */
import React from 'react'
import logo1 from '../assets/woo.png'
import logo2 from '../assets/react.png'
import logo3 from '../assets/php.png'
import logo4 from '../assets/wordpress.png'
import logo5 from '../assets/node.png'
import logo6 from '../assets/express.png'
import logo7 from '../assets/photoshop.png'
import logo8  from '../assets/mysql.png'

const TechStacks = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  return (
    <div className="slider-container">
      <div className="slider">
        {logos.map((logo, index) => (
          <img style={{width:'100px'}} key={index} src={logo} alt={`Tech logo ${index + 1}`} />
        ))}
        {/* Duplicate logos to create a seamless loop */}
        {logos.map((logo, index) => (
          <img key={`duplicate-${index}`} src={logo} alt={`Tech logo duplicate ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default TechStacks