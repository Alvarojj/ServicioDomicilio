import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopaComponent } from './sopa.component';

describe('SopaComponent', () => {
  let component: SopaComponent;
  let fixture: ComponentFixture<SopaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SopaComponent]
    });
    fixture = TestBed.createComponent(SopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
