import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {AdminComponent }           from './admin.component';
import {JkrlbComponent}  from '../jkrlb/jkrlb.component';
import {JkrlbDetailComponent}  from '../jkrlb/jkrlb-detail.component';
import {JkrlbiaoDetailComponent}  from '../jkrlb/jkrlbiao-detail.component';
import {TixianLiushuiComponent}  from '../jkrlb/tixinliushui.component';
import {DingDanComponent}  from '../jkrlb/dingdan.component';

import {jkrlbService } from '../jkrlb/jkrlb.service';

import {PageComponent} from '../page.component';
import {PageNotFindComponent} from '../pagenotfound.component';


import { adminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    adminRouting
  ],
  declarations: [
    AdminComponent,
    JkrlbComponent,
    JkrlbDetailComponent,
    JkrlbiaoDetailComponent,
    PageComponent,
    TixianLiushuiComponent,
    DingDanComponent,
    PageNotFindComponent
  ],
   providers: [
    jkrlbService
  ],
})
export class AdminModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/