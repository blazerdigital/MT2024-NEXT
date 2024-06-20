"use client";

import React from "react";
import classes from "../src/app/globals.css"; // Ensure this file exists
import Wrapper from "@/components/common/Wrapper/Wrapper"; // Import the Wrapper correctly
import HeroSection from "../src/components/Home/HeroSection/HeroSection";
import PlayNow from "../src/components/Home/PlayNow/PlayNow";
import LatestEpisodes from "../src/components/Home/LatestEpisodes/LatestEpisodes";

const HomePage = () => {
  return (
      <Wrapper className={classes.wrapper}>
        <HeroSection />
        <PlayNow />
        <LatestEpisodes />
      </Wrapper>
  );
};

export default HomePage;
