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
// import '/third-party/jquery-1.10.1.min.js'; 
//AppComponent 组件应该只处理导航。 我们来把 英雄列表 的显示职责，从 AppComponent 移到 HeroesComponent 组件中。
var JkrlbComponent = (function () {
    function JkrlbComponent(router, location, jkrlbService) {
        this.router = router;
        this.location = location;
        this.jkrlbService = jkrlbService;
        //heroes:Hero[]= [];
        // selectedHero:Hero;
        this.p_pernum = public_config_1.JqrConfig.pub_p_pernum; //每次请求数据个数
        this.heroes = [];
        this.submitted = false; //是否已经提交
        this.nulldata = false;
    }
    // getHeroes(): void {
    //   this.jkrlbService.getHeroes().then(heroes => this.heroes = heroes);
    // }
    JkrlbComponent.prototype.list = function (page, p_pernum, value) {
        var _this = this;
        if (p_pernum === void 0) { p_pernum = this.p_pernum; }
        if (!page) {
            return;
        }
        this.jkrlbService.getHeroes(page, p_pernum, value)
            .then(function (hero) {
            console.log(hero['borrowUserList']);
            _this.heroes = [];
            if (hero['borrowUserList'].length > 0) {
                _this.heroes = hero['borrowUserList'];
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
    JkrlbComponent.prototype.ngOnInit = function () {
        var num = this.router.currentRouterState.snapshot.url.indexOf('?');
        var url = this.router.currentRouterState.snapshot.url;
        console.log(url);
        if (num != -1) {
            console.log(url);
            url = url.substring(0, num);
        }
        public_config_1.JqrConfig.currenttaburl = url;
        this.router.currentRouterState.snapshot.url = url;
        public_config_1.JqrConfig.tab_contentfn(url, '借款人列表');
        console.log(public_config_1.JqrConfig.tab_content);
        console.log(public_config_1.JqrConfig.currenttaburl);
        console.log(public_config_1.JqrConfig.tab_content[0].url == public_config_1.JqrConfig.currenttaburl);
        this.list(1, this.p_pernum);
        $('.form_datetime').datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            pickerPosition: "bottom-left"
        });
    };
    JkrlbComponent.prototype.onSelect = function (hero) {
        //console.log(111)
        this.selectedHero = hero;
    };
    JkrlbComponent.prototype.gotoDetail = function (hero) {
        //console.log(222);
        this.selectedHero = hero;
        console.log(this.selectedHero.uid);
        this.router.navigate(['./admin/jkrlb', this.selectedHero.uid]);
        //生成路由的 链接参数数组
    };
    JkrlbComponent.prototype.onSubmit = function () {
        var value = $('form').serialize();
        console.log(value);
        this.list(1, this.p_pernum, value);
    };
    __decorate([
        core_1.ViewChild(page_component_1.PageComponent), 
        __metadata('design:type', page_component_1.PageComponent)
    ], JkrlbComponent.prototype, "PageComponenttag", void 0);
    JkrlbComponent = __decorate([
        core_1.Component({
            selector: 'jkrlb',
            templateUrl: 'html/jkrlb.component.html',
            //styleUrls: ['crm_tpl/dist/css/jkrliststyle.css'],
            providers: [jkrlb_service_1.jkrlbService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, jkrlb_service_1.jkrlbService])
    ], JkrlbComponent);
    return JkrlbComponent;
}());
exports.JkrlbComponent = JkrlbComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=jkrlb.component.js.map