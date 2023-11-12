import React, { useRef } from 'react';

const FullScreenComponent = () => {
  const containerRef:any = useRef(null);

  const requestFullScreen = () => {
    const container:any = containerRef.current;

    if (container) {
      // Check if the Fullscreen API is supported
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        // For Safari on iOS, use a user-triggered event to request fullscreen
        container.addEventListener('click', handleSafariFullScreenRequest);
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    }
  };

  // Event handler for Safari on iOS
  const handleSafariFullScreenRequest = () => {
    const container:any = containerRef.current;

    if (container) {
      container.removeEventListener('click', handleSafariFullScreenRequest);
      container.webkitRequestFullscreen();
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
