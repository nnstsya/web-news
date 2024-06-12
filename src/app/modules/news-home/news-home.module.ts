import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NewsService } from "@services/news.service";
import { NewsHomePageComponent } from "@modules/news-home/pages/news-home-page/news-home-page.component";
import {
  NewsHomePageItemComponent
} from "@modules/news-home/pages/news-home-page/components/news-home-page-item/news-home-page-item.component";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {HighlightPipe} from "@pipes/highlight.pipe";
import {LoaderComponent} from "../../shared/components/loader/loader/loader.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatDivider} from "@angular/material/divider";

@NgModule({
  declarations: [NewsHomePageComponent, NewsHomePageItemComponent],
    imports: [
        HighlightPipe,
        MatCardModule,
        CommonModule,
        MatFormField,
        MatInput,
        RouterModule.forChild([
            {
                path: '',
                component: NewsHomePageComponent
            }
        ]),
        ReactiveFormsModule,
        MatIcon,
        LoaderComponent,
        MatPaginator,
        MatDivider,
    ],
  providers: [NewsService]
})
export class NewsHomeModule { }
