import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';

const dst = 'lib';
const includes = [
  '.gitignore',
  '.npmignore',
  'LICENSE',
  'package.json',
  'yarn.lock',
];

function copyToDemo ()
{
  function copy (src: string, dst: string, current: string)
  {
    const srcPath = path.join(src, current);
    const dstPath = path.join(dst, current);

    if (fs.lstatSync(srcPath).isDirectory())
    {
      fs.mkdirSync(dstPath);

      const files = fs.readdirSync(srcPath);

      for (const file of files)
      {
        copy(src, dst, path.join(current, file));  
      }
    }
    else
    {
      fs.copyFileSync(srcPath, dstPath);
    }
  }

  const to = 'demo/src/core';

  rimraf.sync(to);
  copy ('lib', to, '');
}

function includeFiles ()
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

copyToDemo();
includeFiles();
removeScripts();