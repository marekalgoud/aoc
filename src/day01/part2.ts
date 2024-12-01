import { input } from '../utils';

const tab = input.split('\r\n').map(i => i.split('   ').map(Number))
const col1 = tab.map(i => i[0])
const col2 = tab.map(i => i[1])

let solution = 0;
for(let i = 0; i < tab.length; i++) {
    const occ = col2.filter(j => j === col1[i]).length
    solution += col1[i] * occ
}

export default solution;