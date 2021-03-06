
export const JqrConfig: any = {
   pub_p_pernum:10,//分页每一页请求个数
   locationhttp:'http://172.30.22.234:8066',
   onlinehttp:'http://123.124.21.142:8086',
   //流水url上数字一一对应不能改变。当url能带字符串参数的时候 就省很多事了 
   liushuitypedata:['withdrawList','rechargeList','freezeList','advanceList','fundsList','bankCardList'],
   //订单查询上数字一一对应关系
   ordertypedata:['rechargeOrderList','idcardAuthenticationList','loginRecordList','authenticationList'],
   tab_content:[],//导航头部的tab切换
   currenttaburl:'',
   tab_contentfn:function(url,title){  //当前url,需要创建的title
    let tabpush=true;
    for(var i= 0, l = this.tab_content.length; i< l; i++){
      if(this.tab_content[i].url == this.currenttaburl){
          tabpush = false;
      }
    }
    if(tabpush){
          this.tab_content.push({
          name:title,
          url:url
        });  
    }
   },
   islogin:function(token){
		console.log(token)
   }
};