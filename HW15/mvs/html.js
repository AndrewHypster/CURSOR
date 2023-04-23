for (let i=1; i<=13; i++) document.body.innerHTML += `<div class="${i}" id="HW"><h3>HW ${i}</h3></div>`;
const HWs = [null];
document.querySelectorAll('#HW').forEach((div) => HWs.push(div));
export default HWs;