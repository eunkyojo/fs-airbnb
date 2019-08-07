import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { GraphDataService } from '../../services/admin-panel/graph-data.service';
import { Graph } from '../../models/graph';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  randomBookingLength: Graph = new Graph();

  constructor(
    private userService: UserService,
    private graphDataService: GraphDataService
  ) { 
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
    this.randomBookingLength = this.updateGraph(this.graphDataService.getRandomMonthlyBookingPieChart(), 'pie', 'Random Guest Booking Length');
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

  chartClicked({ event, active }: { event: MouseEvent, active: any[] }): void {
    // Data ID
    let index = (active[0]._index);
    // Data Label
    let field = this.randomBookingLength.labels[index];
    console.log("event:", event);
    console.log("active:", active);
  }11

}
