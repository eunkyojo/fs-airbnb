import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab5Page } from './tab5.page';
var routes = [
    {
        path: '',
        component: Tab5Page
    }
];
var Tab5PageModule = /** @class */ (function () {
    function Tab5PageModule() {
    }
    Tab5PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Tab5Page]
        })
    ], Tab5PageModule);
    return Tab5PageModule;
}());
export { Tab5PageModule };
//# sourceMappingURL=tab5.module.js.map