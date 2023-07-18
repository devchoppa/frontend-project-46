import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const getPath = (filepath) => {
  const procces = process.cwd();
  return path.resolve(procces, filepath);
};

const readFile = (filepath) => {
  const pathFile = getPath(filepath);
  return fs.readFileSync(pathFile, 'utf-8');
};

const gendiff = (filepath1, filepath2) => {
  const obj1 = JSON.parse(readFile(filepath1));
  const obj2 = JSON.parse(readFile(filepath2));
};

export default gendiff;
