import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { gsap } from 'gsap';
import './Nav.css';

function Nav() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [toggle, setToggle] = useState(false); 

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(()=>{
        gsap.from('.nav__logo .nav__toggle', {opacity: 0, duration: 1, delay: 2, y:10})
        gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y:30, stagger:0.2})
        gsap.from('.home__title', {opacity:0, duration: 1, delay: 1.6, y:30, stagger: 0.2})
        gsap.from('.home__img', {opacity:0, duration: 1, delay: 1.3, y:30})
    }, [])
    

    return (
        <nav className="nav bd-grid">
            <div>
                <a href="#" className="nav__logo">QTrade</a>
            </div>

            <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>    
                <AiOutlineMenu className="ai ai-menu" />
            </div>

            <div className={toggle ? "nav__menu show" : "nav__menu"} id="nav-menu" onClick={handleToggle}>
                <div className="nav__close" id="nav-close">
                    <AiOutlineClose className="ai ai-close" />
                </div>
            
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#blog" className="nav__link">Blog</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    <li className="nav__item"><a href="#sign" className="nav__link nav__sign">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;