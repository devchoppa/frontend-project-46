import stylishFormat from './stylish.js';
import plainFormat from './plain.js';
import jsonFormat from './json.js';

const format = (tree, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return stylishFormat(tree);
    case 'plain':
      return plainFormat(tree);
    case 'json':
      return jsonFormat(tree);
    default: throw new Error(`Unknown format:${outputFormat}`);
  }
};

export default format;
