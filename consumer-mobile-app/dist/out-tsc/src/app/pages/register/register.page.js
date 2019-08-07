import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.tologin = function () {
        this.navCtrl.navigateForward('login');
    };
    RegisterPage.prototype.register = function () {
        var newUser = new User(this.name, this.email, this.password, "user");
        this.authService.register(newUser);
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AuthService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
// import { Component, OnInit } from '@angular/core';
// import { ModalController, NavController } from '@ionic/angular';
// import { LoginPage } from '../login/login.page';
// import { AuthService } from 'src/app/services/auth.service';
// import { NgForm } from '@angular/forms';
// import { AlertService } from 'src/app/services/alert.service';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.page.html',
//   styleUrls: ['./register.page.scss'],
// })
// export class RegisterPage implements OnInit {
//   constructor(private modalController: ModalController,
//     private authService: AuthService,
//     private navCtrl: NavController,
//     private alertService: AlertService
//   ) { }
//   ngOnInit() {
//   }
//   // Dismiss Register Modal
//   dismissRegister() {
//     this.modalController.dismiss();
//   }
//   // On Login button tap, dismiss Register modal and open login Modal
//   async loginModal() {
//     this.dismissRegister();
//     const loginModal = await this.modalController.create({
//       component: LoginPage,
//     });
//     return await loginModal.present();
//   }
//   register(form: NgForm) {
//     this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
//       data => {
//         this.authService.login(form.value.email, form.value.password).subscribe(
//           data => {
//           },
//           error => {
//             console.log(error);
//           },
//           () => {
//             this.dismissRegister();
//             this.navCtrl.navigateRoot('/dashboard');
//           }
//         );
//         this.alertService.presentToast(data['message']);
//       },
//       error => {
//         console.log(error);
//       },
//       () => {
//       }
//     );
//   }
// }
//# sourceMappingURL=register.page.js.map