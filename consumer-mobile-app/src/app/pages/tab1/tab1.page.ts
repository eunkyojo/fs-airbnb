import { Component } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing';
import { AlertController } from '@ionic/angular';
import { BookingService } from '../../services/booking.service';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listings: Listing[]

  constructor(
    private listingService: ListingService,
    private alertCtrl: AlertController,
    private bookingService: BookingService
  ) {
    this.listingService.getAllListings().then((response: any) => {
      this.listings = response;
    })
  }

  async bookingForm(id) {
    let alert = await this.alertCtrl.create({
      header: 'Make a Booking',
      inputs: [
        {
          name: 'startDate',
          placeholder: 'Start date',
          type: 'date'
        },
        {
          name: 'endDate',
          placeholder: 'End date',
          type: 'date'
        },
        {
          name: 'guestCount',
          placeholder: 'Guest count',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          role: 'confirm',
          handler: data => {
            let booking = new Booking (
              data.startDate,
              data.endDate,
              data.guestCount,
              id,
              localStorage.getItem("userId")
            )
            console.log(booking)
            this.bookingService.createBooking(booking);
          }
        }
      ]
    });
    await alert.present();
  }

}
