import {render} from '../render.js';

import SectionFilmsView from '../view/section-films-view.js';
import SectionFilmsListView from '../view/section-films-list-view.js';
import MovieCardView from '../view/movie-card-view.js';
import TopRatedFilmsView from '../view/top-rated-films-view.js';
import MostCommentedFilmsView from '../view/most-commented-films-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';


export default class FilmsPresenter {
  sectionFilms;
  sectionFilmsList;

  constructor (){
    this.sectionFilms = new SectionFilmsView();
    this.sectionFilmsList = new SectionFilmsListView();
  }

  init = (mainElement) => {
    render(this.sectionFilms, mainElement);
    render(this.sectionFilmsList, this.sectionFilms.getElement());
    const movieCardsContainer = this.sectionFilmsList.getElement().querySelector('div');

    for(let i=0; i<5; i++)
    {
      render(new MovieCardView(), movieCardsContainer);
    }
    render(new ShowMoreButtonView(), this.sectionFilmsList.getElement());

    render(new TopRatedFilmsView(), this.sectionFilms.getElement());
    render(new MostCommentedFilmsView(), this.sectionFilms.getElement());

  };
}
