import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LithoPageComponent } from './litho-page.component';

describe('LithoPageComponent', () => {
  let component: LithoPageComponent;
  let fixture: ComponentFixture<LithoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LithoPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LithoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
