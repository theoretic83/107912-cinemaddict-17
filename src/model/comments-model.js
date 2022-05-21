import {generateComment} from '../mock/generate-comment.js';

export default class CommentsModel {
  #comments;

  constructor (commentsCount){
    this.#comments = Array.from({length: commentsCount}, generateComment);
  }

  get comments(){return this.#comments;}

  getCommentsIDs(){
    return this.#comments.map((comment)=>(comment.id));
  }
}
