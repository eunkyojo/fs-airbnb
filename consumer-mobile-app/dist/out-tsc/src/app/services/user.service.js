import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
var UserService = /** @class */ (function () {
    // public user: User = new User();
    function UserService(navCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
    }
    //CRUD for users
    UserService.prototype.createUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .post('http://localhost:8100/api/users/', JSON.stringify(user))
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    UserService.prototype.getAllUsers = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get('http://localhost:8100/api/users/')
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    UserService.prototype.getUserById = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get("http://localhost:8100/api/users/" + userId)
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    UserService.prototype.updateUserById = function (userId, updateUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .patch("http://localhost:8100/api/users/" + userId, JSON.stringify(updateUser))
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    UserService.prototype.removeUser = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .delete("http://localhost:8100/api/users/" + userId)
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map