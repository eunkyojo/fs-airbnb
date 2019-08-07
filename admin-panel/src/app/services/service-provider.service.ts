import { Injectable } from '@angular/core';
import { ServiceProvider } from '../models/service-provider';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  serviceProviders: Array<ServiceProvider>;

  constructor() { 

    this.serviceProviders = [
      {
        name: 'Jane',
        lastName: 'Doe',
        email: 'jane@mail.com',
        cellPhone: 123451350,
        numberOfListings: 5
      },
      {
        name: 'Tori',
        lastName: 'Kelly',
        email: 'tori@mail.com',
        cellPhone: 123451359,
        numberOfListings: 12
      },
    ];

  }

  getServiceProviders(): Array<ServiceProvider> {
    return this.serviceProviders;
  }
}
