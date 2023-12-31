import React from 'react';

const Contact = () => {
  return (
    <div id = "contact">
        <div className = "contactHeading">
            <p id = "contactTitle">contact me</p>
            <p id = "contactBio">so what's next?</p>
        </div>

        <div className="contactText">
            <p>Thanks for checking out my website!<br/>Feel free to reach me by email or message me on linkedin. <br/><br/>
                email: <a href="mailto: minseo2003@gmail.com">minseo2003@gmail.com</a><br/>
                linkedin: <a href = "https://www.linkedin.com/in/minseo--kim/" target="_blank" rel="noreferrer"> https://www.linkedin.com/in/minseo--kim/</a></p>
        </div>
    </div>
  );
}

export default Contact;