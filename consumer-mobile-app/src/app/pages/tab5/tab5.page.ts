import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  user: User;

  constructor(
    private userService : UserService
  ) { 
    this.userService.getUserById(localStorage.getItem("userId")).then((response: any) => {
      console.log(JSON.stringify(response))
      this.user = response[0]
    })
   }

  ngOnInit() {
  }

}
