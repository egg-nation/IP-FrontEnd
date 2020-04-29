import { Component, OnInit } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public test: any[];

  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.tweetsService.getAll().subscribe((response) => {
      this.test = response;
    });
  }
}
