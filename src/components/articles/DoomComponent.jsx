// ArticleDoom.jsx
import React, { useEffect, useRef } from "react";

export default function DoomComponent() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadScript = () => {
      if (window.Dos) {
        window.Dos(containerRef.current, {
          wdosboxUrl: "https://js-dos.com/cdn/wdosbox.js",
        }).ready((fs, main) => {
          fs.extract("/games/doom.zip").then(() => {
            main(["-c", "doom"]);
          });
        });
      }
    };

    if (!window.Dos) {
      const script = document.createElement("script");
      script.src = "https://js-dos.com/cdn/js-dos-api.js";
      script.onload = loadScript;
      document.body.appendChild(script);
    } else {
      loadScript();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "800px", height: "600px", margin: "0 auto" }}
    />
  );
}
