import fs from 'fs';
import path from 'path';
import React from "react";
import classes from "../src/app/globals.css";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import HeroSection from "../src/components/Home/HeroSection/HeroSection";
import PlayNow from "../src/components/Home/PlayNow/PlayNow";
import LatestEpisodes from "../src/components/Home/LatestEpisodes/LatestEpisodes";

const HomePage = ({ latestEpisodes }) => {
  return (
    <Wrapper className={classes.wrapper}>
      <HeroSection />
      <PlayNow />
      <LatestEpisodes episodes={latestEpisodes} />
    </Wrapper>
  );
};

export async function getStaticProps() {
  const episodesDirectory = path.join(process.cwd(), 'public', 'episodes');
  const filenames = fs.readdirSync(episodesDirectory);

  const latestEpisodes = filenames
    .filter((filename) => filename.endsWith('.json'))
    .map((filename) => {
      const filepath = path.join(episodesDirectory, filename);
      const fileContents = fs.readFileSync(filepath, 'utf8');
      const episode = JSON.parse(fileContents);
      return {
        id: filename.replace(/\.json$/, ''),
        ...episode,
      };
    });

  return {
    props: {
      latestEpisodes,
    },
  };
}

export default HomePage;
