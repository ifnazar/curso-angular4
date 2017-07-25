import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() value: number = 0;

  @Output() valueChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  increase() {
    this.value++;
    this.valueChanged.emit({newValue: this.value});
  }

  decrease() {
    this.value--;
    this.valueChanged.emit({newValue: this.value});
  }

}
