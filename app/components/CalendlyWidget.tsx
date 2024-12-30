'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function CalendlyWidget() {
  useEffect(() => {
    const loadCalendly = () => {
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
    };

    // Try to load immediately if Calendly is already available
    loadCalendly();

    // Also set up a listener for when the script loads
    window.addEventListener('calendly:ready', loadCalendly);

    return () => window.removeEventListener('calendly:ready', loadCalendly);
  }, []);

  return (
    <>
      <style jsx global>{`
        .calendly-badge-widget {
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        }
        
        .calendly-badge-widget:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
        }

        .calendly-badge-widget .calendly-badge-content {
          border-radius: 8px !important;
          transition: background-color 0.2s ease !important;
        }

        .calendly-badge-widget:hover .calendly-badge-content {
          background-color: #FFE44D !important;
        }
      `}</style>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          const event = new Event('calendly:ready');
          window.dispatchEvent(event);
        }}
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
} 