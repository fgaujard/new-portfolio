import { useEffect, useRef } from "react";

import Spline from "@splinetool/react-spline";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const gsapScrollTextBlock = useRef(null);
  const gsapCallToScroll = useRef(null);
  const gsapScrollBackground = useRef(null);

  useEffect(() => {
    gsap.to(gsapScrollTextBlock.current, {
      opacity: 0,
      scale: 0.95,
      translateX: "-2.5rem",
      zIndex: 0,
      scrollTrigger: {
        trigger: gsapScrollTextBlock.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(gsapCallToScroll.current, {
      animation: "to_opactity_1 0.5s ease-in",
      translateX: "100vw",
      opacity: 0,
      scrollTrigger: {
        trigger: gsapCallToScroll.current,
        start: "top bottom-=15%",
        end: "bottom center-=30%",
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
    <section id="home" className="section-show">
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
          web development \ web design \ 3D & animations
        </h2>
      </div>
      <p className="homepage-scrollcall-text" ref={gsapCallToScroll}>
        ⪽ scroll down ⪾
      </p>
    </section>
  );
}

export default Home;
