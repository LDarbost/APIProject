import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <ul>
            <li><a href="/about">Read More</a></li>
            <li><a href="/about">Sustainability</a></li>
            <li><a href="/about">Values</a></li>
            <li><a href="/about">Investments</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/Styling">UI Development</a></li>
              <li><a href="/services/Projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3> <ul>
                <li>
            <a href="/contact">Instagram</a></li>
            <li><a href="/contact">LinkedIn</a></li>
            <li><a href="/contact">Facebook</a></li></ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
                <li>
            <a href="/policy">Legal Policy</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/conditions">Terms and Conditions</a></li></ul>
          
           
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WeatherAPI. All rights reserved - Louis Darbost</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;