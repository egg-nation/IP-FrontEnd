import { Component, OnInit } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public tweetsFromDB = [];
  totalTweets: number;
  page: number = 1;
  pageSize: number = 9;
  constructor(private tweetsService: TweetsService) {}

  ngOnInit(){
    this.tweetsFromDB = this.tweetsService.getTweets();
    this.totalTweets = this.tweetsFromDB.length;
  }
  
  pageChange(newPage: number) {
    this.tweetsFromDB = this.tweetsService.getTweets().slice((newPage - 1) * this.pageSize, (newPage - 1) * this.pageSize + this.pageSize);
    //this.router.navigate([''], { queryParams: { page: newPage } });
  }
  
}
