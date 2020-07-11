import { createSelector } from 'reselect';
import isArray from 'lodash/isArray';
import groupBy from 'lodash/groupBy';
import moment from 'moment';

const getWords = (state) => state.wordCollection.words;

export const getWordsGroupedByDate = createSelector([getWords], (words) => {
  if (!isArray(words)) return [];

  const groupedWordsByDate = groupBy(words, ({ dateCreated }) => {
    return moment(new Date(dateCreated)).format('Do MMM YYYY');
  });

  const todayStr = moment().format('Do MMM YYYY');
  const yesterdayStr = moment().subtract(1, 'days').format('Do MMM YYYY');

  const groupedWordsArray = [];

  if (groupedWordsByDate[todayStr]) {
    groupedWordsArray.push({
      title:'Today',
      data: groupedWordsByDate[todayStr]
    });
    delete groupedWordsByDate[todayStr];
  }

  if (groupedWordsByDate[yesterdayStr]) {
    groupedWordsArray.push({
      title:'Yesterday',
      data: groupedWordsByDate[yesterdayStr]
    });
    delete groupedWordsByDate[yesterdayStr];
  }

  Object.keys(groupedWordsByDate).forEach((key) => groupedWordsArray.push({
    title: key,
    data: groupedWordsByDate[key],
  }));

  return groupedWordsArray;
});
