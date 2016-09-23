angular.module('app', ['ngRoute','ngSanitize','7minWorkout', 'mediaPlayer', 'LocalStorageModule', 'ui.bootstrap', 'ngAnimate', 'WorkoutBuilder'])
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

    $routeProvider.when('/builder', {
        redirectTo: 'builder/workouts'
    });

    $routeProvider.when('/builder/workouts', {
        templateUrl: 'partials/workoutbuilder/workouts.html',
        leftNav: 'partials/workoutbuilder/left-nav-main.html',
        topNav: 'partials/workoutbuilder/top-nav.html',
        controller: 'WorkoutListController'
    });

    $routeProvider.when('/builder/exercises', {
        templateUrl: 'partials/workoutbuilder/exercises.html',
        leftNav: 'partials/workoutbuilder/left-nav-main.html',
        topNav: 'partials/workoutbuilder/top-nav.html',
        controller: 'ExerciseListController'
    })

    $routeProvider.when('/builder/workouts/new', {
        templateUrl: '/partials/workoutbuilder/workout.html',
        leftNav: 'partials/workoutbuilder/left-nav-exercises.html',
        topNav: 'partials/workoutbuilder/top-nav.html'
    });

    $routeProvider.when('/builder/workout/:id', {
        templateUrl: 'partials/workoutbuilder/workout.html',
        leftNav: 'partials/workoutbuilder/left-nav-exercises.html',
        topNav: 'partials/workoutbuilder/top-nav.html'
    });

    $routeProvider.when('/builder/exercises/new', {
        templateUrl: 'partials/workoutbuilder/exercise.html'
    });

    $routeProvider.when('/builder/exercises/:id', {
        templateUrl: 'partials/workoutbuilder/exercise.html'
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
angular.module('WorkoutBuilder', []);



