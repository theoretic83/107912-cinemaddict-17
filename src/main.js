import {render} from './render.js';
import UserProfileView from './view/user-profile-view.js';
import FiltersView from './view/filter-view.js';
import SortButtonsView from './view/sort-buttons-view.js';

import FilmsPresenter from './presenter/films-presenter.js';
import FilmCountLabelView from './view/films-count-label.js';

const headerElement = document.querySelector('header');
render(new UserProfileView(), headerElement);

const mainElement = document.querySelector('main');
render(new FiltersView(), mainElement);
render(new SortButtonsView(), mainElement);

const filmsPresenter = new FilmsPresenter();
filmsPresenter.init(mainElement);

render(new FilmCountLabelView(), document.querySelector('.footer__statistics'));
