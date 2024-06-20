"use client"; // Add this line at the top

import React, { useEffect, useState } from "react";
import classes from "./globals.css"; // Ensure this file exists
import { Heading, Text, Wrapper } from "@/components/common";
import clsx from "clsx";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import LatestEpisodes from "../components/Home/LatestEpisodes/LatestEpisodes";
import PlayNow from "../components/Home/PlayNow/PlayNow";
import SupportTheShow from "../components/Home/SupportTheShow/SupportTheShow";
import ContactUs from "../components/Home/ContactUs/ContactUs";

const HomePage = () => {
  return (
    <Wrapper className={classes.wrapper}>
        <HeroSection />
        <PlayNow />
        <LatestEpisodes />
        <SupportTheShow />
        <ContactUs />
    </Wrapper>
  );
};

export default HomePage;

