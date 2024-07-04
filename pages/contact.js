"use client";

import React from "react";
import classes from "../src/components/Home/ContactUs/ContactUs.module.css"; // Ensure this file exists
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import EcwidStore from "@/components/Store/store";

const ContactPage = () => {
  return (
    <div>
    <ContactUs />
    <EcwidStore />
    </div>
  );
};

export default ContactPage;
