import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCreateUpdateComponent } from './room-create-update.component';

describe('RoomCreateUpdateComponent', () => {
  let component: RoomCreateUpdateComponent;
  let fixture: ComponentFixture<RoomCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
