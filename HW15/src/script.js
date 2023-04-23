/** І М П О Р Т У Є М О **/
import HWs from '../mvs/html.js'
import finalInformation from '../mvs/01.js';
import hw2 from '../mvs/02.js';

/** С Т В О Р Ю Є М О   К О Ж Н І Й   Р О Б О Т І   С В І Й   Д І В **/
console.log(HWs);

/** В И К Л И К А Є М О   Ф У Н К Ц І Ї   Т А   В И В О Д И М О   Н А   С Т О Р І Н К У **/
HWs[1].innerHTML += `<p>${finalInformation()}</p>`;

/** Ш У К А Є М О   Д Е Я К І   Е Л Е М Е Н Т И **/
const sendBtn = document.querySelector('#firstbtn');

