import {Component, Input} from '@angular/core';
import {NewsItem} from "@models/news.model";

@Component({
  selector: 'app-news-home-page-item',
  templateUrl: './news-home-page-item.component.html',
  styleUrls: ['./news-home-page-item.component.scss']
})
export class NewsHomePageItemComponent {

  @Input() news = <NewsItem>{}
  @Input() searchValue = ''
}
