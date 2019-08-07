import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
//XMLHttpRequest
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (authUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            //http functions are asynchronous; does not go line by line
            _this.http.post(environment.BaseURL + '/api/auth/login', authUser, { headers: headers }).subscribe(function (response) {
                //
                console.log(response.id);
                localStorage.setItem('userId', response.id);
                resolve(response);
                //
                // console.log(res);
                // localStorage.setItem('jwt', res.jwt);
                // localStorage.setItem('userId', JSON.stringify(res.user.id));
                // resolve(res);
            });
            (function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    ;
    AuthService.prototype.register = function (authUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.http.post(environment.BaseURL + '/api/auth/register', authUser, { headers: headers }).subscribe(function (response) {
                console.log(response.id);
                localStorage.setItem('userId', response.id);
                resolve(response);
            });
            (function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map