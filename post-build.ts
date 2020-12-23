import fs from 'fs';
import path from 'path';

const dst = 'lib';
const includes = [
  '.gitignore',
  '.npmignore',
  'LICENSE',
  'package.json',
  'yarn.lock',
];

function copies ()
{
  for (const include of includes)
  {
    fs.copyFileSync(include, path.join(dst, include));
  }
}

function removeScripts ()
{
  const file = path.join(dst, 'package.json');
  const data = JSON.parse(fs.readFileSync(file).toString('utf8'));

  delete data.scripts;

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

copies();
removeScripts();