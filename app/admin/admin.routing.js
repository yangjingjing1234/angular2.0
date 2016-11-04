"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var jkrlb_component_1 = require('../jkrlb/jkrlb.component');
var jkrlb_detail_component_1 = require('../jkrlb/jkrlb-detail.component');
var jkrlbiao_detail_component_1 = require('../jkrlb/jkrlbiao-detail.component');
var tixinliushui_component_1 = require('../jkrlb/tixinliushui.component');
var dingdan_component_1 = require('../jkrlb/dingdan.component');
var pagenotfound_component_1 = require('../pagenotfound.component');
var auth_guard_service_1 = require('../auth-guard.service');
var adminRoutes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                children: [
                    { path: '', component: jkrlb_component_1.JkrlbComponent },
                    { path: 'jkrlb', component: jkrlb_component_1.JkrlbComponent },
                    { path: 'jkrlb/:id', component: jkrlb_detail_component_1.JkrlbDetailComponent },
                    { path: 'jkrlb/:id/:num', component: jkrlbiao_detail_component_1.JkrlbiaoDetailComponent },
                    { path: 'flowing/:id/:type', component: tixinliushui_component_1.TixianLiushuiComponent },
                    { path: 'order/:id/:type', component: dingdan_component_1.DingDanComponent },
                    { path: '404', component: pagenotfound_component_1.PageNotFindComponent },
                    { path: '**', component: pagenotfound_component_1.PageNotFindComponent }
                ]
            }
        ]
    }
];
exports.adminRouting = router_1.RouterModule.forChild(adminRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=admin.routing.js.map