"use client";

import React, { useState, useEffect } from "react";
import classes from "./ContactUs.module.css";
import { Heading, Text, VideoBg, Wrapper } from "@/components/common";
import clsx from "clsx";
import Input from "@/components/common/Input/Input";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const socialLiks = [
    { logo: "/images/youtube.png", link: "#" },
    { logo: "/images/rumble.png", link: "#" },
    { logo: "/images/odysee.png", link: "#" },
  ];

  return (
    <Wrapper className={classes.mainWrapper} id="contact">
      <div id="anchor-contact" className="anchor"></div>
      <div className={clsx("container", classes.container)}>
        {/* Render the VideoBg component only on the client side */}
        {isClient && <VideoBg url="/video/UFO_BG.mp4" />}
        <Heading xl5 highlight className={classes.heading}>
          Contact
        </Heading>
      </div>

      <div className={clsx(classes.header, "container")}>
        <Text xl highlight>
          If you have an idea for the show, a business inquiry, or want to
          collaborate on a project, feel free to drop us a message!
        </Text>
        <div className={classes.socialContainer}>
          {socialLiks.map((social, i) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={i}>
              <img src={social.logo} alt="#" className={classes.logo} />
            </a>
          ))}
        </div>
      </div>
      <div className={clsx("container", classes.contactWrapper)}>
        <div className={classes.inputWrapper}>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
          />
          <textarea
            className={classes.message}
            name="message"
            id="message"
            rows="7"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={classes.button}>
          Submit
        </button>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
