import React, { useEffect, useRef } from 'react';

const MatrixCanvas = () => {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    let resizeTimeout;
    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;
    
    const resizeCanvas = () => {
      const oldColumns = Math.floor(canvas.width / fontSize);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = Math.floor(canvas.width / fontSize);
      
      // Preserve existing drops when resizing
      if (dropsRef.current.length === 0 || newColumns !== oldColumns) {
        const oldDrops = dropsRef.current;
        dropsRef.current = Array(newColumns).fill(1);
        
        // Copy over existing drop positions where possible
        for (let i = 0; i < Math.min(oldDrops.length, newColumns); i++) {
          dropsRef.current[i] = oldDrops[i];
        }
      }
    };

    resizeCanvas();

    // Only resize if dimensions actually changed significantly
    const handleResize = () => {
      const widthDiff = Math.abs(window.innerWidth - lastWidth);
      const heightDiff = Math.abs(window.innerHeight - lastHeight);
      
      // Ignore small height changes (mobile address bar)
      if (widthDiff < 10 && heightDiff < 100) {
        return;
      }
      
      lastWidth = window.innerWidth;
      lastHeight = window.innerHeight;
      
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    const getColor = () => {
      const time = Date.now();
      const red = Math.floor(128 + 127 * Math.sin(time * 0.001));
      const green = Math.floor(128 + 127 * Math.sin(time * 0.001 + 2));
      const blue = Math.floor(128 + 127 * Math.sin(time * 0.001 + 4));
      return `rgb(${red}, ${green}, ${blue})`;
    };

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < dropsRef.current.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillStyle = getColor();
        ctx.fillText(text, i * fontSize, dropsRef.current[i] * fontSize);

        if (dropsRef.current[i] * fontSize > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }

        dropsRef.current[i]++;
      }

      animationRef.current = requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, backgroundColor: '#000' }} />;
};

export default MatrixCanvas;