import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const plainFormat = (mainTree) => {
  const iter = (tree, key = '') => {
    const result = tree.flatMap((node) => {
      const keys = [...key, node.key];
      switch (node.type) {
        case 'added':
          return `Property '${keys.join('.')}' was added with value: ${stringify(node.value2)}`;
        case 'deleted':
          return `Property '${keys.join('.')}' was removed`;
        case 'unchanged':
          return null;
        case 'changed':
          return `Property '${keys.join('.')}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
        case 'nodes':
          return iter(node.children, keys);
        default:
          throw new Error(`This type does not exist: ${node.type}`);
      }
    });
    return result.filter((item) => item !== null).join('\n');
  };
  return iter(mainTree, []);
};

export default plainFormat;
