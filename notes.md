# 读书笔记

## Chapter01

## Chapter02

## Chapter03

- 如果将scope对象作为参数传到service中，而由于service是单例的，将一致保持对scope对象的引用，这样当scope对象随DOM元素销毁时，其保持在service中的引用并没有销毁，导致内存的膨胀。所以一般情况，我们不直接向service中传递scope对象的引用，而是直接传递想要传递的值。
```javascript
myService.updateUser({first: $scope.first, last:$scope.last, age: $scope.age});
```

