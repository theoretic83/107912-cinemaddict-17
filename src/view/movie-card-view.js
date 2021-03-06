import {createElement} from '../render.js';
import {getYearFromDate, convertMinutesToHours} from '../utils.js';

const SHORT_DESCRIPTION_LENGTH = 140;

const getShortDescription = (descriptionString)=>{
  const description = String(descriptionString);
  if(description.length > SHORT_DESCRIPTION_LENGTH){
    return (`${description.substring(0,SHORT_DESCRIPTION_LENGTH-1)}...`);
  }
  return description;
};

const getMovieCardTemplate = (movie)=>{
  const {filmInfo, comments} = movie;
  return `<article class="film-card">  <a class="film-card__link">    <h3 class="film-card__title">${filmInfo.title}</h3>
    <p class="film-card__rating">${filmInfo.totalRating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${getYearFromDate(filmInfo.release.date)}</span> 
      <span class="film-card__duration">${convertMinutesToHours(filmInfo.runtime)}</span>
      <span class="film-card__genre">${filmInfo.genre.join(' ')}</span>
    </p>
    <img src="${filmInfo.poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${getShortDescription(filmInfo.description)}</p>
    <span class="film-card__comments">${comments.length} comments</span>
  </a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export default class MovieCardView {

  constructor (movie){
    this.movieInfo = movie;
  }

  getTemplate(){
    return getMovieCardTemplate(this.movieInfo);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
