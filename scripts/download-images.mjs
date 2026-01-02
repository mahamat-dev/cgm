import fs from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const rawDir = path.join(projectRoot, 'assets_raw');

const downloads = [
  {
    fileName: 'groundnuts.jpg',
    url: 'https://unsplash.com/photos/13lLAWadKwU/download?force=true&w=2000'
  },
  {
    fileName: 'mobile-phones-accessories.jpg',
    url: 'https://unsplash.com/photos/hycF67xvwEk/download?force=true&w=2000'
  },
  {
    fileName: 'tvs-home-appliances.jpg',
    url: 'https://unsplash.com/photos/lUbPydZVmGs/download?force=true&w=2000'
  }
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchToFile = async ({ fileName, url }) => {
  const headers = {
    'user-agent': 'cgm-assets-bot/1.0',
    accept: 'image/avif,image/webp,image/*,*/*;q=0.8'
  };

  let lastStatus = null;
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url, { headers, redirect: 'follow' });
    lastStatus = res.status;
    if (res.ok) {
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const targetPath = path.join(rawDir, fileName);
      await fs.writeFile(targetPath, buffer);
      return targetPath;
    }

    if (res.status === 429 || res.status === 503) {
      await sleep(400 * attempt);
      continue;
    }

    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
  }
  throw new Error(`Failed to download ${url}: ${lastStatus}`);
};

await fs.mkdir(rawDir, { recursive: true });

for (const item of downloads) {
  const out = await fetchToFile(item);
  console.log(`Downloaded: ${path.relative(projectRoot, out)}`);
}
