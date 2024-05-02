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

  return (
    <header className="app_navbar">
      <div className="navbar-menu__left">
        <a
          href="Home"
          className="navbar-menu__link "
          onMouseEnter={playHoverSound}
        >
          HOME
        </a>
        <a
          href="Home"
          className="navbar-menu__link "
          onMouseEnter={playHoverSound}
        >
          PROJECTS
        </a>
        <a
          href="Home"
          className="navbar-menu__link "
          onMouseEnter={playHoverSound}
        >
          SKILLS
        </a>
        <a
          href="Home"
          className="navbar-menu__link "
          onMouseEnter={playHoverSound}
        >
          TRAINING
        </a>
      </div>

      <div className="navbar-menu__right">
        <MusicButton />

        <SfxButton sfx={sfx} setSfx={setSfx} />

        <a
          href="Home"
          className="navbar-contact__link"
          onMouseEnter={playHoverSound}
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}

export default Navbar;
