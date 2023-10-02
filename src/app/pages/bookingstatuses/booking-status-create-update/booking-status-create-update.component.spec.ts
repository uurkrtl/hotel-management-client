import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatusCreateUpdateComponent } from './booking-status-create-update.component';

describe('BookingStatusCreateUpdateComponent', () => {
  let component: BookingStatusCreateUpdateComponent;
  let fixture: ComponentFixture<BookingStatusCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStatusCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingStatusCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
