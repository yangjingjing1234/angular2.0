import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginRoutes,
         authProviders }      from './login.routing';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard }          from './auth-guard.service';


const adminRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  }
];

const appRoutes: Routes = [


  ...loginRoutes,
  ...adminRoutes,
  {  //重定向默认显示仪表盘
    path:'',
    redirectTo:"/admin",
    pathMatch:'full'
  }

];

export const appRoutingProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];
// path: 路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /heroes 。

// component: 导航到此路由时，路由器需要创建的组件，如 HeroesComponent 。

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
//调用 forRoot 方法是因为要在应用程序根部提供配置好的路由。