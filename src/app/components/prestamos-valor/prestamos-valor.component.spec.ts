import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosValorComponent } from './prestamos-valor.component';

describe('PrestamosValorComponent', () => {
  let component: PrestamosValorComponent;
  let fixture: ComponentFixture<PrestamosValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamosValorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
