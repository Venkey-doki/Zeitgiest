import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <h4>Location</h4>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.9330191150007!2d82.23882537381867!3d16.97784471447676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382841f6c85e87%3A0xc6eb0bb930e1903a!2sCSE%20department%20-%20Jawaharlal%20Nehru%20Technological%20University%2C%20Kakinada!5e0!3m2!1sen!2sin!4v1736849712141!5m2!1sen!2sin" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none hover-gray">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none hover-gray">About</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none hover-gray">Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none hover-gray">Contact</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h4>Contact Us</h4>
            <p><a href="mailto:zeitgeist2k25@gmail.com" className="text-white text-decoration-none hover-gray">Email: zeitgeist2k25@gmail.com</a></p>
            <p>D.BHARGAV - 8317504292</p>
            <p>T.VIVEK - 7799002247</p>
            <p>B.LIKITH - 7569801239</p>
            <p>S.MANJUNADH - 8143224017</p>
            <p>B.NAVANEENTHA - 7989425914</p>
            <p>K.SATYA ESWARI - 701690151</p>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h4>Follow Us</h4>
            <ul className="list-unstyled social-media">
              <li><a href="https://www.facebook.com" target="_blank" className="text-white text-decoration-none hover-gray"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="https://x.com/zeitgeist_2k25?s=11" target="_blank" className="text-white text-decoration-none hover-gray"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="https://www.instagram.com/zeitgeist_2k25?igsh=cXJ6cTgwaGVjcGtq" target="_blank" className="text-white text-decoration-none hover-gray"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Zeitgeist</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
