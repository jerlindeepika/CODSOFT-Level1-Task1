import React, { useState, useEffect } from 'react';
import '../Css/Introduction.css';
import my from '../Assets/my.JPG';

const Introduction = () => {
  const [text, setText] = useState('');
  const introText =
    "Salutations! I'm <strong class='fw-bold'>Jerlin Deepika</strong>, the web virtuoso and coding maestro. Conjuring digital realms with flair and finesse. 💻✨";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + introText[index]);
      index++;

      if (index === introText.length) {
        clearInterval(typingInterval);
        setText(introText);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="nono-container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="nono-display-heading">👽 Welcome to My Portfolio..</h1>
          <p className="nono-lead-text mt-4" dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={my}
            alt="Profile"
            className="nono-profile-image rounded-circle" // Add rounded-circle class for a circular image
            style={{ width: '250px', height: '250px',  }} // Adjust width and height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
