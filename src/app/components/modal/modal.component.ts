import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'modal',
  template: `
    <div class="mmodal">
      <div class="mmodal-body">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="mmodal-background"></div>
    `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(private el: ElementRef) { }
  ngOnInit() { }
  close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
  }
}