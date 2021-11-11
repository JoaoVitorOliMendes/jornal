import { NEWS_UPDATED } from './actionTypes';

export const newsUpdated = value => ({
  type: NEWS_UPDATED,
  newValue: value
});