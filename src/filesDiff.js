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

export default getTreeObject;
