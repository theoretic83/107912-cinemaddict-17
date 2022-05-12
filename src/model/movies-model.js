import { generateMovieCard } from '../mock/generate-movie-card.js';

export default class MoviesModel {
  _movies;

  constructor (movieCount){
    this._movies = Array.from({length: movieCount}, generateMovieCard);
  }

  get movies(){return this._movies;}
}
