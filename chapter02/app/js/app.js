angular.module('app', ['ngRoute','7minWorkout'])
.config(function ($routeProvider, $sceDelegateProvider){//配置路由表
    $routeProvider.when('/start', {
        templateUrl: 'partials/start.html'
    });
    $routeProvider.when('/workout', {
        templateUrl: 'partials/workout.html',
        controller: 'WorkoutController'
    });
    $routeProvider.when('/finish', {
        templateUrl: 'partials/finish.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/start'
    });
    
    $sceDelegateProvider.resourceUrlWhitelist([
       'self',
       'http://*.youtube.com/**' 
    ]);
});

angular.module('7minWorkout', []);



