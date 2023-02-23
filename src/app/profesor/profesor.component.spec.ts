/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { profesorComponent } from './profesor.component';

describe('profesorComponent', () => {
  let component: profesorComponent;
  let fixture: ComponentFixture<profesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ profesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(profesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
