import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTwoWayBindingComponent } from './data-binding-two-way-binding.component';

describe('DataBindingTwoWayBindingComponent', () => {
  let component: DataBindingTwoWayBindingComponent;
  let fixture: ComponentFixture<DataBindingTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
