#!/usr/bin/env node

import { Eksi2Json } from '../eksi2json';
import { Command } from 'commander';

const app = new Command();

app
  .name('eksi2json')
  .version('0.0.2')
  .description("eksi sozluk yedeklerinizi json'a cevirmeye yarayan hede.")
  .option('-i, --input <path>', 'yedek dosyasi (xml formatinda)')
  .option('-o, --output <path>', 'cikti dosyasi (json formatinda)')
  .parse(process.argv);

const options = {
  input: app.opts().input as string,
  output: app.opts().output as string,
};

if (!options.input || !options.output) {
  app.help();
}

const eksi2json = new Eksi2Json(options.input, options.output);

eksi2json
  .convert()
  .then(() => {
    console.log('tamamdir bu i$...');
  })
  .catch((error) => {
    console.error(`bir hata olustu... hata da $u: ${error}`);
    process.exit(1);
  });
