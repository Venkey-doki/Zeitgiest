import {React,useEffect} from 'react'
import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
export default function Header() {
      const [isDesktop, setIsDesktop] = useState(window.innerWidth > 980);
    
      useEffect(() => { 
        const handleResize = () => {
          setIsDesktop(window.innerWidth > 980);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      return (
        <div className="p-4 text-center">
            {isDesktop ? <div>
                <div class="fixed-bottom bg-dark text-white text-center p-3">
                <nav className="p-3">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="#">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Contact</Link>
        </li>
      </ul>
    </nav>
</div>
            </div> : 
            <div>
            <div class="fixed-bottom bg-dark text-white text-center p-3">
  This is a Mobile bottom div
</div>
                </div>}
        </div>
      );
}
