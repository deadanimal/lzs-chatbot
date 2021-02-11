import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { userratingComponent } from "./userrating.component";

describe("userratingComponent", () => {
  let component: userratingComponent;
  let fixture: ComponentFixture<userratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [userratingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(userratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
