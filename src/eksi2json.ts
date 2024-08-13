import fs from 'fs';
import xml2js from 'xml2js';

class Eksi2Json {
  private output: string;
  private input: string;
  constructor(input: string, output: string) {
    this.input = input;
    this.output = output;
  }
  async convert() {
    try {
      if (!fs.existsSync(this.input)) {
        console.error('yedek dosyasi bulunamadi ki...');
        process.exit(1);
      }
      if (this.input.split('.').pop() !== 'xml') {
        console.error('yedek dosyasinin formati ne ya oyle? xml olmali...');
        process.exit(1);
      }
      if (this.output.split('.').pop() !== 'json') {
        console.error('cikti dosyasi json formatinda olmali...');
        process.exit(1);
      }
      const parser = new xml2js.Parser({
        explicitArray: false,
        mergeAttrs: true,
        explicitRoot: false,
      });
      const result = await parser.parseStringPromise(
        fs.readFileSync(this.input, { encoding: 'utf-8', flag: 'r' }),
      );
      fs.writeFileSync(this.output, JSON.stringify(result, null, 2));
    } catch (error) {
      console.error(`bir hata olustu... hata da $u: ${error}`);
      process.exit(1);
    }
  }
}

export { Eksi2Json };
