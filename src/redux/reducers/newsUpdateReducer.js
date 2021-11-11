import { NEWS_UPDATED } from '../actions/actionTypes';

const initialState = {
  news: {}
};

export const newsUpdatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_UPDATED:
      return {
        ...state,
        news: action.news
      };
    default:
      return state;
  }
};