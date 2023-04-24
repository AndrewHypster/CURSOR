/** С Т В О Р Ю Є М О   К О Ж Н І Й   Р О Б О Т І   С В І Й   Д І В **/
for (let i=1; i<=13; i++) document.body.innerHTML += `<div class="${i}" id="HW"><h3>HW ${i}</h3></div>`;
const HWs = [null];
document.querySelectorAll('#HW').forEach((div) => HWs.push(div));

export default HWs;