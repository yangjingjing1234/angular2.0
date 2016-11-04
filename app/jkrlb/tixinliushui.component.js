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
var page_component_1 = require('../page.component');
var public_config_1 = require('../public-config');
var TixianLiushuiComponent = (function () {
    function TixianLiushuiComponent(jkrlbService, route, router, location) {
        this.jkrlbService = jkrlbService;
        this.route = route;
        this.router = router;
        this.location = location;
        //heroes:Hero[]= [];
        // selectedHero:Hero;
        this.p_pernum = public_config_1.JqrConfig.pub_p_pernum; //每次请求数据个数
        this.heroes = [];
        this.submitted = false; //是否已经提交
        this.nulldata = false;
        this.id = 1;
        this.type = 1;
        this.herobiaodetail = {};
    }
    TixianLiushuiComponent.prototype.list = function (id, type, page, p_pernum, value) {
        var _this = this;
        if (p_pernum === void 0) { p_pernum = this.p_pernum; }
        if (!page) {
            return;
        }
        this.jkrlbService.gettxls(id, type, page, p_pernum, value)
            .then(function (hero) {
            console.log(type);
            console.log(public_config_1.JqrConfig.liushuitypedata[type - 1]);
            _this.heroes = [];
            if (hero[public_config_1.JqrConfig.liushuitypedata[type - 1]].length > 0) {
                _this.heroes = hero[public_config_1.JqrConfig.liushuitypedata[type - 1]];
                _this.nulldata = false;
            }
            else {
                _this.nulldata = true;
            }
            _this.selectedHero = null;
            _this.PageComponenttag.currentnum = page;
            _this.PageComponenttag.p_all_page = hero['totalPage'];
            _this.PageComponenttag.reloadPno();
        });
    };
    TixianLiushuiComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(public_config_1.JqrConfig.tab_content);
        var taburl = this.router.currentRouterState.snapshot.url;
        public_config_1.JqrConfig.currenttaburl = taburl;
        public_config_1.JqrConfig.tab_contentfn(taburl, '流水详情');
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
            _this.type = +params['type'];
            //alert(id+"======");
            //alert(this.type+"======");
            //   this.jkrlbService.getjkrdetail(id)
            //     .then(hero => {
            //       this.herobiaodetail = hero;
            //       console.log(this.herobiaodetail);
            //       console.log(this.herobiaodetail.uname)
            //     });
        });
        console.log(this.id);
        console.log(this.type);
        this.list(this.id, this.type, 1, this.p_pernum);
    };
    TixianLiushuiComponent.prototype.onSubmit = function () {
        var value = $('form').serialize();
        console.log(value);
        this.list(this.id, this.type, 1, this.p_pernum, value);
    };
    __decorate([
        core_1.ViewChild(page_component_1.PageComponent), 
        __metadata('design:type', page_component_1.PageComponent)
    ], TixianLiushuiComponent.prototype, "PageComponenttag", void 0);
    TixianLiushuiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-tixinliushui',
            templateUrl: '../../html/fundinfo/tixianliushui.component.html',
        }), 
        __metadata('design:paramtypes', [jkrlb_service_1.jkrlbService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], TixianLiushuiComponent);
    return TixianLiushuiComponent;
}());
exports.TixianLiushuiComponent = TixianLiushuiComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=tixinliushui.component.js.map