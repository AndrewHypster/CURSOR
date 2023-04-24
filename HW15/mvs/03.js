import HWs from './html.js'

HWs[3].innerHTML += `<input type="char" value="Введіть букву"><br><input type="text" value="Введіть слово"><p>Рахує скільки таких букв є в слові.</p><button>Sends</button>`
const input1 = HWs[3].children[1],
      input2 = HWs[3].children[3];

function HW3 () {
    const char = input1.value,
          word = input2.value;
    let wordLower = word.toLowerCase();
    let charLower = char.toLowerCase();
    let numberMatches = 0;
    for (let i = 0; i < word.length; i++) {
        let indexChar = wordLower.charAt(i);
        if (indexChar == charLower)
            numberMatches++;
    }
    HWs[3].innerHTML += `В слові '${word}' є ${numberMatches} букви '${char}'.`;
}
export default HW3;