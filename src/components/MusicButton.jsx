import { useEffect, useRef, useState } from "react";
import music from "../assets/music.mp3";

function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(music));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    if (isPlaying) {
      audio.play();
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };

    const handleBlur = () => {
      setIsPlaying(false);
    };

    const handleFocus = () => {
      setIsPlaying(true);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      audio.pause();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button className="music-button__player" onClick={togglePlay}>
      <p>music</p>
      <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center music-button__icon">
        <input
          className="hidden peer"
          type="checkbox"
          checked={!isPlaying}
          onChange={togglePlay}
        />
        <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center rotate-90 -translate-x-[0.3rem] translate-y-[0.1rem] peer-checked:translate-y-[0.1rem]" />
        <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.05rem] peer-checked:rotate-[-30deg] peer-checked:translate-y-[0.22rem] peer-checked:translate-x-[0.15rem]" />
        <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.16rem] peer-checked:rotate-[30deg] peer-checked:translate-y-[-0.4rem] peer-checked:translate-x-[0.15rem]" />
      </div>
      <audio ref={audioRef} src={music} autoPlay />
    </button>
  );
}

export default MusicButton;
