// src/components/Home/SupportTheShow/SupportTheShow.js

"use client";

import React from "react";
import classes from "./SupportTheShow.module.css";
import { Heading, Text, VideoBg, Wrapper } from "@/components/common";
import clsx from "clsx";
import MailerLiteForm from "../MailerLiteForm/MailerLiteForm";

const SupportTheShow = () => {
  const helpsList = [
    "Creating New Content",
    "Illustration",
    "Animation",
    "Original Music and Licenses",
    "Website Security",
    "Exploring New Technology",
    "Making Us Platform Independent",
    "Covering Operational Expenses",
  ];

  return (
    <Wrapper className={classes.mainWrapper} id="support">
      <div id="anchor-support" className="anchor"></div>
      <div className={clsx("container", classes.container)}>
        <VideoBg url="/video/Mountain_BG.mp4" />
        <Heading xl5 highlight className={classes.heading}>
          Support the Show
        </Heading>
      </div>
      <div className={clsx(classes.subscriberContainer, "container")}>
        <div className={classes.infoContainer}>
          <Heading xl4 highlight className={classes.title}>
            Subscribe to Our Newsletter
          </Heading>

          <Text base0 xl>
            In addition to follow up on on Youtube, Rumber and Odysee. To show your support for us as content creators and help spread our
            message, subscribing to our newsletter is the best action you can
            take right now.
          </Text>
          <Text base0 xl>
            By subscribing, you'll be helping us achieve our goal of becoming
            platform-independent, allowing us to stay connected as the digital
            landscape continues to evolve.
          </Text>
          <Text base0 xl>
            Rest assured that your information will never be shared with
            third-parties, so you'll only receive updates when a new episode
            drops. Join our audience today and be a part of our journey!
          </Text>
        </div>
        <div className={classes.subscribeForm}>
          <MailerLiteForm />
        </div>
      </div>
      <div className={clsx(classes.donationInfoContainer, "container")}>
        
        <div className={classes.infoContainer}>
          <Heading xl4 highlight className={classes.title}>
            Make A Donation
          </Heading>

          <Text base0 xl>
            Making a donation is quick, secure, and effortless through either
            credit card or bank account. We appreciate your generous support.
          </Text>
          <Text base0 xl>
            Your generous support helps us to create more content, grow the
            show, and have more impact. Your donation will be used for:
          </Text>
          <ul className={classes.helpsLists}>
            {helpsList.map((list, i) => (
              <li className={classes.list} key={i}>
                <Text base0 xl>
                  {list}
                </Text>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.donationBox}>
          <iframe
            src="https://donorbox.org/embed/support-massive-theory?default_interval=o"
            name="donorbox"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            frameBorder="0"
            scrolling="no"
            height="900px"
            width="100%"
            style={{ maxWidth: "500px", minWidth: "250px", maxHeight: "none !important" }}
            allow="payment"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

export default SupportTheShow;
