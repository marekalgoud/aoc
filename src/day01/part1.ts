import { input } from '../utils';

const tab = input.split('\r\n').map(i => i.split('   ').map(Number))
const col1 = tab.map(i => i[0]).sort((a, b) => a-b)
const col2 = tab.map(i => i[1]).sort((a, b) => a-b)

let solution = 0;
for(let i = 0; i < tab.length; i++) {
    solution += Math.abs(col1[i] - col2[i])
}

export default solution;