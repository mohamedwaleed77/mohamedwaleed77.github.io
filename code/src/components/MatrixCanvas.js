import React, { useEffect, useRef } from 'react';

const MatrixCanvas = () => {
  const canvasRef = useRef(null); // Reference to the canvas element

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set initial canvas size to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters for the Matrix effect
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    
    // Array to store the drop position for each column
    let drops = Array(columns).fill(1);
    
    // Function to generate a dynamic color based on time
    const getColor = () => {
      const time = Date.now();
      const red = Math.floor(128 + 127 * Math.sin(time * 0.001));
      const green = Math.floor(128 + 127 * Math.sin(time * 0.001 + 2));
      const blue = Math.floor(128 + 127 * Math.sin(time * 0.001 + 4));
      return `rgb(${red}, ${green}, ${blue})`;
    };

    // Draw the matrix effect
    const drawMatrix = () => {
      // Set the background with slight opacity for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set the text font
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillStyle = getColor(); // Set dynamic color
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0; // Reset the drop to top
        }

        drops[i]++;
      }
    };

    // Continuously draw the matrix effect every 50ms
    const intervalId = setInterval(drawMatrix, 50);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default MatrixCanvas;
