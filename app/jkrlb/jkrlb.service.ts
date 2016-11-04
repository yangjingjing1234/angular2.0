import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';//搜索的时候用
import 'rxjs/add/operator/toPromise';//ajax请求返回的时候用

import { JqrConfig } from '../public-config';

@Injectable()
export class jkrlbService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
  private heroesUrl =  JqrConfig.locationhttp+'/borrow_user/borrow_user_info';  // 借款人查看详情
  private heroesUrl2 = JqrConfig.locationhttp+'/borrow_user/borrow_user_list';  // 借款人列表

  private heroesUrl31 = JqrConfig.locationhttp+'/borrow_user/withdraw_list';  // 提现流水
  private heroesUrl32 = JqrConfig.locationhttp+'/borrow_user/recharge_list';  // 充值流水
  private heroesUrl33 = JqrConfig.locationhttp+'/borrow_user/freeze_list';    // 冻结流水
  private heroesUrl34 = JqrConfig.locationhttp+'/borrow_user/advance_list';  // 垫付流水
  private heroesUrl35 = JqrConfig.locationhttp+'/borrow_user/funds_list';  // 资金流水
  private heroesUrl36 = JqrConfig.locationhttp+'/borrow_user/bankcard_list';  // 银行卡查询


  private heroesUrl51 = JqrConfig.locationhttp+'/borrow_user/recharge_order_list';  // 充值订单
  private heroesUrl52 = JqrConfig.locationhttp+'/borrow_user/idcard_authentication_list';  // 身份认证记录查询
  private heroesUrl53 = JqrConfig.locationhttp+'/borrow_user/login_record_list';  // 登录信息
  private heroesUrl54 = JqrConfig.locationhttp+'/borrow_user/authentication_list';  // 登录信息


  private heroesUrl6 = JqrConfig.locationhttp+'/borrow_target/borrow_target_info';  // 借款标信息

  constructor(private http: Http) { }

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
  getHeroes(pagenumber:number,length:number,value?:any): Promise<any[]> {
    let creds = "pageSize=" + length + "&pageNo=" + pagenumber;
    creds=value?(creds+'&'+value):creds;
    return this.http.post(this.heroesUrl2,creds,{headers: this.headers})
               .toPromise()
               .then(response => response.json().data as Object)
               .catch(this.handleError);
  }
  // 请求查看详情数据
  getjkrdetail(id: number): Promise<any> {
    let creds = "uid=" + id;          
    return this.http.post(this.heroesUrl,creds,{headers: this.headers})
               .toPromise()
               .then(response =>response.json().data.borrowUserInfo as Object)
               //.then(response =>response.json().data.borrowUserInfoRespVo.borrowUserBaseInfo )
               .catch(this.handleError);
  }
  // 体现流水
  //用户uid ，列表类型， 请求第几页，每次请求个数，查询传递参数
  gettxls(id: number,type:number,pagenumber:number,length:number,value?:any): Promise<any> {

    let url=this.heroesUrl31;
    let creds = "uid=" + id+"&pageSize=" + length + "&pageNo=" + pagenumber;
    creds=value?(creds+'&'+value):creds;
    if(type==1){
      url=this.heroesUrl31
    }else if(type==2){
      url=this.heroesUrl32
    }else if(type==3){
      url=this.heroesUrl33
    }else if(type==4){
      url=this.heroesUrl34
    }else if(type==5){
      url=this.heroesUrl35
    }else if(type==6){
      url=this.heroesUrl36
    }else {
      url=this.heroesUrl31
    }

    return this.http.post(url,creds,{headers: this.headers})
               .toPromise()
               .then(response =>response.json().data as Object)
               //.then(response =>response.json().data.borrowUserInfoRespVo.borrowUserBaseInfo )
               .catch(this.handleError);
  }
  // 订单查询
  getdingdan(id: number,type:number,pagenumber:number,length:number,value?:any): Promise<any> {
    let url=this.heroesUrl51;
    let creds = "uid=" + id+"&pageSize=" + length + "&pageNo=" + pagenumber;
    creds=value?(creds+'&'+value):creds;
    if(type==1){
      url=this.heroesUrl51
    }else if(type==2){
      url=this.heroesUrl52
    }else if(type==3){
      url=this.heroesUrl53
    }else if(type==4){
      url=this.heroesUrl54
    }
    console.log(url)
    return this.http.post(url,creds,{headers: this.headers})
               .toPromise()
               .then(response =>response.json().data as Object)
               //.then(response =>response.json().data.borrowUserInfoRespVo.borrowUserBaseInfo )
               .catch(this.handleError);
  }
  // 借款标信息
  getbiaoinfo(id: number,num:number): Promise<any> {

    let creds = "uid=" + id+"&targetId="+num;

    return this.http.post(this.heroesUrl6,creds,{headers: this.headers})
               .toPromise()
               .then(response =>response.json().data.borrowTargetInfo as Object)
               //.then(response =>response.json().data.borrowUserInfoRespVo.borrowUserBaseInfo )
               .catch(this.handleError);
  }
  // getjkrlbsearch(pagenumber:number,length:number,value:any): Promise<any[]> {
  //   console.log(value)

  //   let creds = "pageSize=" + length + "&pageNo=" + pagenumber+'&'+value;

  //   return this.http.post(this.heroesUrl2,creds,{headers: this.headers})
  //              .toPromise()
  //              .then(response => response.json().data as Object)
  //              .catch(this.handleError);
  // }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/