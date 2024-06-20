"use client";

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Heading from '../../src/components/common/Heading/Heading';
import Text from '../../src/components/common/Text/Text';
import PlayVideo from '../../src/components/PlayVideo/PlayVideo';
import clsx from 'clsx';
import Pagestyles from '../../src/styles/SingleEpisode.module.css';
import Wrapper from '../../src/components/common/Wrapper/Wrapper';
import classes from '../../src/app/globals.css'; // Ensure this file exists


export default function Episode() {
  const router = useRouter();
  const { id } = router.query;
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      console.log('Fetching episode for id:', id); // Debug log
      fetch(`/api/${id}`) // Fetch from the API endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Fetched episode data:', data); // Debug log
          setEpisode(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching episode:', error);
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!episode) {
    return <div>Episode not found</div>;
  }

  return (
    <><Wrapper className={classes.wrapper}>
        <div className={clsx('container', Pagestyles.container)}>
          <Heading className={Pagestyles.heading}>
            {episode.title}
          </Heading>
          <p className={Pagestyles.publishDate}>
            Published on: {new Date(episode.publishDate).toLocaleDateString()}
          </p>
          <PlayVideo url={episode.videoUrl} />
          <button className={clsx(Pagestyles.button, Pagestyles.transcript)}>
            TRANSCRIPT
          </button>
          <Text>{episode.transcript}</Text>
          {episode.content.map((paragraph, index) => (
            <Text key={index} xl2 base0>{paragraph}</Text>
          ))}
          <button className={clsx(Pagestyles.button, Pagestyles.citations)}>
            CITATIONS
          </button>
          <div className={Pagestyles.linkContainer}>
            {episode.citations.map((citation, index) => (
              <a
                key={index}
                className={Pagestyles.link}
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
    </>
  );
}
