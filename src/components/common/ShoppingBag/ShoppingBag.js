import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const ShoppingBag = () => {

  useEffect(() => {
    // Load Ecwid script and initialize Ecwid
    const loadEcwidScript = () => {
      const script = document.createElement('script');
      script.src = 'https://app.ecwid.com/script.js?66578708&data_platform=code&data_date=2024-07-06';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);

      script.onload = () => {
        window.Ecwid.init();
      };
    };

    loadEcwidScript();

    // Cleanup function to remove the Ecwid script
    return () => {
      const script = document.querySelector('script[src="https://app.ecwid.com/script.js?66578708&data_platform=code&data_date=2024-07-06"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <div>
      <div className="ec-cart-widget"></div>
    </div>
  );
};

export default ShoppingBag;
