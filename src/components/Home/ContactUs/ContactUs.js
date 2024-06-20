"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import classes from "./ContactUs.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import VideoBg from "../../common/VideoBg/VideoBg"
import clsx from "clsx";

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwwnje");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="first-name" className={classes.label}>
        First Name
      </label>
      <input
        id="first-name"
        type="text"
        name="firstName"
        className={classes.input}
      />
      <ValidationError
        prefix="First Name"
        field="firstName"
        errors={state.errors}
        className={classes.error}
      />

      <label htmlFor="last-name" className={classes.label}>
        Last Name
      </label>
      <input
        id="last-name"
        type="text"
        name="lastName"
        className={classes.input}
      />
      <ValidationError
        prefix="Last Name"
        field="lastName"
        errors={state.errors}
        className={classes.error}
      />

      <label htmlFor="email" className={classes.label}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className={classes.input}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className={classes.error}
      />

      <label htmlFor="company" className={classes.label}>
        Company Name
      </label>
      <input
        id="company"
        type="text"
        name="company"
        className={classes.input}
      />
      <ValidationError
        prefix="Company"
        field="company"
        errors={state.errors}
        className={classes.error}
      />

      <button type="submit" disabled={state.submitting} className={classes.button}>
        Submit
      </button>
    </form>
  );
}

const ContactUs = () => {
  const socialLinks = [
    { logo: "/images/youtube.png", link: "#" },
    { logo: "/images/rumble.png", link: "#" },
    { logo: "/images/odysee.png", link: "#" },
  ];

  return (
    <Wrapper className={classes.mainWrapper} id="contact">
      <div className={clsx("container", classes.container)}>
      <VideoBg url="/video/UFO_BG.mp4" />
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
          {socialLinks.map((social, i) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={i}>
              <img src={social.logo} alt="social logo" className={classes.logo} />
            </a>
          ))}
        </div>
      </div>
      <div className={clsx("container", classes.contactWrapper)}>
        <ContactForm />
      </div>
    </Wrapper>
  );
};

export default ContactUs;
