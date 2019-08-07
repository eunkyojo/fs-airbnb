import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, userService, alertCtrl, authService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.toregister = function () {
        this.navCtrl.navigateForward('register');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var authUser = {
            email: this.email,
            password: this.password
        };
        this.authService.login(authUser).then(function (res) {
            // const jwt = localStorage.getItem('jwt');
            var userId = localStorage.getItem('userid');
            console.log(userId);
            _this.navCtrl.navigateForward('tabs/tab1', {
            // queryParams: {
            //   user: res
            // }
            });
        })
            .catch(function (err) {
            // this.presentAlert(err);
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            UserService,
            AlertController,
            AuthService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
// import { Component, OnInit } from '@angular/core';
// import { ModalController, NavController } from '@ionic/angular';
// import { RegisterPage } from '../register/register.page';
// import { NgForm } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';
// import { AlertService } from 'src/app/services/alert.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {
//   userService: any;
//   constructor(
//     private modalController: ModalController,
//     private authService: AuthService,
//     private navCtrl: NavController,
//     private alertService: AlertService
//   ) { }
//   ngOnInit() {
//   }
//   // Dismiss Login Modal
//   dismissLogin() {
//     this.modalController.dismiss();
//   }
//   // On Register button tap, dismiss login modal and open register modal
//   async registerModal() {
//     this.dismissLogin();
//     const registerModal = await this.modalController.create({
//       component: RegisterPage
//     });
//     return await registerModal.present();
//   }
//   login(form: NgForm) {
//     this.authService.login(form.value.email, form.value.password).subscribe(
//       data => {
//         this.alertService.presentToast("Logged In");
//       },
//       error => {
//         console.log(error);
//       },
//       () => {
//         this.dismissLogin();
//         this.navCtrl.navigateRoot('/dashboard');
//       }
//     );
//   }
//   getUsers(){
//     this.userService.getAllUsers().then(res=>{
//       //login
//     }).catch(err=>{console.log(err)})
//   }
// }
//# sourceMappingURL=login.page.js.map