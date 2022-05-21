import { getRandomInt } from '../utils.js';

const POSTERS_PATH = ['images/posters/made-for-each-other.png'
  ,'images/posters/popeye-meets-sinbad.png'
  ,'images/posters/sagebrush-trail.jpg'
  ,'images/posters/santa-claus-conquers-the-martians.jpg'
  ,'images/posters/the-dance-of-life.jpg'
  ,'images/posters/the-great-flamarion.jpg '
  ,'images/posters/the-man-with-the-golden-arm.jpg'];

const filmsDescriptions = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras aliquet varius magna, non porta ligula feugiat eget. 
Fusce tristique felis at fermentum pharetra. 
Aliquam id orci ut lectus varius viverra. 
Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. 
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. 
Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. 
Sed sed nisi sed augue convallis suscipit in sed felis. 
Aliquam erat volutpat. 
Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.trim().split('\n');

const generateMovieCard = ()=>(
  {
    id: '0',
    comments: [],
    filmInfo: { //film_info
      title: 'A Little Pony Without The Carpet',
      alternativeTitle: 'Laziness Who Sold Themselves', //alternative_title
      totalRating: 5.3, //total_rating
      poster: POSTERS_PATH[getRandomInt(0,POSTERS_PATH.length-1)],
      ageRating: getRandomInt(0,18), //age_rating
      director: 'Tom Ford',
      writers: ['Takeshi Kitano'],
      actors: ['Morgan Freeman'],
      release: {
        date: '2019-05-11T00:00:00.000Z',
        releaseCountry: 'Finland' //release_country
      },
      runtime: 77,
      genre: ['Comedy'],
      description: filmsDescriptions[getRandomInt(0,filmsDescriptions.length-1)]
    },
    userDetails: { //user_details
      watchlist: false,
      alreadyWatched: true, //already_watched
      watchingDate: '2019-04-12T16:12:32.554Z', //watching_date
      favorite: false
    }
  }
);


export {generateMovieCard};
