import parserFile from './parsers.js';
import buildTree from './filesDiff.js';
import selectFormat from './formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parserFile(filepath1);
  const data2 = parserFile(filepath2);
  const treeObject = buildTree(data1, data2);
  const diff = selectFormat(treeObject, format);

  return diff;
};

export default gendiff;
