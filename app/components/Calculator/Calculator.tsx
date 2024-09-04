// src/components/PositionSizeCalculator.jsx
'use client';


import React, { useEffect, useRef } from 'react';


const PositionSizeCalculator: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and append the external script for remote widgets
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.cashbackforex.com/Content/remote/remote-widgets.js';
    script.async = true;

    // Append the script to the document
    document.body.appendChild(script);

    // Initialize the remote calculator once the script is loaded
    script.onload = () => {
      if (containerRef.current) {
        // Initialize the remote calculator widget
        (window as any).RemoteCalc({
            "Url": "https://www.cashbackforex.com",
            "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=",
            "BottomPaneStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7",
            "ButtonStyle": "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==",
            "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
            "TextboxStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7",
            "ContainerWidth": "350",
            "HighlightColor": "rgba(0,0,0,1.0)",
            "IsDisplayTitle": false,
            "IsShowChartLinks": false,
            "IsShowEmbedButton": false,
            "CompactType": "small",
            "Calculator": "position-size-calculator",
          ContainerId: 'position-size-calculator-878467',
        });
      }
    };

    // Cleanup function to remove the script if the component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="position-size-calculator-878467"
      ref={containerRef}
      className="calculator-container"
    />
  );
};

export default PositionSizeCalculator;
