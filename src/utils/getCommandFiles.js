import { readdir } from 'fs/promises';
import path from 'path';

export default async function getCommandFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nestedFiles = await getCommandFiles(fullPath);
      files.push(...nestedFiles);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(fullPath);
    }
  }

  return files;
}
