import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div id = "banner">
        <nav class = "navbar">
            <div class="menu">
            <div class = "logo">
                <Link to="/"><img src="../assets/logo.png" alt="logo of planet around mk" width = "100px"/></Link>
            </div>
            <ul class="nav-links">
                <li><Link to="/about">about</Link></li>    
                <li><Link to="/portfolio">portfolio</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <a href="https://www.linkedin.com/in/minseo--kim/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square"></i></a>
                <a href="https://github.com/minsharky" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>
                <a href="mailto: minseo2003@gmail.com" target="_blank" rel="noreferrer"><i class="fa fa-envelope"></i></a>
                </ul>
            </div>   
        </nav>
    </div>
  );
}

export default Banner;