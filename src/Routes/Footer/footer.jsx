import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";


// Partner brand logos (replace with actual image URLs)
import foodieDelight from "../../Assets/foodiesdelight.jpg";
import yummyBites from "../../Assets/yummybites.png";
import tasteHaven from "../../Assets/tastehaven.jpg";
import gourmetWorld from "../../Assets/gourmetWorld.png";
import savoryKitchen from "../../Assets/savoryKitchen.jpg";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo with Link */}
        <div className="footer-logo">
          <Link to="/" className="footer-brand">Honey Meal</Link>
          <div className="footer-social">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaWhatsapp /></a>
            <a href="#" className="social-icon"><FaTelegram /></a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-info">
          <h3>About Us</h3>
          <p>Discover and explore amazing meals with Honey Meal.</p>
        </div>

        <div className="contact">

          <h3>Contact</h3>
          <p>Address: 123 Food Street, Flavor Town</p>
          <p>
            <FaPhone className="contact-icon" />
            <a href="tel:07011560069" className="contact-link">07011560069</a>
          </p>
          <p>
            <FaEnvelope className="contact-icon" />
            <a href="mailto:hejidev19@gmail.com" className="contact-link">hejidev19@gmail.com</a>
          </p>
        </div>

        {/* Partner Brands */}
        <div className="footer-partners">
          <h3>Our Partners</h3>
          <div className="partners-list">
            <img src={foodieDelight} alt="Foodie Delight" />
            <img src={yummyBites} alt="Yummy Bites" />
            <img src={tasteHaven} alt="Taste Haven" />
            <img src={gourmetWorld} alt="Gourmet World" />
            {/* <img src={tasteHaven} alt="Taste Haven" /> */}
            <img src={savoryKitchen} alt="Savory Kitchen" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Honey Meal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
