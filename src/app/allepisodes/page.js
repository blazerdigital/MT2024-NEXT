"use client";

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
          console.log('Fetched episodes:', data);
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

  console.log('Episodes state:', episodes);

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
            <Link href={`/episodes/${episode.id}`} key={episode.id} passHref>
              <div className={classes.episode}>
                <img src={episode.img} alt={episode.info} className={classes.img} />
                <Text highlight xl textCenter className={classes.text}>
                  {episode.info}
                </Text>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllEpisodes;
