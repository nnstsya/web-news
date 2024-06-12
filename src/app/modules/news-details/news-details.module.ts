import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NewsService } from "@services/news.service";
import { NewsDetailsPageComponent } from './pages/news-details-page/news-details-page.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {LoaderComponent} from "../../shared/components/loader/loader/loader.component";
import {LoaderService} from "../../shared/services/loader/loader.service";

@NgModule({
  declarations: [NewsDetailsPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: NewsDetailsPageComponent
            }
        ]),
        MatIcon,
        LoaderComponent
    ],
  providers: [NewsService, LoaderService]
})
export class NewsDetailsModule { }
