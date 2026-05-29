import { useEffect, useState } from "react";

function SplashScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const enterSite = () => {
      setHide(true);
      window.removeEventListener("click", enterSite);
      window.removeEventListener("keydown", enterSite);
    };

    window.addEventListener("click", enterSite);
    window.addEventListener("keydown", enterSite);

    return () => {
      window.removeEventListener("click", enterSite);
      window.removeEventListener("keydown", enterSite);
    };
  }, []);

  return (
    <div className={`splash ${hide ? "hidden" : ""}`}>
      <div className="splash-glow"></div>
      <h1 className="splash-title">GANDHAM SAI BALAJI</h1>
      <p className="splash-sub">AI ・ CLOUD ・ FULL STACK</p>
      <div className="splash-enter">✦ CLICK ANYWHERE TO ENTER ✦</div>
    </div>
  );
}

export default SplashScreen;
