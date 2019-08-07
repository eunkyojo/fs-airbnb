import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public listing: Listing = new Listing();

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) { }

  //CRUD for users
  createListing(listing: Listing) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post('http://localhost:8100/api/listings/', JSON.stringify(listing))
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  getAllListings() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get('http://localhost:8100/api/listings/')
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  getListingById(listingId) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(`http://localhost:8100/api/listings/${listingId}`)
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  updateListingById(listingId, updateListing) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .patch(`http://localhost:8100/api/listings/${listingId}`, JSON.stringify(updateListing))
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  removeListing(listingId) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .delete(`http://localhost:8100/api/listings/${listingId}`)
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };
}
