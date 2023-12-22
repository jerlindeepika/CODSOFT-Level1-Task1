import React, { useState } from "react";
import Slider from "react-draggable-slider";
import { projectContent } from "./ProjectData";
import '../Css/Projects.css'

export default function App() {
  const [currentProject, setCurrentProject] = useState(0);

  const sliderSettings = {
    data: projectContent,
    speed: 1000,
    easing: "expo",
    bgColor: "#fff",
    buttonHref: "https://www.google.com",
    buttonTarget: "_self",
    buttonText: "View project",
    showButton: false,
    onDragEnd: handleDragEnd
  };

  function handleDragEnd(index) {
    const projectsPerPage = 2;
    const newCurrentProject = Math.floor(index / projectsPerPage) * projectsPerPage;
    setCurrentProject(newCurrentProject);
  }

  return (
    <div className="Appp">
      <Slider
        sliderSettings={sliderSettings}
        startIndex={currentProject} 
      />
    </div>
  );
}
