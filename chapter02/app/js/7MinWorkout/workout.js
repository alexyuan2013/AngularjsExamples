angular.module('7minWorkout').controller('WorkoutController', 
    ['$scope','$interval', function($scope, $interval){
    /**
     * 练习类
     */
    function Exercise(args){
        this.name = args.name;
        this.title = args.title;
        this.description = args.description;
        this.image = args.image;
        this.related = {};
        this.related.videos = args.videos;
        this.nameSound = args.nameSound;
        this.procedure = args.procedure;
    }
    /**
     * 训练类，包含多个练习
     */
    function WorkoutPlan(args){
        this.exercises = [];
        this.name = args.name;
        this.title = args.title;
        this.restBetweenExercise = args.restBetweenExercise;
    }
    /**
     * 创建一个训练计划，类似与工厂方法
     */
    var createWorkout = function(){
        var workout = new WorkoutPlan({
            name: "7minWorkout",
            title: "7 Minute Workout",
            restBetweenExercise : 10
        });
        workout.exercises.push({
           details: new Exercise({
               name: "jumpingJacks",
               title: "Jumping Jacks",
               description: "Jumping Jacks",
               image: "img/JumpingJacks.png",
               videos: []
           }),
           duration: 30 
        });
        return workout;
    }
    /**
     * 开始练习
     */
    var startExercise = function (exercisePlan){
        $scope.currentExercise = exercisePlan;
        $scope.currentExerciseDuration = 0;
        $interval(function(){
            ++$scope.currentExerciseDuration;
        },
        1000,
        $scope.currentExercise.duration)
        .then(function(){//采用promise借口来实现同步
            var next = getNextExercise(exercisePlan);
            if(next){
                startExercise(next);
            } else {
                console.log("Workout complete");
            }
        });
    }
    
    
    var restExercise;
    var workoutPlan;
   
    /**
     * 启动训练
     */
    var startWorkout = function(){
        workoutPlan = createWorkout();
        restExercise = {
            details: new Exercise({
                name: "rest",
                title: "Relax!",
                description: "Relax a bit!",
                image: "img/rest.png",
            }),
            duration: workoutPlan.restBetweenExercise
        };
        startExercise(workoutPlan.exercises.shift());
    }
    /**
     * 进行下一个练习
     */
    var getNextExercise = function(currentExercisePlan){
        var nextExercise = null;
        if(currentExercisePlan === restExercise){
            nextExercise = workoutPlan.exercise.shift();
        } else {
            if(workoutPlan.exercises.length != 0){
                nextExercise = restExercise;
            }
        }
    };
    /**
     * 监视练习是否完成</br>
     * 未使用
     */
    // $scope.$watch('currentExerciseDuration', function(nVal){
    //    if(nVal == $scope.currentExercise.duration){
    //        var next = getNextExercise($scope.currentExercise);
    //        if(next) {
    //            startExercise(next);
    //        } else {
    //            console.log("Workout complete!");
    //        }
    //    } 
    // });
    /**
     * 初始化方法
     */
    var init = function(){
        startWorkout();
    }
    init();
    
}]);