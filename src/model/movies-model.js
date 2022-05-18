import { generateMovieCard } from '../mock/generate-movie-card.js';

export default class MoviesModel {
  #movies;

  constructor (movieCount){
    this.#movies = Array.from({length: movieCount}, generateMovieCard);
  }

  get movies(){return this.#movies;}
}
