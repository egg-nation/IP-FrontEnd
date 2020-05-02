import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  public tweetsFromDB = [
    {"id":1, "message": "hello this is a tweet", "sentiment" : "negative"},
    {"id":2, "message": "hello this is a tweet", "sentiment" : "negative"},
    {"id":3, "message": "hello this is a tweet", "sentiment" : "positive"}
  ];

  constructor() { }

  getTweets(){
    return this.tweetsFromDB;
  }
}
