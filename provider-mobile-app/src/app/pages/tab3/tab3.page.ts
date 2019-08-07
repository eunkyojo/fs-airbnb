import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ListingService } from '../../services/listing.service';
import { Listing } from 'src/app/models/listing';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listings: Listing[]

  constructor(
    private listingService: ListingService,
    private alertCtrl: AlertController
  ) {
    this.listingService.getAllListings().then((response: any) => {
      this.listings = response;
    })
  }

  async updateListing(id) {
    let alert = await this.alertCtrl.create({
      header: 'Update Listing',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          type: 'text'
        },
        {
          name: 'description',
          placeholder: 'Description',
          type: 'text'
        },
        {
          name: 'location',
          placeholder: 'Location',
        },
        {
          name: 'pricePerNight',
          placeholder: 'Price per night',
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
            this.listingService.updateListingById(id, this.updateListing);
          }
        },
        {
          text: 'Delete Listing',
          role: 'delete',
          handler: data => {
            this.listingService.removeListing(id);
          }
        }
      ]
    });
    await alert.present();
  }

}
