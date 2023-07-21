import path from 'path';
import fs from 'fs';

const readFile = (filepath) => {
  const pathFile = path.resolve(process.cwd(), filepath);
  return fs.readFileSync((pathFile), 'utf-8');
};

export default readFile;
