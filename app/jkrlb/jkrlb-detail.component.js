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
var public_config_1 = require('../public-config');
var JkrlbDetailComponent = (function () {
    function JkrlbDetailComponent(jkrlbService, route, router, location) {
        this.jkrlbService = jkrlbService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.herodetail = {
            'borrowUserBaseInfo': {},
            'borrowUserBorrowTargetList': [],
            'borrowUserFundsInfo': {}
        };
    }
    JkrlbDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var taburl = this.router.currentRouterState.snapshot.url;
        public_config_1.JqrConfig.currenttaburl = taburl;
        public_config_1.JqrConfig.tab_contentfn(taburl, '借款人列表详情');
        console.log(public_config_1.JqrConfig.tab_content);
        console.log(public_config_1.JqrConfig.currenttaburl);
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.jkrlbService.getjkrdetail(id)
                .then(function (hero) {
                _this.herodetail = hero;
                console.log(_this.herodetail);
                console.log(_this.herodetail.borrowUserFundsInfo);
            }, function (error) { console.log(error); console.log('222'); });
        });
    };
    // gotobiaoDetail(hero: any): void {
    //   this.selectedHero = hero;
    //   console.log( this.selectedHero.uid)
    //   this.router.navigate(['/biao', this.selectedHero.uid]);
    //   //生成路由的 链接参数数组
    // }
    JkrlbDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    JkrlbDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-jkrlb-detail',
            templateUrl: '../../html/jkrlb-detail.component.html',
        }), 
        __metadata('design:paramtypes', [jkrlb_service_1.jkrlbService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], JkrlbDetailComponent);
    return JkrlbDetailComponent;
}());
exports.JkrlbDetailComponent = JkrlbDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=jkrlb-detail.component.js.map