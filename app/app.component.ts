//AppComponent 组件应该只处理导航。 我们来把 英雄列表 的显示职责，从 AppComponent 移到 HeroesComponent 组件中。
import  {Component} from '@angular/core';
@Component({
  selector:'my-app',
  template:`
    <router-outlet></router-outlet>
  `,
})

export class AppComponent{
}
// AppComponent 现在加上了路由器，并能显示路由到的视图了。 
//因此，为了把它从其它种类的组件中区分出来，我们称这类组件为 路由器组件 。