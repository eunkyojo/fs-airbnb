import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Booking } from '../models/booking';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public booking: Booking

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) { }

  //CRUD for bookings
  createBooking(booking: Booking) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post('http://localhost:8100/api/bookings/create', booking)
        .subscribe((response)=>{
          resolve(response)
        }
        )
    })
  };

  getAllBookings(booking: Booking) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get('http://localhost:8100/api/bookings/')
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  getBookingById(bookingId) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(`http://localhost:8100/api/bookings/${bookingId}`)
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  updateBookingById(bookingId, updateBooking) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .patch(`http://localhost:8100/api/bookings/${bookingId}`, JSON.stringify(updateBooking))
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  removeBooking(bookingId) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .delete(`http://localhost:8100/api/bookings/${bookingId}`)
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };
}
