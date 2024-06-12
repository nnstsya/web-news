import {Action, ActionReducer} from "@ngrx/store";
import {newsReducer} from "@store/reducers/reducers";
import {NewsEffects} from "@store/effects/effects";
import {NewsState} from "@store/state/news.state";

export interface AppState {
  news: NewsState
}

export interface AppStore {
  news: ActionReducer<NewsState, Action>;
}

export const appStore: AppStore = {
  news: newsReducer
}

export const appEffects = [NewsEffects];
