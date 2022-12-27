
import React from "react";
import Logo from "../images/logo.svg";
import { Outlet, Link } from "react-router-dom";
import '../App.scss';


const Navigation = () => { 

    return (          
        <div className="siteBody">
        <header className="header">
            <div id="headerWrap" className="d-flex flex-row justify-content-between align-items-center">
            <div id="logo">
                <img src={Logo} alt="logo"></img>
            </div>
                <nav className="navList">
                    <li className="navListTabs"><Link to="/">Home</Link></li>
                    <li className="navListTabs"><Link to="/About">About</Link></li>
                    <li className="navListTabs"><Link to="/Projects">Projects</Link></li>
                    <li className="navListTabs"><Link to="/Contact">Contact</Link></li>
                    <li className="navListTabs"><Link to="/Resume">Resume</Link></li>
                </nav>
            </div>
        </header>
        <div className="siteWrapper">
        <Outlet />
        </div>
        </div>

      )
  };
  export default Navigation;
  