import fs from 'fs';

interface Pkg {
  version: string;
}

type Type = 'major' | 'minor' | 'patch';

const type = process.argv[2] as Type | undefined;

const file = 'package.json';
const data: Pkg = JSON.parse(fs.readFileSync(file).toString('utf8'));

const versions: string[] = data.version.split('.');

if (type === 'major')
{
  versions[0] = (parseInt(versions[0], 10) + 1).toString(10);
  versions[1] = '0';
  versions[2] = '0';
}
else if (type === 'minor')
{
  versions[1] = (parseInt(versions[1], 10) + 1).toString(10);
  versions[2] = '0';
}
else
{
  versions[2] = (parseInt(versions[2], 10) + 1).toString(10);
}

const curr = data.version;
const next = versions.join('.');

data.version = next;

fs.writeFileSync(file, JSON.stringify(data, null, 2));

console.log(`v${curr} -> v${next}`);