import React from 'react';
import Pdf from './resume.pdf';

const About = () => {
  return (
    <div id = "about">
      <div id = "aboutTitle">
        <p>about me</p>
        <a href={Pdf} target="_blank" rel="noreferrer"><p id = "resume">resume</p></a>
      </div>    
      <div className = "aboutText">
        <p> 
        When I was growing up, the internet was my greatest library, canvas, and playground. 
        From igloo dance parties on Club Penguin (RIP) to spending hours watching SMOSH on YouTube, 
        the endless possibilities of what could be created and shared online was what drew me into web development.
        <br/>
        <br/>
        Today, I am a Computer Science and Psychology student at Northwestern University, aspiring to create cool and beautiful things for people to enjoy.
        <br/>
        <br/>
        I have helped create numerous projects such as a 2D top-down shooter game as well as an online board game platform web app. 
        More recently, I’ve been working with the Unity game engine to make my own games and trying to find new ways I can express myself through web dev.
        <br/>
        <br/>
        Outside of work, you can find me making my own music, doing Brazilian Jiu-Jitsu, or trying to befriend every single character in Stardew Valley.
        </p>
      </div>
    </div>
  );
}

export default About;