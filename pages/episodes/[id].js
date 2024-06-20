"use client"; // Add this line at the top
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation'; // Use useParams instead of useRouter
import { Heading, Text, Wrapper } from '@/components/common';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import classes from './SingleEpisode.module.css';
import '../../src/app/globals.css'; // Correct path to globals.css

import Navbar from '@/components/Navbar/Navbar'; // Adjust the import path if necessary
import Footer from '@/components/Footer/Footer'; // Adjust the import path if necessary

const ResponsivePlayer = dynamic(
  () => import('@/components/PlayVideo/PlayVideo'), // Adjust the import path if necessary
  { ssr: false }
);

const SingleEpisode = () => {
  const params = useParams(); // Get the URL parameters
  const id = params?.id; // Safely access the 'id' parameter
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchEpisode = async () => {
        try {
          const response = await fetch(`/episodes/${id}.json`);
          if (response.ok) {
            const data = await response.json();
            console.log('Fetched episode data:', data); // Debugging log
            setEpisode(data);
          } else {
            console.error('Failed to fetch episode:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching episode:', error);
        }
      };
      fetchEpisode();
    }
  }, [id]);

  if (!episode) return <div>Loading...</div>;

  console.log('Episode title:', episode.title); // Debugging log

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
