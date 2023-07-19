const proccesDiff = (object) => {
  const resultDif = object.map((key) => {
    let result = '';

    switch (key.state) {
      case 'unchanged':
        result += `    ${key.name}: ${key.value}\n`;
        break;
      case 'deleted':
        result += `  - ${key.name}: ${key.value}\n`;
        break;
      case 'added':
        result += `  + ${key.name}: ${key.value}\n`;
        break;
      case 'changed':
        result += `  - ${key.name}: ${key.value.oldValue}\n  + ${key.name}: ${key.value.newValue}\n`;
        break;
      default: break;
    }

    return result;
  });

  return `\n{ \n${resultDif.join('')}}\n`;
};

export default proccesDiff;
