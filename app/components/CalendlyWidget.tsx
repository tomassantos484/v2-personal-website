'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

function CalendlyWidgetInner() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showWidget) return null;

  return (
    <>
      <style jsx global>{`
        .calendly-badge-widget {
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.5s ease !important;
          opacity: 0;
          animation: fadeIn 0.5s ease forwards 0.2s;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        .calendly-badge-widget:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
        }

        .calendly-badge-widget .calendly-badge-content {
          border-radius: 8px !important;
          transition: background-color 0.2s ease !important;
          font-size: 14px !important;
          padding: 8px 12px !important;
        }

        @media (min-width: 768px) {
          .calendly-badge-widget .calendly-badge-content {
            font-size: 16px !important;
            padding: 12px 16px !important;
          }
        }

        .calendly-badge-widget:hover .calendly-badge-content {
          background-color: #FFE44D !important;
        }
      `}</style>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-expect-error: Calendly is added to window by external script
          if (window.Calendly) {
            // @ts-expect-error: Calendly is loaded via external script
            window.Calendly.initBadgeWidget({
              url: 'https://calendly.com/tomassantos484/30min',
              text: 'Schedule time with me!',
              color: '#FFD700',
              textColor: '#ffffff',
              branding: undefined
            });
          }
        }}
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
}

// Export as a dynamic component with SSR disabled
import dynamic from 'next/dynamic';
export default dynamic(() => Promise.resolve(CalendlyWidgetInner), { ssr: false }); 