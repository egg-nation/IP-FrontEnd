import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { GenericService } from './services/generic.service';
import { TweetsService } from './services/tweets.service';
import { ClefHerokuService } from './services/clef-heroku.service';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, MainPageComponent, TweetCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgxPaginationModule, NgbModule],
  providers: [GenericService, TweetsService, ClefHerokuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
