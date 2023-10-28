import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade8Component } from './grade8.component';

describe('Grade8Component', () => {
  let component: Grade8Component;
  let fixture: ComponentFixture<Grade8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grade8Component]
    });
    fixture = TestBed.createComponent(Grade8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
