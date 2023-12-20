import React from 'react';

const Portfolio = () => {
  return (
    <div id = "project">
    <div class = "projectHeading">
      <p id = "projectTitle">projects</p>
      <p id = "projectBio">some of my most recent works</p>

      <div class = "demos">
        {/* <div class = "firstGif"> 
          <img src="./Images/room4.png" alt="Screenshot of a level of Project Lambda" width="450" height="274"/>
          <p id = "input">Level of Project Lambda. Made with Unity Game Engine and C#.</p>
          <button id="myBtn2" class = "learnMore">learn more</button>
          
          <div id="myModal2" class="modal">

            <div class="modal-content">
              <p>This game was created by Minseo Kim, Akash Deo, and David Park for CS 377 Game Developtment Studio. 
                We created a 2D top-down shooter and bullet hell game in the Unity Game Engine using C# from scratch in 10 weeks.
                We designed and incorporated 4 levels, real-time enemy search algorithms, hitbox coroutines, interactive
                GUI, movement/upgrade controls, various sprites, and music to create cohesive cyberpunk-analog
                aesthetic as per a formal MDA framework. Over the 10 weeks of developtment, we had biweekly playtesting with 56 regular play testers.
                <br>
                <br>
                <a href = "https://github.com/minsharky/projectlambda" target="_blank">Check out the github repo for this project.</a>
              </p>
            </div>
          
          </div>
         </div>

         <div class = "secondGif">
          <iframe src="https://giphy.com/embed/1MStuCyDEAi2c5LyTE" width="450" height="274" frameBorder="0" class="giphy-embed" allowFullScreen alt = "PacMan gameplay"></iframe>
          <p>PacMan remake game. Made with Unity Game Engine and C#.</p>
          <button id="myBtn" class = "learnMore">learn more</button>

          <div id="myModal" class="modal">

            <div class="modal-content">
              <p>This project was made as an assignment for my CS 376 Game Design and Development class. 
                I used the Unity Game Engine and C# for the game scripts, coding player movement, enemy movement,
                and other various player mechanics such as the power-up pellets. I also designed the scene using Unity
                tools in the game engine.
                <br>
                <br>
                <a href = "https://github.com/minsharky/pacman" target="_blank">Check out my github repo for this project.</a>

              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  );
}

export default Portfolio;