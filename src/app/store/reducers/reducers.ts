import * as NewsActions from '../actions/actions';
import {NewsItem} from "@models/news.model";
import {on, createReducer} from "@ngrx/store"
import {initialState, NewsState} from "@store/state/news.state";

export const newsReducer = createReducer(
  initialState,

  on(NewsActions.loadNews, state => ({...state, loading: true })),

  on(NewsActions.loadNewsSuccess, (state, { news, numberOfNews }) => ({
    ...state,
    news: news.map((newsItem: NewsItem): NewsItem => ({
      ...newsItem,
      summary: newsItem.summary.substring(0, 99).concat('...')
    })),
    numberOfNews,
    loading: false
  })),

  on(NewsActions.loadNewsFailure, (state, { error }) => ({...state, error, loading: false }))
)
