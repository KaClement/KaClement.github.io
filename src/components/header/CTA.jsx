import React from 'react'
import CV from '../../assets/cv.pdf'
import { BsLinkedin } from 'react-icons/bs'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>CV</a>
        <a className = 'btn logo'href="https://linkedin.com" target="blank"> <BsLinkedin /></a>
    </div>
  )
}

export default CTA