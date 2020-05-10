import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss', '../modal/modal.component.css'],
})
export class TweetCardComponent implements OnInit {
  @Input() public parentData;
  @Input() public index;

  constructor() {}

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
    console.log(this.index);
    let modal_t = document.getElementById(this.index);
    modal_t.classList.remove('sshow');
    modal_t.classList.add('hhidden');
  }
}
