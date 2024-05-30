import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "@fortawesome/fontawesome-free/css/all.min.css"; // Importation de Font Awesome

function Skills() {
  const gsapScrollSkills = useRef(null);

  useEffect(() => {
    gsap.to(gsapScrollSkills.current, {
      opacity: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: gsapScrollSkills.current,
        start: "top center-=35%",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="skills" className="section-show app_section_skills">
      <div className="marquee" ref={gsapScrollSkills}>
        <ul>
          <li>
            <i className="fab fa-react" />
          </li>
          <li>
            <i className="fab fa-js" />
          </li>
          <li>
            <i className="fab fa-css3-alt" />
          </li>
          <li>
            <i className="fab fa-html5" />
          </li>
          <li>
            <i className="fab fa-node" />
          </li>
          <li>
            <i className="fab fa-sass" />
          </li>
          <li>
            <i className="fab fa-figma" />
          </li>
          <li>
            <i className="fab fa-npm" />
          </li>
          <li>
            <i className="fab fa-git-alt" />
          </li>
          <li>
            <i className="fab fa-github" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
