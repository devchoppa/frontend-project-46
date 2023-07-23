import fs from 'fs';
import path from 'path';
import buildTree from './filediff.js';
import selectFormat from './formatters/index.js';
import parse from './parser.js';

const getAbsPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsPath(filepath), 'utf-8');
const getFormat = (filepath) => path.extname(filepath).slice(1);

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const readContent1 = readFile(filepath1);
  const readContent2 = readFile(filepath2);
  const data1 = parse(readContent1, getFormat(filepath1));
  const data2 = parse(readContent2, getFormat(filepath2));
  const treeObject = buildTree(data1, data2);
  return selectFormat(treeObject, format);
};

export default gendiff;
