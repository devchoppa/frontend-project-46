import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('test1 json', () => {
  const fileDiff = gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
  const expectedFile = 'expected1.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});

test('test2 yaml', () => {
  const fileDiff = gendiff('./__fixtures__/filepath1.yml', './__fixtures__/filepath2.yml');
  const expectedFile = 'expected1.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});

test('test3 stylish', () => {
  const fileDiff = gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'stylish');
  const expectedFile = 'expected1.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});

test('test4 stylish', () => {
  const fileDiff = gendiff('./__fixtures__/filepath1.yml', './__fixtures__/filepath2.yml', 'stylish');
  const expectedFile = 'expected1.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});

test('test5 plain', () => {
  const fileDiff = gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain');
  const expectedFile = 'expected2.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});

test('test6 plain', () => {
  const fileDiff = gendiff('./__fixtures__/filepath1.yml', './__fixtures__/filepath2.yml', 'plain');
  const expectedFile = 'expected2.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});

test('test7 json', () => {
  const fileDiff = gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json');
  const expectedFile = 'expected3.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});

test('test8 json', () => {
  const fileDiff = gendiff('./__fixtures__/filepath1.yml', './__fixtures__/filepath2.yml', 'json');
  const expectedFile = 'expected3.txt';
  expect(fileDiff).toEqual(readContent(expectedFile));
});
