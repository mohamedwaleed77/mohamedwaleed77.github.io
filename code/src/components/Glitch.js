import React, { useEffect, useRef } from "react";

const GlitchOverlay = ({width = "98%", height = "98%" }) => {
  const glitchRef = useRef(null);

  useEffect(() => {
    const glitchDiv = glitchRef.current;

    const createGlitchEffect = () => {
      const randomSlice = () => Math.random() * 100 + "%";
      const randomHeight = () => Math.random() * 10 + 2 + "px";
 
      const randomSize = () => Math.random() * 3 + 1 + "px"; // For noise dots

      // Generate glitch lines
      for (let i = 0; i < 5; i++) {
        const line = document.createElement("div");
        line.style.position = "absolute";
        line.style.width = "100%";
        line.style.marginLeft="5%"
        line.style.height = randomHeight();
        line.style.backgroundColor = "#fff";
        line.style.opacity = Math.random() * 0.5;
        line.style.top = randomSlice();
        glitchDiv.appendChild(line);

        // Remove line after animation
        setTimeout(() => glitchDiv.removeChild(line), 50);
      }

      // Generate static noise
      for (let i = 0; i < 20; i++) {
        const noise = document.createElement("div");
        noise.style.position = "absolute";
        noise.style.width = randomSize();
        noise.style.marginLeft="5%"
        noise.style.height = randomSize();
        noise.style.backgroundColor = "#fff";
        noise.style.opacity = Math.random();
        noise.style.top = randomSlice();
        noise.style.left = Math.random() * 100 + "%";
        glitchDiv.appendChild(noise);

        // Remove noise after animation
        setTimeout(() => glitchDiv.removeChild(noise), 100);
      }
    };

    const intervalId = setInterval(createGlitchEffect, 150);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={glitchRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

export default GlitchOverlay;
