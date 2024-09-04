// TradingViewWidget.jsx
'use client'
import React, { useEffect, useRef } from 'react';

function TradingViewTickerTape() {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      // Create script element
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      });
      
      // Append script to the container
      container.current.appendChild(script);

      // Cleanup on unmount
      return () => {
        if (container.current) {
          container.current.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget"></div>

    </div>
  );
}

export default TradingViewTickerTape;

