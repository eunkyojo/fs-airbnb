import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';
var ListingService = /** @class */ (function () {
    function ListingService(navCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.listing = new Listing();
    }
    //CRUD for users
    ListingService.prototype.createListing = function (listing) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .post('http://localhost:8100/api/listings/', JSON.stringify(listing))
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    ListingService.prototype.getAllListings = function (listing) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get('http://localhost:8100/api/listings/')
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    ListingService.prototype.getListingById = function (listingId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get("http://localhost:8100/api/listings/" + listingId)
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    ListingService.prototype.updateListingById = function (listingId, updateListing) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .patch("http://localhost:8100/api/listings/" + listingId, JSON.stringify(updateListing))
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    ListingService.prototype.removeListing = function (listingId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .delete("http://localhost:8100/api/listings/" + listingId)
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    ListingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            HttpClient])
    ], ListingService);
    return ListingService;
}());
export { ListingService };
//# sourceMappingURL=listing.service.js.map