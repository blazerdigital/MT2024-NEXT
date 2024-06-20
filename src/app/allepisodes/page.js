"use client"; // Add this line at the top

import React, { useEffect, useState } from "react";
import classes from "./AllEpisodes.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import clsx from "clsx";
import Link from "next/link";

const AllEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch("/episodes/episodes.json");
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched episodes:', data); // Debugging log
          setEpisodes(data);
        } else {
          console.error('Failed to fetch episodes:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };
    fetchEpisodes();
  }, []);

  console.log('Episodes state:', episodes); // Debugging log

  if (episodes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <Heading xl5 highlight>
          All Episodes
        </Heading>

        <div className={classes.episodes}>
          {episodes.map((episode) => (
            <Link href={`/episodes/${episode.id}`} className={classes.episode} key={episode.id}>
              <img src={episode.img} alt={episode.info} className={classes.img} />
              <Text highlight xl textCenter className={classes.text}>
                {episode.info}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllEpisodes;
