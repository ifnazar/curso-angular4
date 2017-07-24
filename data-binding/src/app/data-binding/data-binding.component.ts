import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  url: string = "http://loaine.com";
  cursoAngular: boolean = true;

  getCurtirCurso() {
    return true;
  }

  getValue() {
    return 1;
  }

  ngOnInit() {
  }

}
