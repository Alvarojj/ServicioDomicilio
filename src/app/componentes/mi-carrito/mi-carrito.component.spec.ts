import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCarritoComponent } from './mi-carrito.component';

describe('MiCarritoComponent', () => {
  let component: MiCarritoComponent;
  let fixture: ComponentFixture<MiCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiCarritoComponent]
    });
    fixture = TestBed.createComponent(MiCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
