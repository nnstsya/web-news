import { createSelector } from '@ngrx/store';
import {AppState, NewsState} from '@store/state/news.state';

export const selectNewsState = (state: AppState) => state.news;

export const selectNews = createSelector(
  selectNewsState,
  (state: NewsState) => state.news
);
