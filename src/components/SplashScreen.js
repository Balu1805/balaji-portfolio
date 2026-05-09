import { useEffect, useState } from "react";

import tingMain from "../assets/sounds/ting_main.mp3";

function SplashScreen() {

  const [hide, setHide] = useState(false);

  useEffect(() => {

    const audio = new Audio(tingMain);

    const playAudio = () => {

      audio.volume = 0.4;

      audio.play().catch(() => {});

      window.removeEventListener(
        "click",
        playAudio
      );

    };

    window.addEventListener(
      "click",
      playAudio
    );

    const timer = setTimeout(() => {

      setHide(true);

    }, 4000);

    return () => {

      clearTimeout(timer);

      window.removeEventListener(
        "click",
        playAudio
      );

    };

  }, []);

  return (

    <div className={`splash ${hide ? "hidden" : ""}`}>

      <div className="splash-title">
        Gandham Sai Balaji
      </div>

      <div className="splash-sub">
        ガンダム・サイ・バラジ
      </div>

      <div
        style={{
          marginTop:"25px",
          fontSize:"14px",
          letterSpacing:"4px",
          opacity:"0.7"
        }}
      >
        CLICK ANYWHERE
      </div>

    </div>

  );
}

export default SplashScreen;