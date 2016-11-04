import { Component ,OnInit } from '@angular/core';
import { JqrConfig } from '../public-config';
import { Router} from '@angular/router';

@Component({
  templateUrl: '../../html/nav.html',
})
export class AdminComponent implements OnInit{
	tab_content=JqrConfig.tab_content;
	currenttaburl=JqrConfig.currenttaburl;
	constructor(
    private router: Router
  ) {}
	ngOnInit(){}

	delecttab(url){
     console.log(url);
     console.log(this.tab_content)
     console.log(this.tab_content.length)
     for(var i= 0, l = JqrConfig.tab_content.length; i< l; i++){
      if(JqrConfig.tab_content[i].url == url){
          JqrConfig.tab_content.splice(i,1);
          break;
      }
     }
     console.log(this.tab_content)
     console.log(JqrConfig.tab_content[JqrConfig.tab_content.length-1])
      //this.router.navigate(JqrConfig.tab_content[JqrConfig.tab_content.length-1].url);
	}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/