import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugosComponent } from './jugos.component';

describe('JugosComponent', () => {
  let component: JugosComponent;
  let fixture: ComponentFixture<JugosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugosComponent]
    });
    fixture = TestBed.createComponent(JugosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
