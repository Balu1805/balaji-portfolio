import { useEffect } from "react";

function Cursor() {

  useEffect(() => {

    const cursor = document.querySelector(".cursor");
    const ring = document.querySelector(".cursor-ring");

    const moveCursor = (e) => {

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-ring"></div>
    </>
  );
}

export default Cursor;