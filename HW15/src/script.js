/** І М П О Р Т У Є М О **/
import HWs from '../mvs/html.js';
import HW1 from '../mvs/01.js';
import HW2 from '../mvs/02.js';
import HW3 from '../mvs/03.js';
import HW4 from '../mvs/04.js';
import HW5 from '../mvs/05.js';
import HW6 from '../mvs/06.js';
import HW7 from '../mvs/07.js';
import HW8 from '../mvs/08.js';
import HW9 from '../mvs/09.js';


/** В И К Л И К А Є М О   Ф У Н К Ц І Ї   Т А   В И В О Д И М О   Н А   С Т О Р І Н К У **/
HWs[1].innerHTML += `<p>${HW1()}</p>`;
HWs[2].children[6].addEventListener('click', () => HW2());
HWs[3].children[5].addEventListener('click', () => HW3());
HWs[4].children[7].addEventListener('click', () => HW4());
HWs[5].children[8].addEventListener('click', () => HW5());
HWs[6].children[8].addEventListener('click', () => HW6());
HWs[7].children[4].addEventListener('click', () => HW7());
HWs[8].children[10].addEventListener('click', () => HW8());
HW9();