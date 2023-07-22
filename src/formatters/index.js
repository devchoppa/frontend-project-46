import stylishFormat from './stylish.js';

const selectFormat = (resultTree, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormat(resultTree);
    default: throw new Error(`Unknown format:${format}`);
  }
};

export default selectFormat;
