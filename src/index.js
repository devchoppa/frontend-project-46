import fs from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import format from './formatters/index.js';
import parse from './parser.js';

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(fullPath).toString();
  return parse(data, path.extname(filepath).slice(1));
};

const gendiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const tree = buildTree(data1, data2);
  return format(tree, outputFormat);
};

export default gendiff;
