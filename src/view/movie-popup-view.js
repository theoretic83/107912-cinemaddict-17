import {createElement} from '../render.js';

const getMoviePopupTemplate = ()=>{};

export default class MoviePopupView {
  getTemplate() {
    return getMoviePopupTemplate();
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
