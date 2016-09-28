# 读书笔记

## Chapter01

## Chapter02

## Chapter03

- 如果将scope对象作为参数传到service中，而由于service是单例的，将一致保持对scope对象的引用，这样当scope对象随DOM元素销毁时，其保持在service中的引用并没有销毁，导致内存的膨胀。所以一般情况，我们不直接向service中传递scope对象的引用，而是直接传递想要传递的值。
```javascript
myService.updateUser({first: $scope.first, last:$scope.last, age: $scope.age});
```

## Chapter04

### Route resolving的用法

resolve作为路由配置对象的属性，提供了一种向controller传递数据或者services的机制，这个controller作为路由配置改变的具体部分，即路由配置对象的controller属性。resolve对象可以是以下情况之一：

- 一个字符常量：字符名为一个service。这个并不常用，已经service可以通过注入的方式到controller中。

- 一个函数：这种情况下，函数的返回值将被作为属性名注入到对应的controller中。如果返回值是`promise`，路由将不会跳转，知道`promise`处理完成；一旦处理完成，处理结果将被注入到controller中；如果处理失败，这个再`$rootScope`中触发`$routeChangeError`事件，并且路由并不发生跳转。


### ng-options的用法

配合`<select>`使用，支持多格式的数据绑定，格式为：

`[selected] as [label] for [value] in array`

其中：
- `selected`表示被选中的值，并将其赋值给`ng-model`
- `label`表示下拉菜单中显示标签
- `value`表示数组中的选项

`selected`是可选的，当只是希望将`value`的属性赋值给`ng-model`时，可以使用`selected.property`来进行过滤:
```
<select ng-model="selected" ng-options="item.value as item.name for item in items">
</select>
```
同样的功能可以使用`<option>`标签实现：
```
<select ng-model="selected">
    <option value="{{item.value}}" label="{{item.name}}" ng-repeat="item in items" ng-selected="selected==item.value">{{item.name}}</option>
</select>
```
建议使用`ng-options`。