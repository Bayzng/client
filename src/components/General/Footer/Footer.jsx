import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {

  const date = new Date();
  const Year = date.getFullYear()
   
  return (
    <div className='Footer'>
      <div>
        <h2>payGifty</h2>
      </div>
      <div className='--Footer-Content'>
        <div className='--Footer-Details'>
          <p>Welcome to PayGifty, where innovation meets convenience! As a leading <br /> platform, we specialize in creating gift cards and facilitating crypto payments, <br /> delivering exceptional products and services tailored to your needs.</p>
          <div className='--Footer-Icons'>
            <p><FaFacebook  size={20} color='blue'/></p>
            <p><RiTwitterXFill size={20}/></p>
            <p><FaInstagram size={20} color='red'/></p>
            <p><FaLinkedin size={20} color='blue'/></p>
          </div>
        </div>
        <div className='--Footer-Care'>
          <h3>Customer Care</h3>
          <p>Help Center</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className='--Footer-Pages'>
          <h3>Pages</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Services</p>
          <p>Blogs</p>
        </div>
      </div>
      <hr />
      <div className='Footer-Last'>
        <h4>&copy; {Year} payGifty. All right reserved</h4>
      </div>
    </div>
  )
}

export default Footer