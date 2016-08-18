'use strict';

angular.module('7minWorkout')
  .controller('WorkoutVideosController', ['$scope', '$modal', function ($scope, $modal) {
      $scope.playVideo = function (videoId) {
          $scope.pauseWorkout();
          var dailog = $modal.open({
              templateUrl: 'youtube-modal', //绑定模板
              controller: VideoPlayerController, //绑定controller
              scope:$scope.$new(true), //新建一个隔离的作用域
              resolve: {
                  video: function () {  //返回对象给VideoPlayerController
                      return '//www.youtube.com/embed/' + videoId;
                  }
              },
              size: 'lg'
          }).result['finally'](function () {//'finally'使用注入的方式，而不是result.finally(...)，因为finally为js的关键字
              $scope.resumeWorkout();
          });
      };
      /**
       * controller的inline形式，在外部并没有用到该controller，因此定义为inline
       **/
      var VideoPlayerController = function ($scope, $modalInstance, video) {
          $scope.video = video; //$modal.open()方法中resolve返回的对象
          $scope.ok = function () {
              $modalInstance.close();
          };
      };
      //依赖注入的另一种方式
      VideoPlayerController['$inject'] = ['$scope', '$modalInstance', 'video'];

      var init = function () {
      };
      init();
  }]);
