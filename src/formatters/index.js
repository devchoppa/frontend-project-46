import stylishFormat from './stylish.js';
import plainFormat from './plain.js';
import jsonFormat from './json.js';

const selectFormat = (resultTree, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormat(resultTree);
    case 'plain':
      return plainFormat(resultTree);
    case 'json':
      return jsonFormat(resultTree);
    default: throw new Error(`Unknown format:${format}`);
  }
};

export default selectFormat;
