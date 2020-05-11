import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss', '../modal/modal.component.css'],
})
export class TweetCardComponent implements OnInit, AfterViewInit {
  @Input() public parentData: Tweet;
  @Input() public index;

  constructor() {}

  ngAfterViewInit(): void {
    this.blueLinks();
  }

  ngOnInit(): void {}

  public showDialog() {
    let modal_t = document.getElementById(this.index);

    modal_t.classList.remove('hhidden');
    modal_t.classList.add('sshow');
    modal_t
      .getElementsByClassName('mmodal-background')[0]
      .addEventListener('click', () => {
        modal_t.classList.remove('sshow');
        modal_t.classList.add('hhidden');
      });
  }

  public closeDialog() {
    let modal_t = document.getElementById(this.index);
    modal_t.classList.remove('sshow');
    modal_t.classList.add('hhidden');
  }

  public linkify(text) {
    // (https?:\/\/)(\s)?(www\.)?(\s?)(\w+\.)*([\w\-\s]+\/)*([\w-]+)\/?
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    });
  }

  public blueLinks() {
    /*let texts = document.getElementsByClassName('tweet-text');
    let i;
    for (i = 0; i < texts.length; i++) {
      texts[i].innerHTML = this.linkify(texts[i].innerHTML);
    }*/
  }
}
