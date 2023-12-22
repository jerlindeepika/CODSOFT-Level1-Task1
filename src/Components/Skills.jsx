// Skills.js
import React, { useState, useEffect } from 'react';
import '../Css/Skills.css';

const Skills = () => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const handleScroll = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      const rect = skillsSection.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsSkillsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
const styles = {
  title: {
    marginLeft:'10rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    textAlign:'center',
    marginTop:'3rem'
  },
  
  // Responsive styles
  '@media screen and (max-width: 600px)': {
    title: {
      fontSize: '1.5rem',
    },
  },
  
  '@media screen and (max-width: 400px)': {
    title: {
      fontSize: '1rem',
    },
  },
};

  return (
    <div id="skills-section" className="skills-container">
      {/* Description Container */}
      <div   className="skills-description-container">
        <p>Excels with a 90% proficiency in HTML, showcasing advanced skills in crafting structured and semantic code. 
        And my command of CSS stands at 70%, enabling the creation of visually appealing designs. 
        In JavaScript, demonstrates a moderate proficiency at 50%, while  foundation in NodeJS is emerging at 30%. 
        Where my skills span from front-end to emerging back-end development, positioning  as a versatile developer with a promising trajectory..</p>
        
      </div>
     
      {/* Skills Bar */}
      <h1 className="skills-title" style={styles.title}>
      Skills
    </h1>
    
      <div  className="gogo">

        <div className="gogo-box">
          <span className="gogo-title">HTML</span>
          <div className="gogo-bar">
            <span
              className={`gogo-per html ${isSkillsVisible ? 'fill' : ''}`}
              style={{ width: isSkillsVisible ? '90%' : '0%' }}
            >
              <span className="gogo-tooltip">90%</span>
            </span>
          </div>
        </div>

        <div className="gogo-box">
          <span className="gogo-title">CSS</span>
          <div className="gogo-bar">
            <span
              className={`gogo-per css ${isSkillsVisible ? 'fill' : ''}`}
              style={{ width: isSkillsVisible ? '70%' : '0%' }}
            >
              <span className="gogo-tooltip">70%</span>
            </span>
          </div>
        </div>

        <div className="gogo-box">
          <span className="gogo-title">JavaScript</span>
          <div className="gogo-bar">
            <span
              className={`gogo-per javascript ${isSkillsVisible ? 'fill' : ''}`}
              style={{ width: isSkillsVisible ? '50%' : '0%' }}
            >
              <span className="gogo-tooltip">50%</span>
            </span>
          </div>
        </div>

        <div className="gogo-box">
          <span className="gogo-title">NodeJS</span>
          <div className="gogo-bar">
            <span
              className={`gogo-per nodejs ${isSkillsVisible ? 'fill' : ''}`}
              style={{ width: isSkillsVisible ? '30%' : '0%' }}
            >
              <span className="gogo-tooltip">30%</span>
            </span>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Skills;
