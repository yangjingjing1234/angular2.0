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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var jkrlb_service_1 = require('./jkrlb.service');
var JkrlbiaoDetailComponent = (function () {
    function JkrlbiaoDetailComponent(jkrlbService, route, location) {
        this.jkrlbService = jkrlbService;
        this.route = route;
        this.location = location;
        this.herobiaodetail = {
            'baseInfo': {},
            'auditRecord': [],
            'callVisitRecordList': [],
            'emergencyContactList': [],
            'repaymentPlanList': [] //还款计划
        };
        this.id = 1; //用户id
        this.num = 1; //第几个借款标
    }
    JkrlbiaoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
            _this.num = +params['num'];
            _this.jkrlbService.getbiaoinfo(_this.id, _this.num)
                .then(function (hero) {
                _this.herobiaodetail = hero;
                console.log(_this.herobiaodetail);
                console.log(_this.herobiaodetail.callVisitRecordList);
            }, function (error) {
                if (!error.ok) {
                    _this.location.back();
                }
            });
        });
    };
    // gotobiaoDetail(hero: any): void {
    //   this.selectedHero = hero;
    //   console.log( this.selectedHero.uid)
    //   this.router.navigate(['/biao', this.selectedHero.uid]);
    //   //生成路由的 链接参数数组
    // }
    JkrlbiaoDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    JkrlbiaoDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-jkrlbiao-detail',
            templateUrl: '../../html/jkrlbiao-detail.component.html',
        }), 
        __metadata('design:paramtypes', [jkrlb_service_1.jkrlbService, router_1.ActivatedRoute, common_1.Location])
    ], JkrlbiaoDetailComponent);
    return JkrlbiaoDetailComponent;
}());
exports.JkrlbiaoDetailComponent = JkrlbiaoDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=jkrlbiao-detail.component.js.map