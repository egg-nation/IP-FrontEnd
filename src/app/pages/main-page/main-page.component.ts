import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClefHerokuService } from 'src/app/services/clef-heroku.service';
import { TweetsService } from 'src/app/services/tweets.service';

import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public tweets: Tweet[] = null;
  public totalTweets: number = null;
  public page: number = 1;
  public pageSize: number;

  constructor(
    private herokuService: ClefHerokuService,
    private router: Router,
    private tweetsService: TweetsService
  ) {}

  ngOnInit() {
    this.tweetsService.getNumberOfTweets().subscribe(
      (res) => {
        this.totalTweets = res.count;
        this.herokuService.getTweets().subscribe((tweets: Tweet[]) => {
          this.tweets = tweets;
          console.log(tweets);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public pageChange(newPage: number) {
    this.router.navigateByUrl('/home/' + newPage);
    this.page = newPage;
  }
}
