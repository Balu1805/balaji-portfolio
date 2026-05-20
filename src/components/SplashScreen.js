//import tingSound from "../assets/sounds/ting_main.mp3";

import { useEffect, useState } from "react";

function SplashScreen() {

  const [hide, setHide] = useState(false);

  useEffect(() => {

    const enterSite = () => {

      /* PLAY SOUND */

      // const audio = new Audio(tingSound);
      // audio.volume = 0.5;

      // audio.play();

      /* HIDE SPLASH */

      setHide(true);

      /* REMOVE EVENT */

      window.removeEventListener(
        "click",
        enterSite
      );

    };

    window.addEventListener(
      "click",
      enterSite
    );

    return () => {

      window.removeEventListener(
        "click",
        enterSite
      );

    };

  }, []);

  return (

    <div className={`splash ${hide ? "hidden" : ""}`}>

      <div className="splash-glow"></div>

      <h1 className="splash-title">

        GANDHAM SAI BALAJI

      </h1>

      <p className="splash-sub">

        AI • CLOUD • FULL STACK

      </p>

      <div className="splash-enter">

        ✦ CLICK ANYWHERE TO ENTER ✦

      </div>

    </div>
  );
}

export default SplashScreen;