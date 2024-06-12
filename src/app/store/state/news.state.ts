import {NewsItem} from "@models/news.model";

export interface NewsState {
  news: NewsItem[];
  numberOfNews: number;
  loading: boolean;
  error: string;
}

export const initialState: NewsState = {
  news: <NewsItem[]>[],
  numberOfNews: 0,
  loading: false,
  error: ''
};

export interface AppState {
  news: NewsState;
}
