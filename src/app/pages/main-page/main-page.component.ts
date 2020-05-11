import { Component, OnInit } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

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
    this.tweetsFromDB = this.tweetsService.getTweets(0);
    this.totalTweets = this.tweetsFromDB.length; 
  }
  
  pageChange(newPage: number) {
    
    this.page = newPage;
    this.tweetsFromDB = this.tweetsService.getTweets(newPage-1); 
    this.totalTweets = this.tweetsFromDB.length; 

    //this.router.navigate([''], { queryParams: { page: newPage } });
  }
  
}
