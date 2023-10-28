import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade6Component } from './grade6.component';

describe('Grade6Component', () => {
  let component: Grade6Component;
  let fixture: ComponentFixture<Grade6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grade6Component]
    });
    fixture = TestBed.createComponent(Grade6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
