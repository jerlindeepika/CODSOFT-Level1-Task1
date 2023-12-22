import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Css/Header.css";
import BackgroundImage from "../logo.svg";


const scrollToTop = function () {
  scroll.scrollToTop();
};

const myStyle = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "center"
};

export default function Navbar() {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (

    <section style={myStyle}>
      <header className={navBar ? "nav active" : "nav"}>
        <span class="navbar-brand" href="">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={scrollToTop}
          />
        </span>
        <center className="leftnav">
          <nav className="nav__container__actions ">
            <div>
              <ul className="navList mx-auto">
              <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="projects"
                    offset={-65}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
              <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="skills-section"
                    offset={-65}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="tech"
                    offset={-65}
                    duration={500}
                  >
                    Tech
                  </Link>
                </li>
                <li >
                <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="resume"
                    offset={-65}
                    duration={500}
                  >
                    Resume
                  </Link>
                </li>
                <li >
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="contact"
                    offset={-65}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                
              </ul>
            </div>
          </nav>
        </center>
      </header>
    </section>
  );
}
