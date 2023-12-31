import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
  // let lightTheme = window.localStorage.getItem("light");
  // let lightBodyColor = `rgba(162, 208, 150, 0.6)`;
  // let lightBannerColor = `rgba(96, 139, 85, 0.6)`;

  // let darkBodyColor = `rgba(162, 208, 150, 0.6)`;
  // let darkBannerColor = `rgba(96, 139, 85, 0.6)`;

  // let changeTheme = () => {

  //   document.body.style.backgroundColor = bodyColor;

  //   lightTheme = !lightTheme;
  //   window.localStorage.setItem("light", lightTheme);
  // }

  // React.useEffect(() => {
  //   document.getElementById('banner').style.backgroundColor = theme;
  // }, [theme]);

  return (
    <div id = "banner">
        <nav className = "navbar">
            <div className="menu">
            <div className = "logo">
                <Link to="/"><img src="../assets/logo.png" alt="logo of planet around mk" width = "100px"/></Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/about">about</Link></li>    
                <li><Link to="/portfolio">portfolio</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <a href="https://www.linkedin.com/in/minseo--kim/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} id = "icon" /></a>
                <a href="https://github.com/minsharky" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} id = "icon" /></a>
                <a href="mailto: minseo2003@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} id = "icon" /></a>
                {/* <FontAwesomeIcon icon={faMoon} id = "icon" onClick={changeTheme}/> */}
                </ul>
            </div>   
        </nav>
    </div>
  );
}

export default Banner;