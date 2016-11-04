container 、 form-group 、 form-control 和 btn 类来自 Twitter Bootstrap 。纯粹是装饰。 
我们使用 Bootstrap 来打扮我们的表单。 嘿，一点样式都没有的表单算个啥！

ANGULAR 表单不需要任何样式库
Angular 不需要 container 、 form-group 、 form-control 和 btn 类，或者来自任何第三方库的任何样式， Angular 应用可以使用任何 CSS 库……或者啥都不用。
我们来添加样式表。

在应用的根目录下打开一个终端窗口，敲如下命令：

npm install bootstrap --save
打开 index.html 文件并且把下列链接添加到 <head> 中。

<link rel="stylesheet"   href="node_modules/bootstrap/dist/css/bootstrap.min.css"> 
 