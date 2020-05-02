import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { BehaviorSubject, Observable } from 'rxjs';

const BASE_URI = "http://ip2020.herokuapp.com"

export interface TweetInterface {
  _id: string;
  full_text: string;
  features?: any,
  verdict?: any
}

@Injectable({
  providedIn: 'root'
})
export class ClefHerokuService {
  tweets: BehaviorSubject<TweetInterface[]>
  pusher: any;
  channel: any;

  constructor() { 
    this.tweets = new BehaviorSubject([])

    this.pusher = new Pusher('8021a486e2f0eaac6b68', {
      cluster: 'eu'
    });
    this.channel = this.pusher.subscribe("DEFAULT")
    this._makeInitialFetch()
    this._registerHandlers();
  }

  async _makeInitialFetch() {
    const response = await fetch(BASE_URI + "/tweets")
    const arr = await response.json()
    this.tweets.next(arr)
  }

  async _getTweetById(id) {
    const response = await fetch(BASE_URI + "/tweets/" + id)
    const newTweet = await response.json()
    return newTweet;
  }

  _registerHandlers() {
    this.channel.bind("INSERTED", async data => {
      const prevArr = this.tweets.value;
      const newTweet = await this._getTweetById(data.id)
      prevArr.push(newTweet)
      this.tweets.next(prevArr)
    })
    this.channel.bind("CHANGED", async (data) => {
      const arr = this.tweets.value
      const index = arr.findIndex(el => el._id == data.id)
      if(index >= 0){
          const changedTweet = await this._getTweetById(data.id)
          arr[index] = changedTweet
      }
      this.tweets.next(arr)
    })
  }

  getTweets():Observable<TweetInterface[]> {
    return this.tweets.asObservable()
  }
}
