export class Hero {
 
  totalPage: number;
}


//用一个 TypeScript 类来为我们的组件描述 数据模型 并显示模型的各个属性
// 定义了一个构造函数参数及其类型
// 定义了一个同名的公开属性
// 当我们 new 出该类的一个实例时，把该属性初始化为相应的参数值

//最简单的模型就是一个“属性包”，用来存放应用中一件事物的事实。
// 这里我们使用三个必备字段 (id 、 name 、 power) ，和一个可选字段 (alterEgo)

// 我们可以像这样创建一个新英雄：

// let myHero =  new Hero(42, 'SkyDog',
//                        'Fetch any object at any distance',
//                        'Leslie Rollover');
// console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"