import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import { CursosService } from './cursos.service';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  class mockCursosService {
    getCursos = function () {
      return ['FOO', 'BAR'];
    };
  }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ CursosComponent, CursoDetalheComponent ],
      providers: [{provide: CursosService, useClass: mockCursosService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
