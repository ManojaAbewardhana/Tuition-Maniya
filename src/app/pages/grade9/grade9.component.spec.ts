import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade9Component } from './grade9.component';

describe('Grade9Component', () => {
  let component: Grade9Component;
  let fixture: ComponentFixture<Grade9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grade9Component]
    });
    fixture = TestBed.createComponent(Grade9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
