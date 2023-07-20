import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';
// import readFile from '../src/readFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Diff test json', () => {
  const fileDiff = gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
  const expectedFile = 'expected1.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});
