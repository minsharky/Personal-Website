import React from 'react';

const Home = () => {
  return (
    <div id = "cover">
        <div className = "introduction">
            <p id = "nameHeading">Hi, I'm Minseo.</p>
            <div className="container">
                <div className = "bioHeading">Developer.</div>
                <div className = "bioHeading">Student.</div>
            </div>
            <p>Student at Northwestern University. <br/> Passionate about people, tech, and anything and everything creative.</p>
        </div>
        <div className = "introImage">
            <img src="../assets/pic.jpg" alt="Minseo" width="370"/>
        </div>
    </div>
  );
}

export default Home;