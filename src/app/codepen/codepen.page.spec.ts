import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodepenPage } from './codepen.page';

describe('CodepenPage', () => {
  let component: CodepenPage;
  let fixture: ComponentFixture<CodepenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodepenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodepenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
