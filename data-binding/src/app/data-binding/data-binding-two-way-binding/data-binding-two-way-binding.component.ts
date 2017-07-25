import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding-two-way-binding',
  templateUrl: './data-binding-two-way-binding.component.html',
  styleUrls: ['./data-binding-two-way-binding.component.css']
})
export class DataBindingTwoWayBindingComponent implements OnInit {

  constructor() {
  }

  name: string = 'abc';

  person: any = {
    name: 'João',
    age: 20
  };

  ngOnInit() {
  }

}
