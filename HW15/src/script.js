/** І М П О Р Т У Є М О **/
import HWs from '../mvs/html.js';
import HW1 from '../mvs/01.js';
import HW2 from '../mvs/02.js';
import HW3 from '../mvs/03.js';

/** В И К Л И К А Є М О   Ф У Н К Ц І Ї   Т А   В И В О Д И М О   Н А   С Т О Р І Н К У **/
HWs[1].innerHTML += `<p>${HW1()}</p>`;
HWs[2].children[6].addEventListener('click', () => HW2());
HWs[3].children[5].addEventListener('click', () => HW3());