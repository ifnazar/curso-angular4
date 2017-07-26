import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifertivaNgswitchComponent } from './difertiva-ngswitch.component';

describe('DifertivaNgswitchComponent', () => {
  let component: DifertivaNgswitchComponent;
  let fixture: ComponentFixture<DifertivaNgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifertivaNgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifertivaNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
