import React from "react";
import { Text, Wrapper } from "../common";
import classes from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper className={classes.wrapper}>
      <Text base base0 textCenter className={classes.text}>
        © {currentYear} Massive Theory All Rights Reserved
      </Text>
    </Wrapper>
  );
};

export default Footer;
