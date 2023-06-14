import { promises as fs } from 'fs';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
const contentDirectory = join(process.cwd(), '_content')
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fileContents = await fs.readFile(contentDirectory + '/projects.json', 'utf8')
  res.status(200).json(fileContents);
}