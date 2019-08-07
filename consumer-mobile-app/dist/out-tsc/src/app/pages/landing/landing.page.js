import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LandingPage.prototype.ngOnInit = function () {
    };
    LandingPage.prototype.tologin = function () {
        this.navCtrl.navigateForward('login');
    };
    LandingPage.prototype.toregister = function () {
        this.navCtrl.navigateForward('register');
    };
    LandingPage = tslib_1.__decorate([
        Component({
            selector: 'app-landing',
            templateUrl: './landing.page.html',
            styleUrls: ['./landing.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], LandingPage);
    return LandingPage;
}());
export { LandingPage };
//# sourceMappingURL=landing.page.js.map