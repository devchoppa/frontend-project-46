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

const getTreeObject = (obj1, obj2) => {
  const keysSorted = _.sortBy(Object.keys({ ...obj1, ...obj2 }));

  const treeObject = keysSorted.map((key) => {
    if (!_.has(obj1, key)) return { state: 'added', name: key, value: obj2[key] };
    if (!_.has(obj2, key)) return { state: 'deleted', name: key, value: obj1[key] };
    if (obj1[key] !== obj2[key]) {
      return { state: 'changed', name: key, value: { oldValue: obj1[key], newValue: obj2[key] } };
    }
    return { state: 'unchanged', name: key, value: obj2[key] };
  });
  return treeObject;
};

const proccesDiff = (object) => {
  const resultDif = object.map((key) => {
    let result = '';
    if (key.state === 'unchanged') {
      result += `    ${key.name}: ${key.value}\n`;
    } else if (key.state === 'deleted') {
      result += `  - ${key.name}: ${key.value}\n`;
    } else if (key.state === 'added') {
      result += `  + ${key.name}: ${key.value}\n`;
    } else if (key.state === 'changed') {
      result += `  - ${key.name}: ${key.value.oldValue}\n  + ${key.name}: ${key.value.newValue}\n`;
    }
    return result;
  });
  return `\n{ \n${resultDif.join('')}}\n`;
};

const gendiff = (filepath1, filepath2) => {
  const obj1 = JSON.parse(readFile(filepath1));
  const obj2 = JSON.parse(readFile(filepath2));
  const treeObject = getTreeObject(obj1, obj2);
  const diff = proccesDiff(treeObject);

  return diff;
};

export default gendiff;
