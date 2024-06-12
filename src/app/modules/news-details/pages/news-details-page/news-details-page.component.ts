import { Component } from '@angular/core';
import {NewsItem} from "@models/news.model";
import {filter, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap, tap} from "rxjs/operators";
import {NewsService} from "@services/news.service";
import {LoaderService} from "../../../../shared/services/loader/loader.service";

@Component({
  selector: 'app-news-details-page',
  templateUrl: './news-details-page.component.html',
  styleUrls: ['./news-details-page.component.scss']
})
export class NewsDetailsPageComponent {
  isLoading = this.loaderService.isLoading;

  newsItem$: Observable<NewsItem> = this.route.paramMap.pipe(
      tap(() => this.loaderService.show()),
      map(params => params.get('id')),
      filter((id) => !!id),
      switchMap((id) => this.newsService.getById(+id!)),
      tap(() => {
        setTimeout(() => {
          this.loaderService.hide()
        }, 100)
      })
  );

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private loaderService: LoaderService
  ) {}
}
