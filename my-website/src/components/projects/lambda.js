import React from 'react';

const Lambda = () => {
  return (
    <div id = "entry">
        <img src="../assets/room4.png" alt="Screenshot of a level of Project Lambda" width="450" height="274"/>
        <p id = "input">Project Lambda. Made with Unity Game Engine and C#.</p>
        <button id="myBtn2" className = "learnMore">learn more</button>
                
        <div id="myModal2" className="modal">
            <div className="modal-content">
                <p>This game was created by Minseo Kim, Akash Deo, and David Park for CS 377 Game Developtment Studio. 
                    We created a 2D top-down shooter and bullet hell game in the Unity Game Engine using C# from scratch in 10 weeks.
                    We designed and incorporated 4 levels, real-time enemy search algorithms, hitbox coroutines, interactive
                    GUI, movement/upgrade controls, various sprites, and music to create cohesive cyberpunk-analog
                    aesthetic as per a formal MDA framework. Over the 10 weeks of developtment, we had biweekly playtesting with 56 regular play testers.
                    <br/>
                    <br/>
                    <a href = "https://github.com/minsharky/projectlambda" target="_blank" rel="noreferrer">Check out the github repo for this project.</a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Lambda;
{/* 
<div className = "secondGif">
                <iframe src="https://giphy.com/embed/1MStuCyDEAi2c5LyTE" width="450" height="274" frameBorder="0" className="giphy-embed" allowFullScreen alt = "PacMan gameplay"></iframe>
                <p>PacMan remake game. Made with Unity Game Engine and C#.</p>
                <button id="myBtn" className = "learnMore">learn more</button>

                <div id="myModal" className="modal">

                    <div className="modal-content">
                    <p>This project was made as an assignment for my CS 376 Game Design and Development className. 
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