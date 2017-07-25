import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-event',
  templateUrl: './data-binding-event.component.html',
  styleUrls: ['./data-binding-event.component.css']
})
export class DataBindingEventComponent implements OnInit {

  constructor() { }

  currentValue: string;
  savedValue: string;
  isMouseOver: boolean = false;

  onClickButtonX1() {
    alert('Hello');
  }

  onKeyUp(event: KeyboardEvent) {
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value) {
    this.savedValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }


  ngOnInit() {
  }

}
