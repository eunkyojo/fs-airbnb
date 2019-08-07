import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  navItems: Array<any> = [
    {
      name: 'Home',
      route: '/dash-board'
    },
    {
      name: 'Users',
      route: '/users'
    },
    {
      name: 'Service Provider',
      route: '/service-provider'
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/users']);
  }

  navTo(page) {
    this.router.navigate([page.route]);
  }

}
