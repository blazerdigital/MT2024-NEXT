import fs from 'fs';
import path from 'path';
import React from "react";
import Head from "next/head";
import classes from "../src/app/globals.css"; // Ensure this file exists
import Wrapper from "@/components/common/Wrapper/Wrapper"; // Correct import path
import HeroSection from "../src/components/Home/HeroSection/HeroSection";
import PlayNow from "../src/components/Home/PlayNow/PlayNow";
import LatestEpisodes from "../src/components/Home/LatestEpisodes/LatestEpisodes";

const HomePage = ({ latestEpisodes }) => {
  return (
    <div>
        <Head>
        <title>Massive Theory - Official Website</title>
        <meta name="description" content="Animated stories about the past, present and future of humanity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
