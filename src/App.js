import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import SkillBoxPage from './Components/SkillBox';
import Introduction from './Components/Introduction';

import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <Introduction/>
        <Projects />
        <Skills />
        <SkillBoxPage/>
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
