import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readContent('expectedStylish.txt');
const expectedPlain = readContent('expectedPlain.txt');
const expectedJson = readContent('expectedJson.txt');

const testFormats = ['json', 'yml'];
describe('gendiff', () => {
  test.each(testFormats)('%s', (format) => {
    const filepath1 = getFixturePath(`filepath1.${format}`);
    const filepath2 = getFixturePath(`filepath2.${format}`);
    expect(gendiff(filepath1, filepath2)).toEqual(expectedStylish);
    expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(filepath1, filepath2, 'json')).toEqual(expectedJson);
  });
});
