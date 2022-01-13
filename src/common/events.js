/**
 ** Created by Bingo on 2021/3/4.
 ** desc:
 **/

import EventEmitter from 'events';

class Emitter extends EventEmitter {}
const Events = new Emitter();
export default Events;
