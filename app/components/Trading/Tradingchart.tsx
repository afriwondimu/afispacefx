// TradingViewWidget.jsx
'use client';
// TradingViewWidget.tsx
import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create and append the external script for the TradingView widget
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "height": "700",
        "symbol": "OANDA:XAUUSD",
        "interval": "D",
        "timezone": "America/New_York",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "hide_top_toolbar": true,
        "allow_symbol_change": true,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;

    if (container.current) {
      container.current.appendChild(script);
    }

    // Cleanup function to remove the script if the component unmounts
    return () => {
      if (container.current) {
        container.current.innerHTML = ''; // Remove the script from the container
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {/* The TradingView widget will be appended here */}
    </div>
  );
};

export default memo(TradingViewWidget);

