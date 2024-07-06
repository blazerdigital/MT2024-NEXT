import React, { useState, useEffect } from "react";
import classes from "../src/components/Store/Store.module.css"; // Ensure this file exists
import EcwidStore from "@/components/Store/store";
import { useRouter } from 'next/router'; // Import useRouter hook

const MerchPage = () => {
  const router = useRouter();
  const [key, setKey] = useState(0); // Ensure state for key

  // Function to change key and trigger reload
  const reloadWidget = () => setKey(key + 1);

  // Listen for route changes and trigger reloadWidget on merch page load
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/merch') {
        reloadWidget();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <div>
      <div className={classes.merchPage}>
        <div className={classes.storeWrapper}>
          <EcwidStore key={key} reloadWidget={reloadWidget} />
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
