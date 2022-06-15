import dayjs from 'dayjs';

const getRandomInt = (min, max)=>{
  const diff = max-min;
  return min + Math.round(Math.random() * diff);
};


const getYearFromDate = (date) => dayjs(date).format('YYYY');
const humanizeDate = (date) => dayjs(date).format('DD MMMM YYYY');

const convertMinutesToHours = (minutes) => {
  const restMinutes = (minutes % 60);
  return `${(minutes-restMinutes)/60}h ${restMinutes}m`;
};

const pressEscapeHandler = (evt, cb)=>{
  if(evt.key === 'Escape')
  {
    cb();
  }
};

export {getRandomInt, getYearFromDate, convertMinutesToHours, humanizeDate, pressEscapeHandler};
