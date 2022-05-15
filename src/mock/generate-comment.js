import {getRandomInt} from '../utils.js';

const COMMENT_EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];


const generateComment = () =>(
  {
    id: getRandomInt(0,1000000),
    author: 'Ilya O\'Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2019-05-11T16:12:32.554Z',
    emotion: COMMENT_EMOTIONS[getRandomInt(0,3)]
  }
);

export {generateComment};
