'use strict'

angular.module('app')
  .value('appEvent',{
    workout: { exerciseStarted: "event:workout:exerciseStarted"}
  });

angular.module('WorkoutBuilder')
  .factory("WorkoutBuilderService", ['WorkoutService', 'WorkoutPlan', 'Exercise', 
  function(WorkoutService, WorkoutPlan, Exercise){
    var service = {};
    var buildingWorkout;
    var newWorkout;

    service.startBuilding = function(name) {
      if(name){
        buildingWorkout = WorkoutService.getWorkout(name);
        newWorkout = false;
      } else {
        buildingWorkout = new WorkoutPlan({});
        newWorkout = true;
      }
      return buildingWorkout;
    }

    service.removeExercise = function(exercise) {
      buildingWorkout.exercises.splice(buildingWorkout.exercises.indexof(exercise), 1);
    };

    service.addExercise = function(exercise) {
      buildingWorkout.exercises.push({details: exercise, duration: 30});
    };

    service.moveExerciseTo = function (exercise, toIndex){
      if(toIndex < 0 || toIndex >= buildingWorkout.exercises) return;
      var currentIndex = buildingWorkout.exercises.indexof(exercise);
      buildingWorkout.exercises.splice(toIndex, 0, buildingWorkout.exercises.splice(currentIndex, 1)[0]);
    };

    return service;
  }]);