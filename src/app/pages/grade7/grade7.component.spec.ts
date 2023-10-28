import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade7Component } from './grade7.component';

describe('Grade7Component', () => {
  let component: Grade7Component;
  let fixture: ComponentFixture<Grade7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grade7Component]
    });
    fixture = TestBed.createComponent(Grade7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
