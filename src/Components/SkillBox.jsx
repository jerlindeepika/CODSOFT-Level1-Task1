// SkillBoxPage.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import javaLogo from '../Assets/java.png'; 
import css from '../Assets/css-3.png'
import html from '../Assets/html-5.png'
import javascript from '../Assets/java-script.png'
import python from '../Assets/python.png'
import react from '../Assets/react.png'
import figma from '../Assets/figma.png'
import vscode from '../Assets/visual-studio.png'
import word from '../Assets/wordpress.png'
import my from '../Assets/icons8-mysql-logo-96.png'
import post from '../Assets/icons8-postgresql-96.png'
import mon from '../Assets/icons8-mongo-db-96.png'
import spring from '../Assets/icons8-spring-boot-96.png'
import tom from '../Assets/icons8-tomcat-96.png'

const SkillBoxPage = () => {
  const [isJavaLogoHovered, setIsJavaLogoHovered] = useState(false);
  const [isCssLogoHovered, setIsCssLogoHovered] = useState(false);
  const [isHtmlLogoHovered, setIsHtmlLogoHovered] = useState(false);
  const [isJavaScriptLogoHovered, setIsJavaScriptLogoHovered] = useState(false);
  const [isPythonLogoHovered, setIsPythonLogoHovered] = useState(false);
  const [isReactLogoHovered, setIsReactLogoHovered] = useState(false);

  const [isFigmaLogoHovered, setIsFigmaLogoHovered] = useState(false);
  const [isVsLogoHovered, setIsVsLogoHovered] = useState(false);
  const [isWordLogoHovered, setIsWordLogoHovered] = useState(false);

  const [isMyLogoHovered, setIsMyLogoHovered] = useState(false);
  const [isPostLogoHovered, setIsPostLogoHovered] = useState(false);
  const [isMonLogoHovered, setIsMonLogoHovered] = useState(false);
  const [isSpringLogoHovered, setIsSpringLogoHovered] = useState(false);
  const [isTomLogoHovered, setIsTomLogoHovered] = useState(false);


  const smallLogoStyle = {
    maxWidth: '50px', 
    height: 'auto',
    transition: 'transform 0.3s', 
  };

  const enlargeOnHover = {
    transform: 'scale(1.2)', 
  };

  const headingStyle = {
    fontFamily: '', 
    color: '#c38d9e', 
    fontSize: '1.7rem', 
  };

  const logoSpacing = {
    margin: '0 10px', 
  };

  const containerStyle = {
    borderRadius: '10px',
    height: 'auto',
    marginRight: 'auto', 
    marginLeft:'4rem'
  };

  const mediaQueryStyle = {
    '@media (max-width: 1200px)': {
      marginLeft: 'auto', 
      marginRight: 'auto', 
    },
    '@media (max-width: 992px)': {
      marginLeft: '2rem', 
    },
    '@media (max-width: 768px)': {
      marginLeft: '0',
      textAlign: 'center', 
    },
  };
  
  const styles = {
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginTop: '3rem',
      marginBottom: '6rem',
      marginLeft: '-5rem',  // Adjust the marginLeft as needed
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
    <div>
    

    <Container id='tech' fluid className="mt-5 d-flex justify-content-center align-items-center" style={{ ...containerStyle, ...mediaQueryStyle }}>
      <Row>


      <h1 className="sktitle" style={styles.title}>
      Tech
    </h1>
    
       
      <Col xs={12} md={6} className="mb-4 d-flex justify-content-center align-items-center">
          <div
            className="skill-box p-4 border rounded shadow"
          >
          
            <h2 className="mb-4 text-center" style={headingStyle}>PROGRAMMING LANGUAGES</h2>
            <div className="d-flex justify-content-around align-items-center">

              <img
                src={javaLogo}
                alt="Java Logo"
                style={{
                  ...smallLogoStyle,
                  ...(isJavaLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsJavaLogoHovered(true)}
                onMouseLeave={() => setIsJavaLogoHovered(false)}
              />
             
             <img
                src={css}
                alt="Css Logo"
                style={{
                  ...smallLogoStyle,
                  ...(isCssLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsCssLogoHovered(true)}
                onMouseLeave={() => setIsCssLogoHovered(false)}
              />

              <img
                src={html}
                alt={"Css Logo"}
                style={{
                  ...smallLogoStyle,
                  ...(isHtmlLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                  
                }}
                onMouseEnter={() => setIsHtmlLogoHovered(true)}
                onMouseLeave={() => setIsHtmlLogoHovered(false)}
              />

              <img
                src={javascript}
                alt="Css Logo"
                style={{
                  ...smallLogoStyle,
                  ...(isJavaScriptLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsJavaScriptLogoHovered(true)}
                onMouseLeave={() =>setIsJavaScriptLogoHovered(false)}
              />

              <img
                src={python}
                alt="Css Logo"
                style={{
                  ...smallLogoStyle,
                  ...(isPythonLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsPythonLogoHovered(true)}
                onMouseLeave={() => setIsPythonLogoHovered(false)}
              />

              <img
                src={react}
                alt="Css Logo"
                style={{
                  ...smallLogoStyle,
                  ...(isReactLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsReactLogoHovered(true)}
                onMouseLeave={() => setIsReactLogoHovered(false)}
              />

            </div>
          </div>
        </Col>

        <Col xs={12} md={4} className="mb-1 d-flex justify-content-center align-items-center">
          <div
            className="skill-box p-4 border rounded shadow"
          >
            <h2 className="mb-4 text-center" style={headingStyle}>SOFTWARE DEVELOPING TOOLS</h2>
            <div className="d-flex justify-content-around align-items-center">

               <img
                src={figma}
                alt="React Logo 2"
                style={{
                  ...smallLogoStyle,
                  ...(isFigmaLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsFigmaLogoHovered(true)}
                onMouseLeave={() => setIsFigmaLogoHovered(false)}
              />

              <img
                src={vscode}
                alt="React Logo 2"
                style={{
                  ...smallLogoStyle,
                  ...(isVsLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsVsLogoHovered(true)}
                onMouseLeave={() => setIsVsLogoHovered(false)}
              />

              
              <img
                src={word}
                alt="React Logo 2"
                style={{
                  ...smallLogoStyle,
                  ...(isWordLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsWordLogoHovered(true)}
                onMouseLeave={() => setIsWordLogoHovered(false)}
              />

              

            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="mb-4 d-flex justify-content-center align-items-center">
          <div
            className="skill-box p-4 border rounded shadow"
          >
            <h2 className="mb-4 text-center" style={headingStyle}>BACKEND</h2>
            <div className="d-flex justify-content-around align-items-center">

               <img
                src={my}
                alt="React Logo 2"
                style={{
                  ...smallLogoStyle,
                  ...(isMyLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsMyLogoHovered(true)}
                onMouseLeave={() => setIsMyLogoHovered(false)}
              />

              <img
                src={post}
                alt="React Logo 2"
                style={{
                  ...smallLogoStyle,
                  ...(isPostLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsPostLogoHovered(true)}
                onMouseLeave={() => setIsPostLogoHovered(false)}
              />

              
              <img
                src={mon}
                alt="React Logo 2"
                style={{
                  ...smallLogoStyle,
                  ...(isMonLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsMonLogoHovered(true)}
                onMouseLeave={() => setIsMonLogoHovered(false)}
              />

              <img
                src={spring}
                alt="React Logo 2"
                style={{
                  ...smallLogoStyle,
                  ...(isSpringLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsSpringLogoHovered(true)}
                onMouseLeave={() => setIsSpringLogoHovered(false)}
              />

              <img
                src={tom}
                alt="React Logo 2"
                style={{
                  ...smallLogoStyle,
                  ...(isTomLogoHovered && enlargeOnHover),
                  ...logoSpacing,
                }}
                onMouseEnter={() => setIsTomLogoHovered(true)}
                onMouseLeave={() => setIsTomLogoHovered(false)}
              />

              

            </div>
          </div>
        </Col>
      </Row>
      
    </Container>
    <p className="m-3 p-2 text-black" style={{ marginTop: '10rem', textAlign: 'left' , width:'100%'}}>
    
</p>

    </div>
  );
};

export default SkillBoxPage;
