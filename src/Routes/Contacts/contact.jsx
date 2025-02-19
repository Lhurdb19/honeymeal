import React from 'react';
import ImageSample from "../../Assets/chicken.jpeg";
import './Contact.css'
import Reservation from '../Reservation/reservation';
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaWhatsapp, FaTwitter } from "react-icons/fa";


function Contact() {
  return (
    <>
    <div className="image-contact">
      <img src={ImageSample} alt="" />
      <div className="contact-text">
        <h1>Welcome To Honey meal The Steakhouse</h1>
        {/* <br /><br /><br /><br /> */}
        <h2>Get In Touch</h2>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <Reservation/>
      </div>
    </div>

    <div className='contact-component'>
      
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <span>
          <IoMdTime className='icon'/> <h2>Hours of operation</h2>
          </span>
          <ul>
            <li><h4>Monday</h4> <h5>4 – 9:30 pm</h5></li>
            <li><h4>Tuesday</h4> <h5>4 – 9:30 pm</h5></li>
            <li><h4>Wednesday</h4> <h5>4 – 9:30 pm</h5></li>
            <li><h4>Thursday</h4> <h5>4 – 9:30 pm</h5></li>
            <li><h4>Friday</h4> <h5>4 – 10:00 pm</h5></li>
            <li><h4>Saturday</h4> <h5>4 – 10:00pm</h5></li>
            <li><h4>Sunday</h4> <h5>3 – 8:30pm</h5></li>
          </ul>
          <span>
            <a href="tel//:2347011560069">
          <FaPhoneAlt className='icons'/>
            <h5>701 1560 069</h5></a>
          </span>
            <span>
            <FaLocationDot className='icons' />
            <h5>440 Main St, Little Falls, NJ 07424</h5>
            </span>
          <div className="link-handle">
            <a href=""><FaFacebookF /></a>
            <a href=""><FaWhatsapp /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTelegramPlane /></a>
          </div>
        </div>
        <div className="message-box">
        <h1>Contact Us</h1>
          <form>
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email Address' required />
            <input type="tel" placeholder='Phone' required />
            <input type="text" placeholder='Type of Event' required />
            <input type="date" placeholder='Date of Event' required />
            <input type="text" placeholder='Where did you hear about us' required />
            <textarea name="text" >Message</textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6032.67235572675!2d-54.242778!3d.88644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c301c00c7e62ab%3A0x388e2e212456ac6e!2sRare%2C%20The%20Steak%20House!5e0!3m2!1sen!2sus!4v1739909954637!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Contact
