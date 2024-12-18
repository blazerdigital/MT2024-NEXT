import React from "react";
import classes from "./LatestEpisodes.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import clsx from "clsx";
import Link from "next/link";

const LatestEpisodes = ({ episodes }) => {
  return (
    <Wrapper className={classes.wrapper} id="latestepisodes">
      <div id="anchor-episodes" className="anchor"></div>
      <div className={clsx("container", classes.container)}>
        <Heading xl5 highlight className={classes.heading}>
          Latest Episodes
        </Heading>

        <div className={classes.episodes}>
          {episodes.map((episode, i) => (
            <Link href={`/episodes/${episode.id}`} className={classes.episode} key={i}>
              <img src={episode.img} alt={episode.info} className={classes.img} />
              <Text highlight xl textCenter className={classes.text}>
                {episode.info}
              </Text>
            </Link>
          ))}
        </div>
        <Link href="/allepisodes" className={classes.button}>
          View All Episodes
        </Link>
      </div>
    </Wrapper>
  );
};

export default LatestEpisodes;
