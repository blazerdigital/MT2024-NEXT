"use client";

import React from "react";
import classes from "../src/components/Store/Store.module.css"; // Ensure this file exists
import EcwidStore from "@/components/Store/store";

const MerchPage = () => {
  return (
    <div className={classes.merchPage}>
      <div className={classes.storeWrapper}>
        <EcwidStore />
      </div>
    </div>
  );
};

export default MerchPage;
