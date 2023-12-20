import React from 'react';

const Home = () => {
  return (
    <div class = "cover">
        <div class = "introduction">
            <p id = "nameHeading">Hi, I'm Minseo.</p>
            <div class="container">
                <div class = "bioHeading">Developer.</div>
                <div class = "bioHeading">Student.</div>
            </div>
            <p>Student at Northwestern University. <br/> Passionate about people, tech, and anything and everything creative.</p>
        </div>
        <div class = "introImage">
            <img src="../assets/pic.jpg" alt="Minseo" width="370"/>
        </div>
    </div>
  );
}

export default Home;