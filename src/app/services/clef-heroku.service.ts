import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import Pusher from 'pusher-js';
import { BehaviorSubject, Observable } from 'rxjs';

import { Tweet } from '../models/tweet';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClefHerokuService {
  private BASE_URI = 'http://localhost:5000';

  tweets: BehaviorSubject<Tweet[]>;
  pusher: any;
  channel: any;
  currentPage: any;
  init: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.tweets = new BehaviorSubject([]);

    this.pusher = new Pusher('8021a486e2f0eaac6b68', {
      cluster: 'eu',
    });
    this.channel = this.pusher.subscribe('DEFAULT');

    this.router.events.subscribe(async (res) => {
      if (res instanceof NavigationEnd) {
        this.currentPage = res.id;
        if (!this.init) {
          await this._makeInitialFetch(this.currentPage);
          this._registerHandlers();
          this.init = true;
        } else {
          this.loadPage(this.currentPage);
        }
      }
    });
  }

  async _makeInitialFetch(page) {
    await this.loadPage(page);
  }

  async loadPage(page) {
    const response = await fetch(
      this.BASE_URI + '/tweets?limit=' + 10 + '&skip=' + (page - 1) * 10
    );
    const arr: any[] = await response.json();
    const tweetsArr: Tweet[] = [];
    for (let tweet of arr) {
      let _id = tweet['_id'];
      let full_text = tweet['full_text'];
      let features = tweet['features'];
      let svm_verdict = tweet['svm_verdict'];
      let cnn_verdict = tweet['cnn_verdict'];
      let tag = 'asd';
      let name = 'asd';
      let link = 'asd';
      let pic = '"http://tevi.xyz/img/ramo.webp"';
      tweetsArr.push(
        new Tweet(
          _id,
          full_text,
          features,
          svm_verdict,
          cnn_verdict,
          tag,
          name,
          link,
          pic
        )
      );
    }
    this.tweets.next(tweetsArr);
  }

  async _getTweetById(id) {
    const response = await fetch(this.BASE_URI + '/tweets/' + id);
    const newTweet = await response.json();
    return newTweet;
  }

  _registerHandlers() {
    this.channel.bind('INSERTED', async (data) => {
      /*const prevArr = this.tweets.value;
      const newTweet = await this._getTweetById(data.id);
      prevArr.push(newTweet);
      this.tweets.next(prevArr);*/
    });
    this.channel.bind('CHANGED', async (data) => {
      /*const arr = this.tweets.value;
      const index = arr.findIndex((el) => el._id == data.id);
      if (index >= 0) {
        const changedTweet = await this._getTweetById(data.id);
        arr[index] = changedTweet;
      }
      this.tweets.next(arr);*/
    });
  }

  getTweets(): Observable<Tweet[]> {
    return this.tweets.asObservable();
  }
}
