import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Booking } from '../models/booking';
var BookingService = /** @class */ (function () {
    function BookingService(navCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.booking = new Booking();
    }
    //CRUD for bookings
    BookingService.prototype.createBooking = function (booking) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .post('http://localhost:8100/api/bookings/', JSON.stringify(booking))
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    BookingService.prototype.getAllBookings = function (booking) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get('http://localhost:8100/api/bookings/')
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    BookingService.prototype.getBookingById = function (bookingId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get("http://localhost:8100/api/bookings/" + bookingId)
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    BookingService.prototype.updateBookingById = function (bookingId, updateBooking) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .patch("http://localhost:8100/api/bookings/" + bookingId, JSON.stringify(updateBooking))
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    BookingService.prototype.removeBooking = function (bookingId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .delete("http://localhost:8100/api/bookings/" + bookingId)
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    BookingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            HttpClient])
    ], BookingService);
    return BookingService;
}());
export { BookingService };
//# sourceMappingURL=booking.service.js.map