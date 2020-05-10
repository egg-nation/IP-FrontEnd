import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss', '../modal/modal.component.css']
})
export class TweetCardComponent implements OnInit {
  @Input() public parentData;
  @Input() public index;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog(){
    let modal_t = document.getElementById(this.index)
    
    /**
    *let tweet_card = document.getElementsByClassName('tweet-card')[0]
    *modal_t.getElementsByClassName('tweet-card')[0].innerHTML = tweet_card.innerHTML
    *let tweet_close_button = modal_t.getElementsByClassName('tweet-card')[0].getElementsByClassName('tweet-buttons')[0].getElementsByClassName('tweet-button')[0]
    *console.log(tweet_close_button)
    *tweet_close_button.classList.remove('button1')
    *tweet_close_button.classList.add('button3')
    */

    modal_t.classList.remove('hhidden')
    modal_t.classList.add('sshow');
    modal_t.getElementsByClassName('mmodal-background')[0].addEventListener('click', ()=> {
      modal_t.classList.remove('sshow');
      modal_t.classList.add('hhidden');
    })
  }
  closeDialog() {
    console.log(this.index)
    let modal_t  = document.getElementById(this.index)
    modal_t.classList.remove('sshow')
    modal_t.classList.add('hhidden');
  }

}
