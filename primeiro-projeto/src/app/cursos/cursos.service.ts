import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'Ex JS', 'Angular'];
  }

}
