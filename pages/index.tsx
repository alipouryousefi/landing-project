import React, { useRef } from 'react';

const FullScreenComponent = () => {
  const containerRef = useRef(null);

  const requestFullScreen = () => {
    const container = containerRef.current;

    if (container) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    }
  };

  return (
    <div ref={containerRef}>
      <button onClick={requestFullScreen}>Go Fullscreen</button>
      {/* Your content goes here */}
    </div>
  );
};

export default FullScreenComponent;
