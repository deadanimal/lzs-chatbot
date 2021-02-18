import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { botsubcategoryComponent } from './botsubcategory.component';

describe('botsubcategoryComponent', () => {
  let component: botsubcategoryComponent;
  let fixture: ComponentFixture<botsubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ botsubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(botsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
