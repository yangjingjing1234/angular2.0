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
// import { Hero } from './hero';
var PageComponent = (function () {
    function PageComponent() {
        this.list = new core_1.EventEmitter();
        this.pages = [];
    }
    //currentnum=1; //当前页码
    //p_all_page=0;  //总页码
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.load_page = function (page) {
        console.log(page);
        this.list.emit(page);
    };
    PageComponent.prototype.ngOnChanges = function () {
    };
    PageComponent.prototype.page_index = function () {
        this.load_page(1);
    };
    PageComponent.prototype.page_last = function () {
        this.load_page(this.p_all_page);
    };
    //初始化页码  
    PageComponent.prototype.reloadPno = function () {
        this.pages = this.calculateIndexes(this.currentnum, this.p_all_page, 8);
    };
    // 分页算法
    //当前第几页
    //每一页多少条
    //分页显示几个数字
    PageComponent.prototype.calculateIndexes = function (current, length, displayLength) {
        console.log(arguments);
        var indexes = [];
        var start = Math.round(current - displayLength / 2);
        var end = Math.round(current + displayLength / 2);
        if (start <= 1) {
            start = 1;
            end = start + displayLength - 1;
            if (end >= length - 1) {
                end = length - 1;
            }
        }
        if (end >= length - 1) {
            end = length;
            start = end - displayLength + 1;
            if (start <= 1) {
                start = 1;
            }
        }
        for (var i = start; i <= end; i++) {
            indexes.push(i);
        }
        console.log(indexes);
        return indexes;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PageComponent.prototype, "list", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PageComponent.prototype, "currentnum", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PageComponent.prototype, "p_all_page", void 0);
    PageComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            template: "\n    <ul class=\"pagination\" *ngIf=\"p_all_page>0\">\n      <li\n        [class.disabled]=\"currentnum==1\"\n       ><a href=\"javascript:;\" (click)=\"page_index()\">\u9996\u9875</a></li>\n      <li *ngFor=\"let page of pages\"\n         [class.active]=\"currentnum ==page\" \n         (click)=\"load_page(page)\"\n      ><a href=\"javascript:;\">{{page}}</a></li>\n\n      <li \n        [class.disabled]=\"currentnum==p_all_page\"\n      ><a href=\"javascript:;\" (click)=\"page_last()\">\u5C3E\u9875</a></li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=page.component.js.map