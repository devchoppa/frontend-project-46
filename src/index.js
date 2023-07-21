import parserFile from './parsers.js';
import { getTreeObject, proccesDiff } from './filesDiff.js';

const gendiff = (filepath1, filepath2) => {
  const data1 = parserFile(filepath1);
  const data2 = parserFile(filepath2);
  const treeObject = getTreeObject(data1, data2);
  const diff = proccesDiff(treeObject);

  return diff;
};

export default gendiff;
