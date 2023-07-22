import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const plainFormat = (mainTree) => {
  const iter = (tree, name = '') => {
    const result = tree.flatMap((node) => {
      const keys = [...name, node.name];
      switch (node.state) {
        case 'added':
          return `Property '${keys.join('.')}' was added with value: ${stringify(node.value)}`;
        case 'deleted':
          return `Property '${keys.join('.')}' was removed`;
        case 'unchanged':
          return null;
        case 'changed':
          return `Property '${keys.join('.')}' was updated. From ${stringify(node.value.oldValue)} to ${stringify(node.value.newValue)}`;
        case 'nodes':
          return iter(node.children, keys);
        default:
          throw new Error(`This type does not exist: ${node.state}`);
      }
    });
    return result.filter((item) => item !== null).join('\n');
  };
  return iter(mainTree, []);
};

export default plainFormat;
