import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { reject } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public email: string;
  public password: string;
  public users: any;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private alertCtrl: AlertController,
    private authService: AuthService
  ) { 
  }

  ngOnInit() {
  }

  toregister() {
    this.navCtrl.navigateForward('register')
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    const authUser = {
      "email": this.email,
      "password": this.password
    };
    console.log(JSON.stringify(authUser));
    this.authService.login(authUser).then(res => {
      const userId = localStorage.getItem('userId');
      console.log(userId);

      this.navCtrl.navigateForward('tabs');
    })
    .catch(err => {
      console.log(err)
    });
  }

}
