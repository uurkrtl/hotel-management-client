import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatusesListComponent } from './booking-statuses-list.component';

describe('BookingStatusesListComponent', () => {
  let component: BookingStatusesListComponent;
  let fixture: ComponentFixture<BookingStatusesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStatusesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingStatusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
