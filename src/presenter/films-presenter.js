import {render} from '../render.js';

import SectionFilmsView from '../view/section-films-view.js';
import SectionFilmsListView from '../view/section-films-list-view.js';
import MovieCardView from '../view/movie-card-view.js';
import TopRatedFilmsView from '../view/top-rated-films-view.js';
import MostCommentedFilmsView from '../view/most-commented-films-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import MoviePopupView from '../view/movie-popup-view.js';
import MoviesModel from '../model/movies-model.js';


export default class FilmsPresenter {
  sectionFilms;
  sectionFilmsList;
  moviesModel;
  boardMovies;

  constructor (){
    this.sectionFilms = new SectionFilmsView();
    this.sectionFilmsList = new SectionFilmsListView();
    this.moviesModel = new MoviesModel(5);
    this.boardMovies = [...this.moviesModel.movies];
  }

  init = (mainElement) => {
    render(this.sectionFilms, mainElement);
    render(this.sectionFilmsList, this.sectionFilms.getElement());
    const movieCardsContainer = this.sectionFilmsList.getElement().querySelector('div');

    this.boardMovies.forEach((movie)=>{
      const movieCard = new MovieCardView(movie);
      render(movieCard, movieCardsContainer);
      movieCard.element.addEventListener('click', ()=>this.renderPopupMovieCard(movie));
    });

    render(new ShowMoreButtonView(), this.sectionFilmsList.getElement());

    render(new TopRatedFilmsView(), this.sectionFilms.getElement());
    render(new MostCommentedFilmsView(), this.sectionFilms.getElement());

  };

  renderPopupMovieCard = (movie) => {
    const moviePopupElement = new MoviePopupView(movie);
    render(moviePopupElement, document.body);
  };
}
