import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {appEffects, appStore} from "@store/store";
import {provideStore, StoreModule} from "@ngrx/store";
import {EffectsModule, provideEffects} from "@ngrx/effects";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {newsReducer} from "@store/reducers/reducers";
import {NewsEffects} from "@store/effects/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CommonModule} from "@angular/common";
import {HighlightPipe} from "@pipes/highlight.pipe";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot([newsReducer]),
    EffectsModule.forRoot([NewsEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [
    provideStore(appStore),
    provideEffects(appEffects),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
