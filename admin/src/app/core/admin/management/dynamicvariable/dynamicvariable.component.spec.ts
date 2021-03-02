import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dynamicvariableComponent } from './dynamicvariable.component';

describe('dynamicvariableComponent', () => {
  let component: dynamicvariableComponent;
  let fixture: ComponentFixture<dynamicvariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dynamicvariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dynamicvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
