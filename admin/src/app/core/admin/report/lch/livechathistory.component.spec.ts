import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { livechathistoryComponent } from "./livechathistory.component";

describe("livechathistoryComponent", () => {
  let component: livechathistoryComponent;
  let fixture: ComponentFixture<livechathistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [livechathistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(livechathistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
