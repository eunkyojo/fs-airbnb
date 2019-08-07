import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
    { path: 'tab4', loadChildren: './pages/tab4/tab4.module#Tab4PageModule' },
    { path: 'tab5', loadChildren: './pages/tab5/tab5.module#Tab5PageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map