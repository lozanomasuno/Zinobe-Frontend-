import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataLoanUsersComponent } from './list-data-loan-users.component';

describe('ListDataLoanUsersComponent', () => {
  let component: ListDataLoanUsersComponent;
  let fixture: ComponentFixture<ListDataLoanUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDataLoanUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataLoanUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
