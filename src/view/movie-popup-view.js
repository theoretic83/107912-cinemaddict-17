import {createElement} from '../render.js';
import {humanizeDate, convertMinutesToHours} from '../utils.js';

const getNewCommentDiv = ()=>(`<div class="film-details__new-comment">
<div class="film-details__add-emoji-label"></div>

<label class="film-details__comment-label">
  <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
</label>

<div class="film-details__emoji-list">
  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
  <label class="film-details__emoji-label" for="emoji-smile">
    <img src="./images/emoji/smile.png" alt="emoji" width="30" height="30">
  </label>

  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
  <label class="film-details__emoji-label" for="emoji-sleeping">
    <img src="./images/emoji/sleeping.png" alt="emoji" width="30" height="30">
  </label>

  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
  <label class="film-details__emoji-label" for="emoji-puke">
    <img src="./images/emoji/puke.png" alt="emoji" width="30" height="30">
  </label>

  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
  <label class="film-details__emoji-label" for="emoji-angry">
    <img src="./images/emoji/angry.png" alt="emoji" width="30" height="30">
  </label>
</div>
</div>`);

const getMovieCommentsTemplate = (commentsIDs) =>{
  const commentsCount = commentsIDs.length;
  /*
  if(commentsCount){
    const comments = loadComments(commentsIDs);
  }
  */
  const commentsSection = `<section class="film-details__comments-wrap">
  <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>

  <ul class="film-details__comments-list"></ul>
  ${getNewCommentDiv()}
  </section>`;

  return commentsSection;
};

const getMoviePopupTemplate = (movie)=>{
  const {filmInfo, comments} = movie;

  const genreWord = `Genre${(filmInfo.genre.length > 1) ? 's': ''}`;

  const formatGenres = filmInfo.genre.map((genre, index, array) => (array[index] = `<span class="film-details__genre">${genre}</span>`)).join('');


  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${filmInfo.poster}" alt="">

          <p class="film-details__age">${filmInfo.ageRating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${filmInfo.title}</h3>
              <p class="film-details__title-original">Original: ${filmInfo.alternativeTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${filmInfo.totalRating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tbody><tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${filmInfo.director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${filmInfo.writers.join(', ')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${filmInfo.actors.join(', ')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${humanizeDate(filmInfo.release.date)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${convertMinutesToHours(filmInfo.runtime)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${filmInfo.release.releaseCountry}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genreWord}</td>
              <td class="film-details__cell">${formatGenres}</td>
            </tr>
          </tbody></table>

          <p class="film-details__film-description">${filmInfo.description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>

    <div class="film-details__bottom-container">
      ${getMovieCommentsTemplate(comments)}
    </div>
  </form>
</section>`;
};

export default class MoviePopupView {
  #element;

  constructor (movie){
    this.movieInfo = movie;
  }

  getTemplate() {
    return getMoviePopupTemplate(this.movieInfo);
  }

  getElement() {
    if (!this.#element) {
      this.#element = createElement(this.getTemplate());

      document.body.addEventListener('keydown', onPressEscape);
      document.body.classList.add('hide-overflow');

      this.#element.querySelector('.film-details__close-btn').addEventListener('click',()=>{
        document.body.removeEventListener('keydown', onPressEscape);
        document.body.classList.remove('hide-overflow');
        this.removeElement();
      },{once:true});
    }
    return this.#element;
  }

  removeElement(){
    this.#element.remove();
    this.#element = null;
  }

  isNullElement(){
    return this.#element;
  }
}

function onPressEscape(evt) {
  if(evt.key === 'Escape' || evt.key === 'Esc')
  {
    evt.preventDefault();
    const closeButton = document.querySelector('.film-details__close-btn');
    closeButton.click();
  }
}
