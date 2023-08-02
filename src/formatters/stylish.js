import _ from 'lodash';

const indent = (depth) => ' '.repeat((depth * 4) - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const getKeys = keys.map((key) => `${indent(depth + 1)}  ${key}: ${stringify(value[key], depth + 1)}`);
  return `{\n${getKeys.join('\n')}\n  ${indent(depth)}}`;
};

const stylishFormat = (mainTree) => {
  const iter = (tree, depth) => tree.map((node) => {
    const createString = (value, sign) => `${indent(depth)}${sign} ${node.key}: ${stringify(value, depth)}\n`;
    switch (node.type) {
      case 'added':
        return createString(node.value2, '+');
      case 'deleted':
        return createString(node.value1, '-');
      case 'unchanged':
        return createString(node.value2, ' ');
      case 'changed':
        return `${createString(node.value1, '-')}${createString(node.value2, '+')}`;
      case 'nodes':
        return `${indent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('')}${indent(depth)}  }\n`;
      default:
        throw new Error(`This type does not exist: ${node.type}`);
    }
  });
  return `{\n${iter(mainTree, 1).join('')}}`;
};

export default stylishFormat;
