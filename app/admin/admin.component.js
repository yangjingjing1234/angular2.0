"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var public_config_1 = require('../public-config');
var router_1 = require('@angular/router');
var AdminComponent = (function () {
    function AdminComponent(router) {
        this.router = router;
        this.tab_content = public_config_1.JqrConfig.tab_content;
        this.currenttaburl = public_config_1.JqrConfig.currenttaburl;
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent.prototype.delecttab = function (url) {
        console.log(url);
        console.log(this.tab_content);
        console.log(this.tab_content.length);
        for (var i = 0, l = public_config_1.JqrConfig.tab_content.length; i < l; i++) {
            if (public_config_1.JqrConfig.tab_content[i].url == url) {
                public_config_1.JqrConfig.tab_content.splice(i, 1);
                break;
            }
        }
        console.log(this.tab_content);
        console.log(public_config_1.JqrConfig.tab_content[public_config_1.JqrConfig.tab_content.length - 1]);
        //this.router.navigate(JqrConfig.tab_content[JqrConfig.tab_content.length-1].url);
    };
    AdminComponent = __decorate([
        core_1.Component({
            templateUrl: '../../html/nav.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=admin.component.js.map