// Object2VRViewer.js
import React, { useEffect, useRef } from 'react';

const Object2VRViewer = ({ object2vrPath }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically load the Object2VR script
    const script = document.createElement('script');
    script.src = `${object2vrPath}/object2vr_player.js`; 
    script.async = true;

    script.onload = () => {
      // Initialize Object2VR player once the script is loaded
      if (window.object2vrPlayer) {
        window.object2vrPlayer({
          id: containerRef.current.id,
          swf: `${object2vrPath}/object2vr_player.swf`, // Path to SWF if needed (for older browsers)
          xml: `${object2vrPath}/object2vr_out.xml`, // Path to Object2VR configuration XML
          width: '100%',
          height: '500px' 
        });
      }
    };

    containerRef.current.appendChild(script);

    // Cleanup: Remove the script and player when the component unmounts
    return () => {
      if (window.object2vrPlayer) {
        // You might need to implement a destroy method or handle player lifecycle
      }
      containerRef.current.removeChild(script);
    };
  }, [object2vrPath]);

  return <div id="object2vr-container" ref={containerRef}></div>;
};

export default Object2VRViewer;
