import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { id } = req.query;
  const filePath = path.join(process.cwd(), 'public', 'episodes', `${id}.json`);

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const episode = JSON.parse(fileContents);
    res.status(200).json(episode);
  } else {
    res.status(404).json({ message: 'Episode not found' });
  }
}
