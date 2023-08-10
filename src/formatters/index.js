import getFormatPlain from './plain.js';
import getFormatStylish from './stylish.js';

const format = (tree, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return getFormatStylish(tree);
    case 'plain':
      return getFormatPlain(tree);
    case 'json':
      return JSON.stringify(tree, null, 2);
    default: throw new Error(`Unknown format:${outputFormat}`);
  }
};

export default format;
