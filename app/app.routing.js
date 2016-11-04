"use strict";
var router_1 = require('@angular/router');
var login_routing_1 = require('./login.routing');
var can_deactivate_guard_service_1 = require('./can-deactivate-guard.service');
var auth_guard_service_1 = require('./auth-guard.service');
var adminRoutes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [auth_guard_service_1.AuthGuard]
    }
];
var appRoutes = login_routing_1.loginRoutes.concat(adminRoutes, [
    {
        path: '',
        redirectTo: "/admin",
        pathMatch: 'full'
    }
]);
exports.appRoutingProviders = [
    login_routing_1.authProviders,
    can_deactivate_guard_service_1.CanDeactivateGuard
];
// path: 路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /heroes 。
// component: 导航到此路由时，路由器需要创建的组件，如 HeroesComponent 。
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//调用 forRoot 方法是因为要在应用程序根部提供配置好的路由。 
//# sourceMappingURL=app.routing.js.map