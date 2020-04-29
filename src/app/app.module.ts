import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { GenericService } from './services/generic.service';
import { TweetsService } from './services/tweets.service';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, TweetCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GenericService, TweetsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
