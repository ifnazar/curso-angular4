import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difertiva-ngif',
  templateUrl: './difertiva-ngif.component.html',
  styleUrls: ['./difertiva-ngif.component.css']
})
export class DifertivaNgifComponent implements OnInit {

  cursos: string[] = ['Java', 'Angular'];

  mostrarCursos: boolean;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = ! this.mostrarCursos;
  }

}
