import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/customers/list/list.component';
import { RoomsListComponent } from './pages/rooms/rooms-list/rooms-list.component';
import { BookingStatusesListComponent } from './pages/bookingstatuses/booking-statuses-list/booking-statuses-list.component';
import { BookingsListComponent } from './pages/bookings/bookings-list/bookings-list.component';
import { CustomerCreateUpdateComponent } from './pages/customers/customer-create-update/customer-create-update.component';
import { RoomCreateUpdateComponent } from './pages/rooms/room-create-update/room-create-update.component';
import { BookingStatusCreateUpdateComponent } from './pages/bookingstatuses/booking-status-create-update/booking-status-create-update.component';
import { BookingCreateUpdateComponent } from './pages/bookings/booking-create-update/booking-create-update.component';
import { BookingUpdateComponent } from './pages/bookings/booking-update/booking-update.component';
import { CustomerDetailComponent } from './pages/customers/customer-detail/customer-detail.component';
import { RoomDetailComponent } from './pages/rooms/room-detail/room-detail.component';
import { BookingDetailComponent } from './pages/bookings/booking-detail/booking-detail.component';
import { BookingStatusDetailComponent } from './pages/bookingStatuses/booking-status-detail/booking-status-detail.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'customers', component:ListComponent },
  { path:'rooms', component: RoomsListComponent },
  { path:'bookings', component:BookingsListComponent },
  { path:'booking-statuses', component:BookingStatusesListComponent },
  { path:'customer/add', component:CustomerCreateUpdateComponent },
  { path:'customer/update', component:CustomerCreateUpdateComponent },
  { path:'room/add', component:RoomCreateUpdateComponent },
  { path:'room/update', component:RoomCreateUpdateComponent },
  { path:'booking-status/add', component:BookingStatusCreateUpdateComponent },
  { path:'booking-status/update', component:BookingStatusCreateUpdateComponent },
  { path:'booking/add', component:BookingCreateUpdateComponent },
  { path:'booking/update', component:BookingUpdateComponent },
  { path:'customer/details', component:CustomerDetailComponent },
  { path:'room/details', component:RoomDetailComponent },
  { path:'booking-status/details', component:BookingStatusDetailComponent },
  { path:'booking/details', component:BookingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
