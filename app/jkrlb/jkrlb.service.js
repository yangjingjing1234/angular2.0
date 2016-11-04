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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise'); //ajax请求返回的时候用
var public_config_1 = require('../public-config');
var jkrlbService = (function () {
    function jkrlbService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        this.heroesUrl = public_config_1.JqrConfig.locationhttp + '/borrow_user/borrow_user_info'; // 借款人查看详情
        this.heroesUrl2 = public_config_1.JqrConfig.locationhttp + '/borrow_user/borrow_user_list'; // 借款人列表
        this.heroesUrl31 = public_config_1.JqrConfig.locationhttp + '/borrow_user/withdraw_list'; // 提现流水
        this.heroesUrl32 = public_config_1.JqrConfig.locationhttp + '/borrow_user/recharge_list'; // 充值流水
        this.heroesUrl33 = public_config_1.JqrConfig.locationhttp + '/borrow_user/freeze_list'; // 冻结流水
        this.heroesUrl34 = public_config_1.JqrConfig.locationhttp + '/borrow_user/advance_list'; // 垫付流水
        this.heroesUrl35 = public_config_1.JqrConfig.locationhttp + '/borrow_user/funds_list'; // 资金流水
        this.heroesUrl36 = public_config_1.JqrConfig.locationhttp + '/borrow_user/bankcard_list'; // 银行卡查询
        this.heroesUrl51 = public_config_1.JqrConfig.locationhttp + '/borrow_user/recharge_order_list'; // 充值订单
        this.heroesUrl52 = public_config_1.JqrConfig.locationhttp + '/borrow_user/idcard_authentication_list'; // 身份认证记录查询
        this.heroesUrl53 = public_config_1.JqrConfig.locationhttp + '/borrow_user/login_record_list'; // 登录信息
        this.heroesUrl54 = public_config_1.JqrConfig.locationhttp + '/borrow_user/authentication_list'; // 登录信息
        this.heroesUrl6 = public_config_1.JqrConfig.locationhttp + '/borrow_target/borrow_target_info'; // 借款标信息
    }
    // getHeroes(): Promise<any> {
    //   return Promise.resolve(HEROES);
    // }
    // getHeroes(pagenumber:number,length:number): Promise<Hero[]> {
    //   return this.http.get(this.heroesUrl)
    //              .toPromise()
    //              .then(response => response.json().data as Hero[])
    //              .catch(this.handleError);
    // }
    // 请求第几页，每次请求个数，查询传递参数
    jkrlbService.prototype.getHeroes = function (pagenumber, length, value) {
        var creds = "pageSize=" + length + "&pageNo=" + pagenumber;
        creds = value ? (creds + '&' + value) : creds;
        return this.http.post(this.heroesUrl2, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // 请求查看详情数据
    jkrlbService.prototype.getjkrdetail = function (id) {
        var creds = "uid=" + id;
        return this.http.post(this.heroesUrl, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data.borrowUserInfo; })
            .catch(this.handleError);
    };
    // 体现流水
    //用户uid ，列表类型， 请求第几页，每次请求个数，查询传递参数
    jkrlbService.prototype.gettxls = function (id, type, pagenumber, length, value) {
        var url = this.heroesUrl31;
        var creds = "uid=" + id + "&pageSize=" + length + "&pageNo=" + pagenumber;
        creds = value ? (creds + '&' + value) : creds;
        if (type == 1) {
            url = this.heroesUrl31;
        }
        else if (type == 2) {
            url = this.heroesUrl32;
        }
        else if (type == 3) {
            url = this.heroesUrl33;
        }
        else if (type == 4) {
            url = this.heroesUrl34;
        }
        else if (type == 5) {
            url = this.heroesUrl35;
        }
        else if (type == 6) {
            url = this.heroesUrl36;
        }
        else {
            url = this.heroesUrl31;
        }
        return this.http.post(url, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // 订单查询
    jkrlbService.prototype.getdingdan = function (id, type, pagenumber, length, value) {
        var url = this.heroesUrl51;
        var creds = "uid=" + id + "&pageSize=" + length + "&pageNo=" + pagenumber;
        creds = value ? (creds + '&' + value) : creds;
        if (type == 1) {
            url = this.heroesUrl51;
        }
        else if (type == 2) {
            url = this.heroesUrl52;
        }
        else if (type == 3) {
            url = this.heroesUrl53;
        }
        else if (type == 4) {
            url = this.heroesUrl54;
        }
        console.log(url);
        return this.http.post(url, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // 借款标信息
    jkrlbService.prototype.getbiaoinfo = function (id, num) {
        var creds = "uid=" + id + "&targetId=" + num;
        return this.http.post(this.heroesUrl6, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data.borrowTargetInfo; })
            .catch(this.handleError);
    };
    // getjkrlbsearch(pagenumber:number,length:number,value:any): Promise<any[]> {
    //   console.log(value)
    //   let creds = "pageSize=" + length + "&pageNo=" + pagenumber+'&'+value;
    //   return this.http.post(this.heroesUrl2,creds,{headers: this.headers})
    //              .toPromise()
    //              .then(response => response.json().data as Object)
    //              .catch(this.handleError);
    // }
    jkrlbService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    jkrlbService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], jkrlbService);
    return jkrlbService;
}());
exports.jkrlbService = jkrlbService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=jkrlb.service.js.map