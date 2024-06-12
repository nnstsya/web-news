import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {forkJoin, iif, Observable, of} from 'rxjs';
import * as NewsActions from '../actions/actions';
import { NewsService } from '@services/news.service';
import {NewsItem, NewsModel} from '@models/news.model';
import {LoadNewsPayload, LoadNewsSuccessPayload} from "@store/models/actions.model";

@Injectable()
export class NewsEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}

  private getFilteredNews(action: LoadNewsPayload): Observable<LoadNewsSuccessPayload> {
  return forkJoin([
    this.newsService.getAllByTitle(action.search, action.limit),
    this.newsService.getAllBySummary(action.search, action.limit)
  ]).pipe(
    map(([filteredByTitle, filteredByDesc]: [NewsModel, NewsModel]) => {
        let results: {news: NewsItem[], numberOfNews: number} = <LoadNewsSuccessPayload>{};
        let mergedResults: NewsItem[] = [];

        for (let item of filteredByTitle.results) {
          if (!mergedResults.some(news => news.id === item.id)) {
            mergedResults.push(item);
          }
        }

        for (let item of filteredByDesc.results) {
          if (!mergedResults.some(news => news.id === item.id)) {
            mergedResults.push(item);
          }
        }

        results.numberOfNews = mergedResults.length;
        results.news = mergedResults.splice(action.page * action.limit, action.limit);

        return results;
      }),
  );
}

 private getAllNews(action: LoadNewsPayload): Observable<LoadNewsSuccessPayload> {
  return this.newsService.getAll(action.page, action.limit).pipe(
    map((news) => {
      let results: LoadNewsSuccessPayload = {
        news: news.results,
        numberOfNews: news.count
      };
      return results;
    })
  );
}

  loadNews$ = createEffect(() =>
  this.actions$.pipe(
    ofType(NewsActions.loadNews),
    switchMap((action: LoadNewsPayload) => iif(
      () => !!action.search.trim().length,
      this.getFilteredNews(action),
      this.getAllNews(action)
    )),
    map((response: LoadNewsSuccessPayload) => NewsActions.loadNewsSuccess(response)),
    catchError((error) => {
      return of(NewsActions.loadNewsFailure({error: error.message}));
    })
  ));
}
