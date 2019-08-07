import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name : string;
  email : string;
  password : string;

  constructor(
    private navCtrl : NavController,
    private authService : AuthService
  ) { }

  ngOnInit() {
  }

  tologin() {
    this.navCtrl.navigateForward('login')
  }

  register() {
    let newUser = new User(this.name, this.email, this.password, "provider")
    console.log(JSON.stringify(newUser));
    this.authService.register(newUser).then(res => {
      const userId = localStorage.getItem('userId');
      console.log(userId);
      this.navCtrl.navigateForward('');
    })
    .catch(err => {
      console.log(err)
    });
  }
}

