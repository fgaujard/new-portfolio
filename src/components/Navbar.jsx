import { useState } from "react";

import MusicButton from "./MusicButton";
import SfxButton from "./SfxButton";

import hoverSound from "../assets/hoverSound.mp3";

function Navbar() {
  const [sfx, setSfx] = useState(true);

  const playHoverSound = () => {
    if (sfx) {
      const audio = new Audio(hoverSound);
      audio.volume = 0.2;
      audio.play();
    }
  };

  const handleClick = (e, section) => {
    e.preventDefault();
    if (section === "accueil") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="app_navbar">
      <nav className="navbar-menu__left">
        <a
          href="#home"
          className="navbar-menu__link "
          onMouseEnter={playHoverSound}
          onClick={((e) => handleClick(e), "home")}
        >
          HOME
        </a>
        <a
          href="#projects"
          className="navbar-menu__link "
          onMouseEnter={playHoverSound}
          onClick={((e) => handleClick(e), "projects")}
        >
          PROJECTS
        </a>
        <a
          href="#skills"
          className="navbar-menu__link "
          onMouseEnter={playHoverSound}
          onClick={((e) => handleClick(e), "skills")}
        >
          SKILLS
        </a>
        <a
          href="#training"
          className="navbar-menu__link "
          onMouseEnter={playHoverSound}
          onClick={((e) => handleClick(e), "training")}
        >
          TRAINING
        </a>
      </nav>

      <div className="navbar-menu__right">
        <MusicButton />

        <SfxButton sfx={sfx} setSfx={setSfx} />

        <a
          href="#contact"
          className="navbar-contact__link"
          onMouseEnter={playHoverSound}
          onClick={((e) => handleClick(e), "contact")}
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}

export default Navbar;
