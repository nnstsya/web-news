import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import { NewsItem, NewsModel } from '@models/news.model';
import { AppState } from '@store/store';
import { Store } from '@ngrx/store';
import * as NewsActions from '@store/actions/actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadNewsPayload } from '@store/models/actions.model';
import {PageEvent} from "@angular/material/paginator";
import {LoaderService} from "../../../../shared/services/loader/loader.service";

@Component({
  selector: 'app-news-home-page',
  templateUrl: './news-home-page.component.html',
  styleUrls: ['./news-home-page.component.scss']
})
export class NewsHomePageComponent implements OnInit {
  news$: Observable<NewsItem[]> = of([]);
  numberOfNews$: Observable<number> = of(0)
  searchForm: FormGroup;
  loadNewsPayload: LoadNewsPayload = { search: '', page: 0, limit: 25 };

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService
  ) {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.control('')
    });
  }

  ngOnInit() {
    this.loaderService.show();
    this.loadNews(this.loadNewsPayload);

    this.numberOfNews$ = this.store.select((state: AppState) => state.news.numberOfNews).pipe();
    this.news$ = this.store.select((state: AppState) => state.news.news).pipe();
  }

  search() {
    this.loadNewsPayload.search = this.searchForm.controls['search'].value;
    this.loadNews(this.loadNewsPayload);
  }

  loadNews(params: LoadNewsPayload) {
    this.store.dispatch(NewsActions.loadNews(params));
    setTimeout(() => {
      this.loaderService.hide()
    }, 400)
  }

  onPageChange(event: PageEvent): void {
    this.loadNewsPayload.page = event.pageIndex;
    this.loadNewsPayload.limit = event.pageSize;
    this.loadNews(this.loadNewsPayload);
  }
}
