import { Component } from '@angular/core';
import { Listing } from '../../models/listing';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name : string;
  description : string;
  location : string;
  pricePerNight : number;
  imageUrl : string;


  constructor(
    private listingService : ListingService
  ) {}

  newlisting() {
    let newListing = new Listing()
    this.listingService.createListing(newListing).then(res => {
      const listingId = localStorage.getItem('listingId')
    })
    .catch(err => {
      console.log(err)
    });
  }

}
