import { getRandomInt } from '../utils.js';

const POSTERS_PATH = ['images/posters/made-for-each-other.png'
  ,'images/posters/popeye-meets-sinbad.png'
  ,'images/posters/sagebrush-trail.jpg'
  ,'images/posters/santa-claus-conquers-the-martians.jpg'
  ,'images/posters/the-dance-of-life.jpg'
  ,'images/posters/the-great-flamarion.jpg '
  ,'images/posters/the-man-with-the-golden-arm.jpg'];

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
      description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic Nu, Pogodi! and Alice in Wonderland, with the best fight scenes since Bruce Lee.'
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
