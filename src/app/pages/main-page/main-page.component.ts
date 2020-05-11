import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  public page: number = null;
  public pageSize: number = 10;

  constructor(
    private herokuService: ClefHerokuService,
    private router: Router,
    private tweetsService: TweetsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.params.pageNum;
    this.tweetsService.getNumberOfTweets().subscribe(
      (res) => {
        this.totalTweets = res.count;
        this.herokuService.getTweets().subscribe((tweets: Tweet[]) => {
          this.tweets = tweets;
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
