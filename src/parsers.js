import yaml from 'js-yaml';
import path from 'path';
import readFile from './tools.js';

const parserFile = (filepath) => {
  const pathFile = path.resolve(process.cwd(), filepath);
  const extension = path.extname(pathFile).slice(1);
  const readingFile = readFile(filepath);

  switch (extension) {
    case 'json':
      return JSON.parse(readingFile);
    case 'yml':
      return yaml.load(readingFile);
    case 'yaml':
      return yaml.load(readingFile);
    default:
      throw new Error('unexpected format of file');
  }
};

export default parserFile;
