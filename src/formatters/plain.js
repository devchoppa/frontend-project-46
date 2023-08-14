import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};
const iter = (tree, key = []) => {
  const result = tree.map((node) => {
    const keys = [...key, `${node.key}`];
    const pathName = keys.join('.');
    switch (node.type) {
      case 'added':
        return `Property '${pathName}' was added with value: ${stringify(node.value2)}`;
      case 'deleted':
        return `Property '${pathName}' was removed`;
      case 'unchanged':
        return null;
      case 'changed':
        return `Property '${pathName}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      case 'nodes':
        return iter(node.children, [pathName]);
      default:
        throw new Error(`This type does not exist: ${node.type}`);
    }
  });
  return result.filter(Boolean).join('\n');
};

const getFormatPlain = (tree) => iter(tree, []);

export default getFormatPlain;
