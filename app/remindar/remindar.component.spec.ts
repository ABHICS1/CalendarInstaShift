import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindarComponent } from './remindar.component';

describe('RemindarComponent', () => {
  let component: RemindarComponent;
  let fixture: ComponentFixture<RemindarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
