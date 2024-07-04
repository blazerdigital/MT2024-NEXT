"use client";

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";
import clsx from "clsx";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { navItem: "HOME", to: "/" },
    { navItem: "EPISODES", to: "/allepisodes" },
    { navItem: "SUPPORT", to: "/support" },
    { navItem: "CONTACT", to: "/contact" },
    { navItem: "MERCH", to: "/merch" },
  ];

  const socialLinks = [
    {
      logo: "/images/youtube.png",
      link: "#",
    },
    {
      logo: "/images/rumble.png",
      link: "#",
    },
    {
      logo: "/images/odysee.png",
      link: "#",
    },
  ];

  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}>
      <header className={[classes.header, "container"].join(" ")}>
        <Link href="/" className={[classes.navItem, classes.logoContainer].join(" ")}>
          <img src="/images/logo.svg" alt="#" className={classes.logo} />
        </Link>
        <div className={[classes.navItems, sidebar && classes.sidebar].join(" ")}>
          {navItems.map((el, i) => (
            <Link key={i} href={el.to} className={classes.navItem} onClick={() => setSidebar(false)}>
              {el.navItem}
            </Link>
          ))}
          <div className={clsx(classes.socialContainer, classes.socialContainerMobile)}>
            {socialLinks.map((social, i) => (
              <a href={social.link} target="_blank" rel="noreferrer" key={i}>
                <img src={social.logo} alt="#" className={classes.socialLogo} />
              </a>
            ))}
          </div>
          <IoMdClose className={clsx(classes.icon, classes.closeIcon)} onClick={() => setSidebar(false)} />
        </div>
        <div className={classes.socialContainer}>
          {socialLinks.map((social, i) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={i}>
              <img src={social.logo} alt="#" className={classes.socialLogo} />
            </a>
          ))}
        </div>
        <div className={classes.buttonContainer}>
          {sidebar ? (
            <IoMdClose className={classes.icon} onClick={() => setSidebar(false)} />
          ) : (
            <AiOutlineAlignRight className={classes.icon} onClick={() => setSidebar(true)} />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
