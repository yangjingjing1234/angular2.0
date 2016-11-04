import { Component, OnInit ,Input}      from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location }               from '@angular/common';

import { jkrlbService } from './jkrlb.service';
import { JqrConfig } from '../public-config';

@Component({
  moduleId: module.id,
  selector: 'my-jkrlb-detail',
  templateUrl: '../../html/jkrlb-detail.component.html',
  //styleUrls: [ '/crm_tpl/dist/css/jkrliststyle.css' ]
})
export class JkrlbDetailComponent implements OnInit {

  herodetail={
    'borrowUserBaseInfo':{},
    'borrowUserBorrowTargetList':[],
    'borrowUserFundsInfo':{}
  };

  constructor(
    private jkrlbService: jkrlbService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {

    let taburl=this.router.currentRouterState.snapshot.url;
    JqrConfig.currenttaburl=taburl;
    JqrConfig.tab_contentfn(taburl,'借款人列表详情')
    console.log(JqrConfig.tab_content)
    console.log(JqrConfig.currenttaburl)

    

    this.route.params.forEach((params: Params) => {
      let id = +params['id'];

      this.jkrlbService.getjkrdetail(id)
        .then(hero => {
          this.herodetail = hero;
          console.log(this.herodetail);
          console.log(this.herodetail.borrowUserFundsInfo)
        },
        error =>  {console.log(error);console.log('222')});
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