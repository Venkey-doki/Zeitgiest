import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/Footer.module.css';



const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <footer className={styles.footer}>
      {/* Wave Animation Top */}
 
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Map Section */}
          <div className={styles.col}>
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

          {/* Quick Links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/team">Team</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact Us</h4>
            <p><a href="mailto:info@zeitgeistjntukcse.com">info@zeitgeistjntukcse.com</a></p>
            <div className={styles.contactList}>
              <p>D.BHARGAV - 8317504292</p>
              <p>T.VIVEK - 7799002247</p>
              <p>B.LIKITH - 7569801239</p>
              <p>S.MANJUNADH - 8143224017</p>
              <p>B.NAVANEENTHA - 7989425914</p>
              <p>K.SATYA ESWARI - 701690151</p>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.col}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/share/1B67aRdxyu/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/zeitgeist-jntuk-a89868349" target="_blank" rel="noreferrer">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="https://x.com/zeitgeist_2k25" target="_blank" rel="noreferrer">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796 1.079-3.594 2.951-3.594.873 0 1.664.366 2.221.959.691-.137 1.341-.389 1.925-.733-.226.707-.705 1.298-1.332 1.672.611-.073 1.195-.234 1.742-.462-.405.607-.919 1.136-1.499 1.562z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/zeitgeist_2k25" target="_blank" rel="noreferrer">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p  >&copy; {new Date().getFullYear()} Zeitgeist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;