import fs from 'fs';
import path from 'path';
import React from 'react';
import Footer from '../../src/components/Footer/Footer';
import Navbar from '../../src/components/Navbar/Navbar';
import Wrapper from '../../src/components/common/Wrapper/Wrapper';
import Heading from '../../src/components/common/Heading/Heading';
import Text from '../../src/components/common/Text/Text';
import PlayVideo from '../../src/components/PlayVideo/PlayVideo';
import clsx from 'clsx';
import Pagestyles from '../../src/styles/SingleEpisode.module.css';
import classes from '../../src/app/globals.css';

const Episode = ({ episode }) => {
  if (!episode) {
    return <div>Episode not found</div>;
  }

  return (
    <>
      <Navbar />
      <Wrapper className={classes.wrapper}>
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
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const episodesDirectory = path.join(process.cwd(), 'public', 'episodes');
  const filenames = fs.readdirSync(episodesDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith('.json'))
    .map((filename) => ({
      params: { id: filename.replace(/\.json$/, '') },
    }));

  return { paths, fallback: false }; // No fallback, ensuring all paths are pre-rendered
}

export async function getStaticProps({ params }) {
  const episodesDirectory = path.join(process.cwd(), 'public', 'episodes');
  const filepath = path.join(episodesDirectory, `${params.id}.json`);

  let episode = null;

  try {
    const fileContents = fs.readFileSync(filepath, 'utf8');
    episode = JSON.parse(fileContents);
  } catch (err) {
    console.error(`Error reading episode file: ${filepath}`, err);
  }

  if (!episode) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      episode,
    },
  };
}

export default Episode;
