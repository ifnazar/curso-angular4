import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-interpolation',
  templateUrl: './data-binding-interpolation.component.html',
  styleUrls: ['./data-binding-interpolation.component.css']
})
export class DataBindingInterpolationComponent implements OnInit {

  constructor() { }

  url: string = 'http://loaine.com';
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
