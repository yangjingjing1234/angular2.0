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
var common_1 = require('@angular/common');
var admin_component_1 = require('./admin.component');
var jkrlb_component_1 = require('../jkrlb/jkrlb.component');
var jkrlb_detail_component_1 = require('../jkrlb/jkrlb-detail.component');
var jkrlbiao_detail_component_1 = require('../jkrlb/jkrlbiao-detail.component');
var tixinliushui_component_1 = require('../jkrlb/tixinliushui.component');
var dingdan_component_1 = require('../jkrlb/dingdan.component');
var jkrlb_service_1 = require('../jkrlb/jkrlb.service');
var page_component_1 = require('../page.component');
var pagenotfound_component_1 = require('../pagenotfound.component');
var admin_routing_1 = require('./admin.routing');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                admin_routing_1.adminRouting
            ],
            declarations: [
                admin_component_1.AdminComponent,
                jkrlb_component_1.JkrlbComponent,
                jkrlb_detail_component_1.JkrlbDetailComponent,
                jkrlbiao_detail_component_1.JkrlbiaoDetailComponent,
                page_component_1.PageComponent,
                tixinliushui_component_1.TixianLiushuiComponent,
                dingdan_component_1.DingDanComponent,
                pagenotfound_component_1.PageNotFindComponent
            ],
            providers: [
                jkrlb_service_1.jkrlbService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=admin.module.js.map