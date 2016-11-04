import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { jkrlbService } from './jkrlb.service';

@Component({
  moduleId: module.id,
  selector: 'my-jkrlbiao-detail',
  templateUrl: '../../html/jkrlbiao-detail.component.html',
  //styleUrls: [ '/crm_tpl/dist/css/jkrliststyle.css' ]
})

export class JkrlbiaoDetailComponent implements OnInit {
  herobiaodetail={
    'baseInfo':{},//基本信息
    'auditRecord':[],//审核记录
    'callVisitRecordList':[], //电话记录
    'emergencyContactList':[],//紧急联系人
    'repaymentPlanList':[] //还款计划
  };
  constructor(
    private jkrlbService: jkrlbService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  id= 1;  //用户id
  num=1; //第几个借款标
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
       this.id = +params['id'];
       this.num = +params['num'];

      this.jkrlbService.getbiaoinfo(this.id,this.num)
        .then(hero => {
          this.herobiaodetail = hero;
          console.log(this.herobiaodetail);
          console.log(this.herobiaodetail.callVisitRecordList)
        },
        error =>  {
          if(!error.ok){
            this.location.back();
          }
        });
    });


  }

  // gotobiaoDetail(hero: any): void {
  //   this.selectedHero = hero;
  //   console.log( this.selectedHero.uid)
  //   this.router.navigate(['/biao', this.selectedHero.uid]);
  //   //生成路由的 链接参数数组

  // }
  goBack(): void {
    this.location.back();
  }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/