import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingClassStyleComponent } from './data-binding-class-style.component';

describe('DataBindingClassStyleComponent', () => {
  let component: DataBindingClassStyleComponent;
  let fixture: ComponentFixture<DataBindingClassStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingClassStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
