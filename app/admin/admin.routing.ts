import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { AdminComponent }           from './admin.component';
import {JkrlbComponent}  from '../jkrlb/jkrlb.component';
import {JkrlbDetailComponent}  from '../jkrlb/jkrlb-detail.component';
import {JkrlbiaoDetailComponent}  from '../jkrlb/jkrlbiao-detail.component';
import {TixianLiushuiComponent}  from '../jkrlb/tixinliushui.component';
import {DingDanComponent}  from '../jkrlb/dingdan.component';

import {PageNotFindComponent} from '../pagenotfound.component';

import { AuthGuard }                from '../auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: '', component: JkrlbComponent },
          { path: 'jkrlb', component: JkrlbComponent },
          { path: 'jkrlb/:id', component: JkrlbDetailComponent },
          { path: 'jkrlb/:id/:num', component: JkrlbiaoDetailComponent },
          { path: 'flowing/:id/:type', component: TixianLiushuiComponent },
          { path: 'order/:id/:type', component: DingDanComponent },
          { path: '404', component: PageNotFindComponent },
          { path: '**', component: PageNotFindComponent }
          
        ]
      }
    ]
  }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/