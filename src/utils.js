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

export {getRandomInt, getYearFromDate};
