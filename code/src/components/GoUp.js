import React from 'react';
 

export default function GoUp() {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (

      <button
        onClick={handleScrollUp}
        className="z-50 fixed text-white bg-blue-600 h-10 w-10 rounded-full bottom-14 right-4">
        UP
      </button>
    
  );
}
