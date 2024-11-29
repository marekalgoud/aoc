import {readFileSync} from 'fs';

const args = process.argv.slice(2);
const dayArgIndex = args.indexOf('--day');
const partArgIndex = args.indexOf('--part');

export const day = Number(args[dayArgIndex + 1] ?? 1).toString().padStart(2, '0');
export const part = Number(args[partArgIndex + 1] ?? 1);

export const input = readFileSync(`./src/day${day}/input.txt`, { encoding: 'utf-8'});
