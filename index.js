const xml2js = require('xml2js');
const fs = require('node:fs');

if (process.argv.length !== 4) {
  console.error('kullanim: node index.js <yedek.xml> <cikti.json>');
  process.exit(-1);
}

const BACKUP_PATH = process.argv[2];
const OUTPUT_PATH = process.argv[3];

if (!fs.existsSync(BACKUP_PATH)) {
  console.error('yedek dosyasi bulunamadi ki...');
  process.exit(-1);
}

if (BACKUP_PATH.split('.').pop() !== 'xml') {
  console.error('yedek dosyasinin formati ne ya oyle? xml olmali...');
  process.exit(-1);
}

const backup = fs.readFileSync(BACKUP_PATH, { encoding: 'utf-8', flag: 'r' });

const parser = new xml2js.Parser({
  explicitArray: false,
  mergeAttrs: true,
  explicitRoot: false,
});

const convert = async (xml) => {
  try {
    const result = await parser.parseStringPromise(xml);
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2));
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};

convert(backup)
  .then(() => {
    console.log('tamamdir bu i$...');
  })
  .catch((err) => {
    console.error(`bir hata olustu... hata da $u: ${err}`);
    process.exit(-1);
  });
