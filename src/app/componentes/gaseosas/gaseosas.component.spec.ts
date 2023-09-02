import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaseosasComponent } from './gaseosas.component';

describe('GaseosasComponent', () => {
  let component: GaseosasComponent;
  let fixture: ComponentFixture<GaseosasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaseosasComponent]
    });
    fixture = TestBed.createComponent(GaseosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
