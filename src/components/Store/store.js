import React, { useEffect } from 'react';

const EcwidStore = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.ecwid.com/script.js?66578708&data_platform=code&data_date=2024-07-04';
    script.async = true;
    script.charset = 'utf-8';
    script.onload = () => {
      window.xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-66578708");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="my-store-66578708"></div>
    </div>
  );
};

export default EcwidStore;
