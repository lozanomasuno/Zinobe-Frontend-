import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCapitalComponent } from './base-capital.component';

describe('BaseCapitalComponent', () => {
  let component: BaseCapitalComponent;
  let fixture: ComponentFixture<BaseCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
