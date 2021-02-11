import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { userstatisticComponent } from "./userstatistic.component";

describe("userstatisticComponent", () => {
  let component: userstatisticComponent;
  let fixture: ComponentFixture<userstatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [userstatisticComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(userstatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
