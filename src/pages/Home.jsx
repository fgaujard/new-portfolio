import { useEffect, useRef } from "react";

import Spline from "@splinetool/react-spline";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const gsapScrollTextBlock = useRef(null);
  const gsapScrollKeyPress = useRef(null);
  const gsapScrollBackground = useRef(null);

  useEffect(() => {
    gsap.to(gsapScrollTextBlock.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: gsapScrollTextBlock.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(gsapScrollKeyPress.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: gsapScrollKeyPress.current,
        start: "top center+=30%",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(gsapScrollBackground.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: gsapScrollBackground.current,
        start: "top",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="app_section_home" className="section-show">
      <Spline
        className="homepage-background_spline"
        scene="https://prod.spline.design/olJ-Kn3zSGvOks5f/scene.splinecode"
        ref={gsapScrollBackground}
      />

      <div className="homepage-textblock" ref={gsapScrollTextBlock}>
        <h1 className="homepage-textblock_title">
          Dive into my
          <br />
          digital playground
        </h1>
        <h2 className="homepage-textblock_subtitle">
          Web Development / Web Design / 3D & Animations
        </h2>
      </div>
      <p className="homepage-scrollcall-text" ref={gsapScrollKeyPress}>
        press escape <br /> to scroll down
      </p>
    </section>
  );
}

export default Home;
