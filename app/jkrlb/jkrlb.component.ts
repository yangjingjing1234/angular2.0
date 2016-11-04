import { Component ,OnInit,ViewChild, AfterViewInit,Input } from '@angular/core';

import { Router,RouterStateSnapshot } from '@angular/router';
import { Location }               from '@angular/common';

import { jkrlbService } from './jkrlb.service';
import {PageComponent} from '../page.component';

import { JqrConfig } from '../public-config';

declare var $: any;
declare var jQuery: any;

// import '/third-party/jquery-1.10.1.min.js'; 
//AppComponent 组件应该只处理导航。 我们来把 英雄列表 的显示职责，从 AppComponent 移到 HeroesComponent 组件中。
@Component({
  selector: 'jkrlb',
  templateUrl:'html/jkrlb.component.html',
  //styleUrls: ['crm_tpl/dist/css/jkrliststyle.css'],
  providers: [jkrlbService]
})

export class JkrlbComponent implements OnInit {
  @ViewChild(PageComponent)
  private PageComponenttag: PageComponent;

  //heroes:Hero[]= [];
 // selectedHero:Hero;
  p_pernum=JqrConfig.pub_p_pernum;//每次请求数据个数
  selectedHero: any;
  heroes=[];
  submitted = false;//是否已经提交
  nulldata=false;

  constructor(
    private router: Router,
    private location: Location,
    private jkrlbService: jkrlbService) { 
  }

  // getHeroes(): void {
  //   this.jkrlbService.getHeroes().then(heroes => this.heroes = heroes);
  // }
  list(page:number,p_pernum=this.p_pernum,value?:string):void{
    if(!page){
      return;
    }
    this.jkrlbService.getHeroes(page,p_pernum,value)
     .then(hero=>{
       console.log(hero['borrowUserList']);
       this.heroes=[];
       if(hero['borrowUserList'].length>0){
            this.heroes=hero['borrowUserList'];
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
    let num=this.router.currentRouterState.snapshot.url.indexOf('?');
    let url=this.router.currentRouterState.snapshot.url;
      console.log(url)
    if(num!=-1){
      console.log(url)
      url=url.substring(0,num);

    }
    JqrConfig.currenttaburl=url;
    this.router.currentRouterState.snapshot.url=url;
    JqrConfig.tab_contentfn(url,'借款人列表');

        console.log(JqrConfig.tab_content)
     console.log(JqrConfig.currenttaburl)
     console.log(JqrConfig.tab_content[0].url==JqrConfig.currenttaburl)

    this.list(1,this.p_pernum);

      $('.form_datetime').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        pickerPosition: "bottom-left"
      });
  }

  onSelect(hero: any): void {
  	//console.log(111)
    this.selectedHero = hero;
  }

  gotoDetail(hero: any): void {
  	//console.log(222);

    this.selectedHero = hero;
    console.log( this.selectedHero.uid)
    this.router.navigate(['./admin/jkrlb', this.selectedHero.uid]);
    //生成路由的 链接参数数组

  }

  onSubmit():void{
     let value=$('form').serialize();
     console.log(value)
     this.list(1,this.p_pernum,value)
  }
 
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/