import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/customers/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { RoomsListComponent } from './pages/rooms/rooms-list/rooms-list.component';
import { RoomFilterPipe } from './pipes/room-filter.pipe';
import { BookingStatusesListComponent } from './pages/bookingstatuses/booking-statuses-list/booking-statuses-list.component';
import { BookingStatusFilterPipe } from './pipes/booking-status-filter.pipe';
import { BookingFilterPipe } from './pipes/booking-filter.pipe';
import { BookingsListComponent } from './pages/bookings/bookings-list/bookings-list.component';
import { BookingRoomFilterPipe } from './pipes/booking-room-filter.pipe';
import { CustomerStatusFilterPipe } from './pipes/customer-status-filter.pipe';
import { RoomStatusFilterPipe } from './pipes/room-status-filter.pipe';
import { BookingStatusStatusFilterPipe } from './pipes/booking-status-status-filter.pipe';
import { BookingStatusNameFilterPipe } from './pipes/booking-status-name-filter.pipe';
import { CustomerCreateUpdateComponent } from './pages/customers/customer-create-update/customer-create-update.component';
import { RoomCreateUpdateComponent } from './pages/rooms/room-create-update/room-create-update.component';
import { BookingStatusCreateUpdateComponent } from './pages/bookingstatuses/booking-status-create-update/booking-status-create-update.component';
import { BookingCreateUpdateComponent } from './pages/bookings/booking-create-update/booking-create-update.component';
import { BookingSelectedRoomFilterPipe } from './pipes/booking-selected-room-filter.pipe';
import { BookingUpdateComponent } from './pages/bookings/booking-update/booking-update.component';
import { CustomerDetailComponent } from './pages/customers/customer-detail/customer-detail.component';
import { RoomDetailComponent } from './pages/rooms/room-detail/room-detail.component';
import { BookingStatusDetailComponent } from './pages/bookingStatuses/booking-status-detail/booking-status-detail.component';
import { BookingDetailComponent } from './pages/bookings/booking-detail/booking-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    FilterPipePipe,
    RoomsListComponent,
    RoomFilterPipe,
    BookingStatusesListComponent,
    BookingStatusFilterPipe,
    BookingFilterPipe,
    BookingsListComponent,
    BookingRoomFilterPipe,
    CustomerStatusFilterPipe,
    RoomStatusFilterPipe,
    BookingStatusStatusFilterPipe,
    BookingStatusNameFilterPipe,
    CustomerCreateUpdateComponent,
    RoomCreateUpdateComponent,
    BookingStatusCreateUpdateComponent,
    BookingCreateUpdateComponent,
    BookingSelectedRoomFilterPipe,
    BookingUpdateComponent,
    CustomerDetailComponent,
    RoomDetailComponent,
    BookingStatusDetailComponent,
    BookingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
