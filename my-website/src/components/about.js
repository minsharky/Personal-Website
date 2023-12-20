import React from 'react';

const About = () => {
  return (
    <div id = "about">
        <div class = "aboutHeading">
          <div id = "aboutTitle">
            <p>about me</p>
            <a href="https://drive.google.com/file/d/1v3NKsXqODXJ_nJjxMePoy4xuE_-xM29N/view?usp=sharing" target="_blank" rel="noreferrer"><p id = "resume">resume</p></a>
          </div>     
          <div class = "aboutText">
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
      </div>
  );
}

export default About;