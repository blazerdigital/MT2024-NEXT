import React from "react";
import classes from "./PlayNow.module.css";
import clsx from "clsx";
import { Heading, Wrapper } from "@/components/common";
import dynamic from "next/dynamic";

const ResponsivePlayer = dynamic(() => import("../../PlayVideo/PlayVideo"), {
  ssr: false,
});

const PlayNow = ({ url }) => {
  return (
    <Wrapper className={classes.wrapper} id="playingnow">
      <div id="anchor-playing-now" className="anchor"></div>
      <div className={clsx("container", classes.container)}>
        <Heading className={classes.heading}>
          Playing Now
        </Heading>
        <ResponsivePlayer url="https://www.youtube.com/embed/bFFKnsNGxQg?si=-eKBuCHuzUyN4WiB" />
      </div>
    </Wrapper>
  );
};

export default PlayNow;
