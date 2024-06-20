import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'episodes', 'episodes.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const episodes = JSON.parse(fileContents);

  const latestEpisodes = episodes.filter(episode => episode.isLatest).slice(0, 3);

  res.status(200).json(latestEpisodes);
}
