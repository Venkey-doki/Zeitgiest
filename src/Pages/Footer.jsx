import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.bgDark} ${styles.textWhite} ${styles.py4}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col12} ${styles.colMd3} ${styles.mb3}`}>
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
          <div className={`${styles.col12} ${styles.colMd3} ${styles.mb3}`}>
            <h4>Quick Links</h4>
            <ul className={styles.listUnstyled}>
              <li><Link to="/" className={`${styles.textWhite} ${styles.textDecorationNone} ${styles.hoverGray}`}>Home</Link></li>
              <li><Link to="/about" className={`${styles.textWhite} ${styles.textDecorationNone} ${styles.hoverGray}`}>About</Link></li>
              <li><Link to="/services" className={`${styles.textWhite} ${styles.textDecorationNone} ${styles.hoverGray}`}>Services</Link></li>
              <li><Link to="/contact" className={`${styles.textWhite} ${styles.textDecorationNone} ${styles.hoverGray}`}>Contact</Link></li>
            </ul>
          </div>
          <div className={`${styles.col12} ${styles.colMd3} ${styles.mb3}`}>
            <h4>Contact Us</h4>
            <p><a href="mailto:zeitgeist2k25@gmail.com" className={`${styles.textWhite} ${styles.textDecorationNone} ${styles.hoverGray}`}>Email: info@zeitgeistjntukcse.com</a></p>
            <p>D.BHARGAV - 8317504292</p>
            <p>T.VIVEK - 7799002247</p>
            <p>B.LIKITH - 7569801239</p>
            <p>S.MANJUNADH - 8143224017</p>
            <p>B.NAVANEENTHA - 7989425914</p>
            <p>K.SATYA ESWARI - 701690151</p>
          </div>
          <div className={`${styles.col12} ${styles.colMd3} ${styles.mb3}`}>
            <h4>Follow Us</h4>
            <ul className={`${styles.listUnstyled} ${styles.socialMedia}`}>
              <li><a href="https://www.facebook.com" target="_blank" className={`${styles.textWhite} ${styles.textDecorationNone} ${styles.hoverGray}`} rel="noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="https://x.com/zeitgeist_2k25?s=11" target="_blank" className={`${styles.textWhite} ${styles.textDecorationNone} ${styles.hoverGray}`} rel="noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="https://www.instagram.com/zeitgeist_2k25?igsh=cXJ6cTgwaGVjcGtq" target="_blank" className={`${styles.textWhite} ${styles.textDecorationNone} ${styles.hoverGray}`} rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.col12} ${styles.textCenter}`}>
            <p>&copy; {new Date().getFullYear()} Zeitgeist</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
