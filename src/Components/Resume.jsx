import React from 'react';
import '../Css/Resume.css';

const Resume = () => {
  const resumeLink = 'https://docs.google.com/file/d/1hJ7TsrR34RV8neurMZ7yUa8JA19bQmtg/edit?usp=docslist_api&filetype=msword';



  return (
    <div>
    <div id='resume'>
   <h1 style={{ 
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#333',
        marginTop:'20rem',
        marginBottom:'60px',
        textAlign:'center'
                }}>Resume</h1>    <div  className="button-borders">
      <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="primary-button">
        DOWNLOAD
      </a>
    </div>
    </div>
    </div>
  );
};

export default Resume;
