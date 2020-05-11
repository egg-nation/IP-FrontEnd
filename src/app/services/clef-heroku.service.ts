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
  private BASE_URI = 'https://ip2020.herokuapp.com';
  // private BASE_URI = 'http://localhost:5000';

  private newInserted;
  private pages = {};

  tweets: BehaviorSubject<Tweet[]>;
  pusher: any;
  channel: any;
  currentPage: any;
  init: boolean = false;

  constructor(private router: Router) {
    this.tweets = new BehaviorSubject([]);

    this.pusher = new Pusher('8021a486e2f0eaac6b68', {
      cluster: 'eu',
    });
    this.channel = this.pusher.subscribe('DEFAULT');

    this.router.events.subscribe(async (res) => {
      if (res instanceof NavigationEnd) {
        let changedPage = res.url.split('/')[2];
        if (changedPage == null || isNaN(parseInt(changedPage))) {
          return;
        }
        this.currentPage = res.url.split('/')[2];
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

  private createTweet(tweet): Tweet {
    let _id = tweet['_id'];
    let features = tweet['features'];
    let svm_verdict = tweet['svm_verdict'];
    let cnn_verdict = tweet['cnn_verdict'];
    let trustedSource = true;

    if (svm_verdict == 1) {
      if (cnn_verdict < 0.5) {
        trustedSource = false;
      }
    } else {
      trustedSource = false;
    }

    let full_text, tag, name, link, pic, retweets, date;

    if ('retweeted_status' in tweet) {
      full_text = tweet['retweeted_status']['full_text'];
      tag = tweet['retweeted_status']['user']['screen_name'];
      name = tweet['retweeted_status']['user']['name'];
      link = '';
      pic = tweet['retweeted_status']['user']['profile_image_url_https'];
      retweets = tweet['retweeted_status']['retweet_count'];
      date = tweet['retweeted_status']['created_at'].replace('+0000', '');
    } else {
      full_text = tweet['full_text'];
      tag = tweet['user']['screen_name'];
      name = tweet['user']['name'];
      link = '';
      pic = tweet['user']['profile_image_url_https'];
      retweets = tweet['retweet_count'];
      date = tweet['created_at'].replace('+0000', '');
    }

    let createdTweet: Tweet = new Tweet(
      _id,
      full_text,
      features,
      svm_verdict,
      cnn_verdict,
      tag,
      name,
      link,
      pic,
      retweets,
      trustedSource,
      date
    );
    return createdTweet;
  }

  async _makeInitialFetch(page) {
    await this.loadPage(page);
  }

  async loadPage(page) {
    if (!this.newInserted && page in this.pages) {
      this.tweets.next(this.pages[page]);
    } else {
      if (this.newInserted) {
        this.newInserted = false;
        this.pages = {};
      }
      const route =
        this.BASE_URI + '/tweets?limit=10' + '&skip=' + (page - 1) * 10;
      const response = await fetch(route);
      const arr: any[] = await response.json();
      const tweetsArr: Tweet[] = [];
      for (let tweet of arr) {
        tweetsArr.push(this.createTweet(tweet));
      }
      this.pages[page] = tweetsArr;
      this.tweets.next(tweetsArr);
    }
  }

  async _getTweetById(id) {
    const response = await fetch(this.BASE_URI + '/tweets/' + id);
    const newTweet = await response.json();
    return newTweet;
  }

  _registerHandlers() {
    this.channel.bind('INSERTED', async (data) => {
      this.newInserted = true;
      if (this.currentPage == '1' || this.currentPage == 1) {
        let prevArr = this.tweets.value;
        const tweet = await this._getTweetById(data.id);

        let newTweet = this.createTweet(tweet);
        prevArr.unshift(newTweet);

        this.tweets.next(prevArr);
      } else {
        return;
      }
    });

    this.channel.bind('CHANGED', async (data) => {
      const arr = this.tweets.value;
      const index = arr.findIndex((el) => el._id == data.id);
      if (index >= 0) {
        const changedTweet = await this._getTweetById(data.id);
        arr[index] = this.createTweet(changedTweet);
      }
      this.tweets.next(arr);
    });
  }

  getTweets(): Observable<Tweet[]> {
    return this.tweets.asObservable();
  }
}
