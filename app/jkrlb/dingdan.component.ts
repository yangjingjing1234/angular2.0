import { Component ,OnInit,ViewChild, AfterViewInit  }      from '@angular/core';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { Location }               from '@angular/common';

import { jkrlbService } from './jkrlb.service';
import {PageComponent} from '../page.component';
import { JqrConfig } from '../public-config';
declare var $: any;
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'my-dingdan',
  templateUrl: '../../html/personalInfo/dingdan.component.html',
  //styleUrls: [ '/crm_tpl/dist/css/jkrliststyle.css' ]
})

export class DingDanComponent implements OnInit {
  @ViewChild(PageComponent)
  private PageComponenttag: PageComponent;
  //heroes:Hero[]= [];
 // selectedHero:Hero;
  p_pernum=JqrConfig.pub_p_pernum;//每次请求数据个数
  selectedHero: any;
  heroes=[];
  submitted = false;//是否已经提交
  nulldata=false;
  id= 1;
  type=1;

  herobiaodetail={};
  constructor(
    private jkrlbService: jkrlbService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  list(id: number,type:number,page:number,p_pernum=this.p_pernum,value?:string):void{
    console.log(type);
    if(!page){
      return;
    }
    this.jkrlbService.getdingdan(id,type,page,p_pernum,value)
     .then(hero=>{
       console.log(hero)
       console.log(JqrConfig.ordertypedata[type-1])
       console.log(hero[JqrConfig.ordertypedata[type-1]]);
       this.heroes=[];
       if(hero[JqrConfig.ordertypedata[type-1]].length>0){
            this.heroes=hero[JqrConfig.ordertypedata[type-1]];
            this.nulldata=false;
       }else{
            this.nulldata=true;
       }

       this.selectedHero = null;
       this.PageComponenttag.currentnum=page;
       this.PageComponenttag.p_all_page=hero['totalPage'];
       this.PageComponenttag.reloadPno();
     })
  }

  ngOnInit(): void {
    console.log(JqrConfig.tab_content)

     let taburl=this.router.currentRouterState.snapshot.url;
     JqrConfig.currenttaburl=taburl;
    JqrConfig.tab_contentfn(taburl,'订单查询')

    this.route.params.forEach((params: Params) => {
        this.id = +params['id'];
        this.type = +params['type'];
     });

    this.list(this.id,this.type,1,this.p_pernum)

  }

  onSubmit():void{
     let value=$('form').serialize();
     console.log(value)
     this.list(this.id,this.type,1,this.p_pernum,value)
  }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/