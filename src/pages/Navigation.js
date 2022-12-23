
import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.scss';
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => { 

    return (          

        <div className="siteBody">
        <header className="header">
        <img id="headerLogo" src={logo}/>
            <div id="headerWrap">
                <div id="socialIcons" className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faGithub} className="fontIcon"/>
                    <FontAwesomeIcon icon={faLinkedin} className="fontIcon"/>
                </div>
                <nav className="navList">
                    <li className="navListTabs"><Link to="/">Home</Link></li>
                    <li className="navListTabs"><Link to="/About">About</Link></li>
                    <li className="navListTabs"><Link to="/Projects">Projects</Link></li>
                    <li className="navListTabs"><Link to="/Contact">Contact</Link></li>
                    <li className="navListTabs"><Link to="/Resume">Resume</Link></li>
                </nav>
                <div id="email">
                    <a href="mailto:benfuller@fullerview.net">benfuller@fullerview.net</a>
                </div>
            </div>
        </header>
        <div className="siteWrapper">
        <Outlet />
        </div>
        </div>

      )
  };
  export default Navigation;
  