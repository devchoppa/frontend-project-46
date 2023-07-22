#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format (default "stylish")')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    console.log(gendiff(filepath1, filepath2, options.format));
  });

program.parse();
