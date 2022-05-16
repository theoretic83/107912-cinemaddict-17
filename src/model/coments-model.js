import {generateComment} from '../mock/generate-comment.js';

export default class CommentsModel {
  _comments;

  constructor (commentsCount){
    this._comments = Array.from({length: commentsCount}, generateComment);
  }

  get comments(){return this._comments;}

  getCommentsIDs(){
    return this._comments.map((comment)=>(comment.id));
  }
}
