import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.jpg';

export default function Header() {
    
    return (
        <div className=" container mb-2 rounded align-items-center">
            <nav class="navbar navbar-expand-lg header container-fluid fixed-top bg-dark">
                <div class="container-fluid">
                <div className="d-flex align-items-center">
                    <img src={logo} height={70} width={70} alt="Logo" />
                    <h3 className="navbar-brand mt-2 ms-2" href="#">Zeitgeist'25</h3>
                </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ZeitGeist</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item dropdown">
                                <Link to="/events" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Events</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/technicalEvents" className="dropdown-item">Technical Events</Link></li>
                                    <li><Link to="/onlineEvents" className="dropdown-item">Oline Events</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link to="/Workshop" className="nav-link">Workshop</Link></li>
                            <li className="nav-item"><Link to="/contests" className="nav-link">Contests</Link></li>
                            <li className="nav-item"><Link to="/Accommodation" className="nav-link">Accommodation</Link></li>
                            <li className="nav-item"><Link to="/sponsors" className="nav-link">Sponsors</Link></li>
                            <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
                            <li className="nav-item"><Link to="/Team" className="nav-link">Team</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
