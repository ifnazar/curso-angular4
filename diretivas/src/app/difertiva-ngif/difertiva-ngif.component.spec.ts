import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifertivaNgifComponent } from './difertiva-ngif.component';

describe('DifertivaNgifComponent', () => {
  let component: DifertivaNgifComponent;
  let fixture: ComponentFixture<DifertivaNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifertivaNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifertivaNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
