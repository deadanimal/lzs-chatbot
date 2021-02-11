/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyaccountComponent } from './myaccount.component';
import Dropzone from "dropzone";


Dropzone.autoDiscover = false;


describe('MyaccountComponent', () => {
  let component: MyaccountComponent;
  let fixture: ComponentFixture<MyaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let currentSingleFile = undefined;
  // single dropzone file - accepts only images
  new Dropzone(document.getElementsByClassName("dropzone-single")[0], {
    url: "/",
    thumbnailWidth: null,
    thumbnailHeight: null,
    previewsContainer: document.getElementsByClassName(
      "dz-preview-single"
    )[0],
    previewTemplate: document.getElementsByClassName("dz-preview-single")[0]
      .innerHTML,
    maxFiles: 1,
    acceptedFiles: "image/*",
    init: function() {
      this.on("addedfile", function(file) {
        if (currentSingleFile) {
          this.removeFile(currentSingleFile);
        }
        currentSingleFile = file;
      });
    }
  });
  document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
});
