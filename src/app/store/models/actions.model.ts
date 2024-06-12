import {NewsItem} from '@models/news.model';

export interface LoadNewsPayload {
  search: string;
  page: number;
  limit: number;
}

export interface LoadNewsSuccessPayload {
  news: NewsItem[];
  numberOfNews: number;
}

export interface LoadNewsFailurePayload {
  error: string;
}
