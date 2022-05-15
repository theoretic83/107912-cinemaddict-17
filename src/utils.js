import dayjs from 'dayjs';

const getRandomInt = (min, max)=>{
  const diff = max-min;
  if(diff>=0){
    return min + Math.round(Math.random() * diff);
  }else{
    throw new Error('getRandomInt: Ошибка входных данных');
  }
};


const getYearFromDate = (date) => dayjs(date).format('YYYY');
const humanizeDate = (date) => dayjs(date).format('DD MMMM YYYY');

const convertMinutesToHours = (minutes) => {
  const restMinutes = (minutes % 60);
  return `${(minutes-restMinutes)/60}h ${restMinutes}m`;
};

export {getRandomInt, getYearFromDate, convertMinutesToHours, humanizeDate};
