"use client";
import React from 'react';
import { useRouter } from 'next/router';
import { Heading, Text, Wrapper } from '@/components/common';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import classes from './SingleEpisode.module.css';
import '../../globals.css'; // Correct path to globals.css

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const ResponsivePlayer = dynamic(
  () => import('@/components/PlayVideo/PlayVideo'),
  { ssr: false }
);

export async function generateStaticParams() {
  const response = await fetch('https://api.example.com/episodes');
  const episodes = await response.json();

  return episodes.map(episode => ({
    id: episode.id.toString(),
  }));
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://api.example.com/episodes/${params.id}`);
  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const episode = await response.json();

  return {
    props: {
      episode,
    },
  };
}

const SingleEpisode = ({ episode }) => {
  return (
    <>
      <Navbar />
      <Wrapper className={classes.wrapper}>
        <div className={clsx('container', classes.container)}>
          <Heading className={classes.heading}>
            {episode.title}
          </Heading>
          <p className={classes.publishDate}>
            Published on: {new Date(episode.publishDate).toLocaleDateString()}
          </p>
          <ResponsivePlayer url={episode.videoUrl} />
          <button className={clsx(classes.button, classes.transcript)}>
            TRANSCRIPT
          </button>
          <Text>{episode.transcript}</Text>
          {episode.content.map((paragraph, index) => (
            <Text key={index} xl2 base0>{paragraph}</Text>
          ))}
          <button className={clsx(classes.button, classes.citations)}>
            CITATIONS
          </button>
          <div className={classes.linkContainer}>
            {episode.citations.map((citation, index) => (
              <a
                key={index}
                className={classes.link}
                href={citation.url}
                target="_blank"
                rel="noreferrer"
              >
                {citation.text}
              </a>
            ))}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default SingleEpisode;
