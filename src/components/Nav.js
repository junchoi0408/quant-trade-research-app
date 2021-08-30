  
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { gsap } from 'gsap';
import { Link } from "react-router-dom";
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './Nav.css';

function Nav({ isLoggedIn }) {
    const useStyles = makeStyles((theme) => ({
        search: {
          position: 'relative',
          borderRadius: '24px',
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
          marginRight: theme.spacing(2),
          marginLeft: 0,
          width: '50%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
          },
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'grey',
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
    
    const [toggle, setToggle] = useState(false); 

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(()=>{
        if (isLoggedIn === false) {
            gsap.from('.nav__logo .nav__toggle', {opacity: 0, duration: 1, delay: 2, y:10})
            gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y:30, stagger:0.2})
            gsap.from('.home__title', {opacity:0, duration: 1, delay: 1.6, y:30, stagger: 0.2})
            gsap.from('.home__img', {opacity:0, duration: 1, delay: 1.3, y:30})
        }
    }, [])
    
    const classes = useStyles();

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">QTrade</a>
                </div>
                <div className={classes.search+' nav__input'}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search Quotes"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>    
                    <AiOutlineMenu className="ai ai-menu" />
                </div>

                <div className={toggle ? "nav__menu show" : "nav__menu"} id="nav-menu" onClick={handleToggle}>
                    <div className="nav__close" id="nav-close">
                        <AiOutlineClose className="ai ai-close" />
                    </div>
                {
                    isLoggedIn ? 
                    <>
                        <ul className="nav__list">
                            <li className="nav__item__signed"><Link to="/" className="nav__link">Home</Link></li>
                            <li className="nav__item__signed"><Link to="/portfolio" className="nav__link">Portfolio</Link></li>
                            <li className="nav__item__signed"><Link to="/research" className="nav__link">Research</Link></li>
                            <li className="nav__item__signed"><Link to="/profile" className="nav__link">Profile</Link></li>
                        </ul>
                    </>
                    :
                    <>
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                            <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                            <li className="nav__item"><Link to="/blog" className="nav__link">Blog</Link></li>
                            <li className="nav__item"><Link to="/contact" className="nav__link">contact</Link></li>
                            <li className="nav__item"><Link to="/auth" className="nav__link nav__sign">Sign Up</Link></li>
                        </ul>
                    </>
                }
                </div>
            </nav>
        </header>
    )
}

export default Nav;