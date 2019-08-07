import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider';
import { ServiceProviderService } from '../../services/service-provider.service'

import { GraphDataService } from '../../services/admin-panel/graph-data.service';

import { Graph } from '../../models/graph';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {

  serviceProviders: Array<ServiceProvider>;
  guestBookingLength: Graph = new Graph();

  constructor( 
    private spService: ServiceProviderService,
    private graphDataService: GraphDataService,
  ) {
    this.serviceProviders = this.spService.getServiceProviders();
   }

   barChartOptions = {
     scaleShowVerticalLines: false,
     responsive: true
   };
   
   barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   barChartType = 'bar';
   barChartLegend = true;
   barChartData = [
     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
   ];

   rentalGraphOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  rentalGraphLabels: Array<string>;
  rentalGraphType = 'bar';
  rentalGraphLegend = true;
  rentalGraphData: any;
  

  ngOnInit() {
    this.guestBookingLength = this.updateGraph(this.graphDataService.getLengthOfGuestBookings(), 'pie', 'Guest Booking Length');
    let rentalData = this.graphDataService.getTotalMonthlyRental();
    this.rentalGraphLabels = rentalData.xAxis;
    this.rentalGraphData = [{
    data: rentalData.data,
    label: rentalData.label,
  }];
  }

  updateGraph(data, type, title){
    let graph = new Graph();
    graph.data = [];
    graph.data.push(data);
    graph.labels = data.xAxis;
    graph.type = type;
    graph.title = title;
    return graph;
  }

}
