## eksi2json

ekşi sözlük yedeklerinizi json'a çevirmeye yarayan hede.

### cli tool kullanım

1. projeyi klonlayın

```sh
git clone https://github.com/onurravli/eksi2json/
```

2. projenin dizinine gidin

```sh
cd eksi2json
```

3. gerekli bağımlılıkları yükleyin

```sh
npm install
```

4. projeyi build edin

```sh
npm run build
```

5. cli tool'u kullanın

```sh
node dist/bin/index.js --help
```

### modül kullanımı

#### es6

```ts
import { Eksi2Json } from 'eksi2json';

const eksi2json = new Eksi2Json(
  'path/to/eksi-sozluk-yedek.xml',
  'path/to/output.json',
);

const main = async () => {
  await eksi2json.convert();
};

main();
```

#### commonjs

```js
const { Eksi2Json } = require('eksi2json');

const eksi2json = new Eksi2Json(
  'path/to/eksi-sozluk-yedek.xml',
  'path/to/output.json',
);

const main = async () => {
  await eksi2json.convert();
};

main();
```

### lisans

mit lisansı.
