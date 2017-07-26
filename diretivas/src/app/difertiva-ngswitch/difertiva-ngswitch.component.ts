import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difertiva-ngswitch',
  templateUrl: './difertiva-ngswitch.component.html',
  styleUrls: ['./difertiva-ngswitch.component.css']
})
export class DifertivaNgswitchComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
