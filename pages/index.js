import fs from 'fs';
import path from 'path';
import React from "react";
import classes from "../src/app/globals.css"; // Ensure this file exists
import Wrapper from "@/components/common/Wrapper/Wrapper"; // Correct import path
import HeroSection from "../src/components/Home/HeroSection/HeroSection";
import PlayNow from "../src/components/Home/PlayNow/PlayNow";
import LatestEpisodes from "../src/components/Home/LatestEpisodes/LatestEpisodes";

const HomePage = ({ latestEpisodes }) => {
  return (
    <div>
      <Wrapper className={classes.wrapper}>
        <HeroSection />
        <PlayNow />
        <LatestEpisodes episodes={latestEpisodes} />
      </Wrapper>
    </div>
  );
};

export async function getStaticProps() {
  const episodesFilePath = path.join(process.cwd(), 'public', 'episodes', 'episodes.json');
  const fileContents = fs.readFileSync(episodesFilePath, 'utf8');
  const episodes = JSON.parse(fileContents);

  // Filter and sort the episodes to get the latest ones
  const latestEpisodes = episodes
    .filter(episode => episode.isLatest)
    .slice(0, 3);

  return {
    props: {
      latestEpisodes,
    },
  };
}

export default HomePage;
