import readFile from './readFile.js';
import getTreeObject from './filesDiff.js';
import proccesDiff from './createDiff.js';

const gendiff = (filepath1, filepath2) => {
  const obj1 = JSON.parse(readFile(filepath1));
  const obj2 = JSON.parse(readFile(filepath2));
  const treeObject = getTreeObject(obj1, obj2);
  const diff = proccesDiff(treeObject);

  return diff;
};

export default gendiff;
