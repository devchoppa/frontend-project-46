import _ from 'lodash';

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

    switch (key.state) {
      case 'unchanged':
        result += `    ${key.name}: ${key.value}`;
        break;
      case 'deleted':
        result += `  - ${key.name}: ${key.value}`;
        break;
      case 'added':
        result += `  + ${key.name}: ${key.value}`;
        break;
      case 'changed':
        result += `  - ${key.name}: ${key.value.oldValue}\n  + ${key.name}: ${key.value.newValue}`;
        break;
      default: break;
    }

    return result;
  });

  return `{\n${resultDif.join('\n')}\n}`;
};

export { getTreeObject, proccesDiff };
