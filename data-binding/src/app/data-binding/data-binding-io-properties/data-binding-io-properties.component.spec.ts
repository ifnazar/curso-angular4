import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingIoPropertiesComponent } from './data-binding-io-properties.component';

describe('DataBindingIoPropertiesComponent', () => {
  let component: DataBindingIoPropertiesComponent;
  let fixture: ComponentFixture<DataBindingIoPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingIoPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingIoPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
