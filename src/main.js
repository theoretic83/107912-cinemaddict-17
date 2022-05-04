import {render} from './render.js';
import UserProfileView from './view/user-profile-view.js';
import FiltersView from './view/filter-view.js';
import SortButtonsView from './view/sort-buttons-view.js';

import SectionFilmsView from './view/section-films-view.js';
import SectionFilmsListView from './view/section-films-list-view.js';
import MovieCardView from './view/movie-card-view.js';
import TopRatedFilmsView from './view/top-rated-films-view.js';
import MostCommentedFilmsView from './view/most-commented-films-view.js';

import ShowMoreButtonView from './view/show-more-button-view.js';
import FilmCountLabelView from './view/films-count-label.js';


const headerElement = document.querySelector('header');
render(new UserProfileView(), headerElement);

const mainElement = document.querySelector('main');
render(new FiltersView(), mainElement);
render(new SortButtonsView(), mainElement);

const sectionFilms = new SectionFilmsView();
render(sectionFilms, mainElement);

const sectionFilmsList = new SectionFilmsListView();
render(sectionFilmsList, sectionFilms.element);

for(let i=0; i<5; i++)
{
  render(new MovieCardView(), sectionFilmsList.element.querySelector('div'));
}

render(new ShowMoreButtonView(), sectionFilmsList.element);
render(new TopRatedFilmsView(), sectionFilms.element);
render(new MostCommentedFilmsView(), sectionFilms.element);


render(new FilmCountLabelView(), document.querySelector('.footer__statistics'));
