import { Component,EventEmitter, Input, Output,OnInit } from '@angular/core';
// import { Hero } from './hero';

@Component({
  selector: 'pagination',
  template: `
    <ul class="pagination" *ngIf="p_all_page>0">
      <li
        [class.disabled]="currentnum==1"
       ><a href="javascript:;" (click)="page_index()">首页</a></li>
      <li *ngFor="let page of pages"
         [class.active]="currentnum ==page" 
         (click)="load_page(page)"
      ><a href="javascript:;">{{page}}</a></li>

      <li 
        [class.disabled]="currentnum==p_all_page"
      ><a href="javascript:;" (click)="page_last()">尾页</a></li>
  </ul>
  `
})
export class PageComponent implements OnInit{
  @Output() list= new EventEmitter();
  @Input() currentnum:number;
  @Input() p_all_page:number;
  pages=[];
  //currentnum=1; //当前页码
  //p_all_page=0;  //总页码

  ngOnInit(): void {
  }
  load_page(page:number):void{
    console.log(page)
    this.list.emit(page);
  }
  ngOnChanges(){

  }
  page_index():void{
    this.load_page(1);
  }
  page_last():void{
    this.load_page(this.p_all_page);
  }
  //初始化页码  
  reloadPno(){
    this.pages=this.calculateIndexes(this.currentnum,this.p_all_page,8);
  }
  // 分页算法
  //当前第几页
  //每一页多少条
  //分页显示几个数字
  calculateIndexes(current:number, length:number, displayLength:number){
    console.log(arguments)
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
      console.log(indexes)
      return indexes;  
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/