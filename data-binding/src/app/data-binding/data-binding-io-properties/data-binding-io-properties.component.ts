import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-io-properties',
  templateUrl: './data-binding-io-properties.component.html',
  styleUrls: ['./data-binding-io-properties.component.css']
})
export class DataBindingIoPropertiesComponent implements OnInit {

  constructor() { }

  courseName: string = 'Angular';

  initialValue: number = 10;

  ngOnInit() {
  }

  onValueChanged(event) {
    console.log(event);
  }

}
