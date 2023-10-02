import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCreateUpdateComponent } from './booking-create-update.component';

describe('BookingCreateUpdateComponent', () => {
  let component: BookingCreateUpdateComponent;
  let fixture: ComponentFixture<BookingCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
