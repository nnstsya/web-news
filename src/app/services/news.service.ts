import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {NewsItem, NewsModel} from "@models/news.model";

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private baseUrl = 'https://api.spaceflightnewsapi.net/v4/articles';

  constructor(private http: HttpClient) {}

  getAll(page: number, limit: number): Observable<NewsModel> {
    let params = new HttpParams()
      .set('offset', page * limit)
      .set('limit', limit);
    return this.http.get<NewsModel>(this.baseUrl, { params });
  }

  getAllByTitle(search: string, limit: number): Observable<NewsModel> {
    let params = new HttpParams()
      .set('title_contains_one', search || '')
      .set('limit', limit);

    return this.http.get<NewsModel>(this.baseUrl, { params });
  }

  getAllBySummary(search: string, limit: number): Observable<NewsModel> {
    let params = new HttpParams()
      .set('summary_contains_one', search || '')
      .set('limit', limit);

    return this.http.get<NewsModel>(this.baseUrl, { params });
  }

  getById(id: number): Observable<NewsItem> {
    return this.http.get<NewsItem>(`${this.baseUrl}/${id}`);
  }
}
