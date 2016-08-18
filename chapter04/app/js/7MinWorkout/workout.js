angular.module('7minWorkout').controller('WorkoutController', 
    ['$scope','$interval', '$location', '$timeout', 'workoutHistoryTracker', 'appEvents',
    function($scope, $interval, $location, $timeout, workoutHistoryTracker, appEvents){
    /**
     * 练习类
     */
    function Exercise(args){
        this.name = args.name; //练习名称
        this.title = args.title;//标题
        this.description = args.description;//描述
        this.image = args.image; //图片
        this.related = {}; //相关
        this.related.videos = args.videos;//视频
        this.nameSound = args.nameSound; //
        this.procedure = args.procedure;
    }
    /**
     * 训练类，包含多个练习
     */
    function WorkoutPlan(args){
        this.exercises = []; //练习列表
        this.name = args.name; //训练名称
        this.title = args.title; //训练标题
        this.restBetweenExercise = args.restBetweenExercise;//练习间隙
        //持续时长，计算每个练习的时长，并加上间隙时长
        this.totalWorkoutDuration = function(){
          if(this.exercises.length == 0){
              return 0;              
          }  
          var total = 0;
          angular.forEach(this.exercises, function(exercise){
             total = total + exercise.duration; 
          });
          return this.restBetweenExercise * (this.exercises.length - 1) + total;
        };
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
                  description: "A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.",
                  image: "img/JumpingJacks.png",
                  nameSound: "content/jumpingjacks.wav",
                  videos: ["dmYwZH_BNd0", "BABOdJ-2Z6o", "c4DAnQ6DtF8"],
                  procedure: "Assume an erect position, with feet together and arms at your side.\
                            <br/>Slightly bend your knees, and propel yourself a few inches into the air.\
                            <br/>While in air, bring your legs out to the side about shoulder width or slightly wider.\
                            <br/>As you are moving your legs outward, you should raise your arms up over your head; arms should be slightly bent throughout the entire in-air movement.\
                            <br/>Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent"
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "wallSit",
                  title: "Wall Sit",
                  description: "A wall sit, also known as a Roman Chair, is an exercise done to strengthen the quadriceps muscles.",
                  image: "img/wallsit.png",
                  nameSound: "content/wallsit.wav",
                  videos: ["y-wV4Venusw", "MMV3v4ap4ro"],
                  procedure: "Place your back against a wall with your feet shoulder width apart and a little ways out from the wall.\
                              <br/>Then, keeping your back against the wall, lower your hips until your knees form right angles. "
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms",
                  image: "img/Pushup.png",
                  nameSound: "content/pushups.wav",
                  videos: ["Eh00_rniF8E", "ZWdBqFLNljc", "UwRLWMcOdwI", "ynPwl6qyUNM", "OicNTT2xzMI"],
                  procedure: "Lie prone on the ground with hands placed as wide or slightly wider than shoulder width. \
                              Keeping the body straight, lower body to the ground by bending arms at the elbows. \
                              Raise body up off the ground by extending the arms."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "crunches",
                  title: "Abdominal Crunches",
                  description: "The basic crunch is a abdominal exercise in a strength-training program.",
                  image: "img/crunches.png",
                  nameSound: "content/crunches.wav",
                  videos: ["Xyd_fa5zoEU", "MKmrqcoCZ-M"],
                  procedure: "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.\
                              Place your hands behind your head so your thumbs are behind your ears.\
                              Hold your elbows out to the sides but rounded slightly in.\
                              Gently pull your abdominals inward.\
                              Curl up and forward so that your head, neck, and shoulder blades lift off the floor.\
                              Hold for a moment at the top of the movement and then lower slowly back down."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "stepUpOntoChair",
                  title: "Step Up Onto Chair",
                  description: "Step exercises are ideal for building muscle in your lower body.",
                  image: "img/stepUpOntoChair.png",
                  nameSound: "content/stepup.wav",
                  videos: ["aajhW7DD1EA"],
                  procedure: "Position your chair in front of you.\
                              Stand with your feet about hip width apart, arms at your sides.\
                              Step up onto the seat with one foot, pressing down while bringing your other foot up next to it. \
                              Step back with the leading foot and bring the trailing foot down to finish one step-up."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "squat",
                  title: "Squat",
                  description: "The squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips, buttocks and quads.",
                  image: "img/squat.png",
                  nameSound: "content/squats.wav",
                  videos: ["QKKZ9AGYTi4", "UXJrBgI2RxA"],
                  procedure: "Stand with your head facing forward and your chest held up and out.\
                              Place your feet shoulder-width apart or little wider. Extend your hands straight out in front of you.\
                              Sit back and down like you're sitting into a chair. Keep your head facing straight as your upper body bends forward a bit. Rather than allowing your back to round, let your lower back arch slightly as you go down.\
                              Lower down so your thighs are parallel to the floor, with your knees over your ankles. Press your weight back into your heels.\
                              Keep your body tight, and push through your heels to bring yourself back to the starting position."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "tricepdips",
                  title: "Tricep Dips On Chair",
                  description: "A body weight exercise that targets triceps.",
                  image: "img/tricepdips.png",
                  nameSound: "content/tricepdips.wav",
                  videos: ["tKjcgfu44sI", "jox1rb5krQI"],
                  procedure: "Sit up on a chair. Your legs should be slightly extended, with your feet flat on the floor.\
                              Place your hands edges of the chair. Your palms should be down, fingertips pointing towards the floor.\
                              Without moving your legs, bring your glutes forward off the chair.\
                              Steadily lower yourself. When your elbows form 90 degrees angles, push yourself back up to starting position."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "plank",
                  title: "Plank",
                  description: "The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that involves maintaining a difficult position for extended periods of time. ",
                  image: "img/Plank.png",
                  nameSound: "content/plank.wav",
                  videos: ["pSHjTRCQxIw", "TvxNkmjdhMM"],
                  procedure: "Get into pushup position on the floor.\
                              Bend your elbows 90 degrees and rest your weight on your forearms.\
                              Your elbows should be directly beneath your shoulders, and your body should form a straight line from head to feet.\
                              Hold this position."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "highKnees",
                  title: "High Knees",
                  description: "A form exercise that develops strength and endurance of the hip flexors and quads and stretches the hip extensors.",
                  image: "img/highknees.png",
                  nameSound: "content/highknees.wav",
                  videos: ["OAJ_J3EZkdY", "8opcQdC-V-U"],
                  procedure: "Start standing with feet hip-width apart. \
                              Do inplace jog with your knees lifting as much as possible towards your chest."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "lunges",
                  title: "Lunges",
                  description: "Lunges are a good exercise for strengthening, sculpting and building several muscles/muscle groups, including the quadriceps (or thighs), the gluteus maximus (or buttocks) as well as the hamstrings. ",
                  image: "img/lunges.png",
                  nameSound: "content/lunge.wav",
                  videos: ["Z2n58m2i4jg"],
                  procedure: "Stand erect with your feet about one shoulder width apart.\
                              Put your hands on your hips, keep your back as straight as possible, relax your shoulders and keep your eyes facing directly ahead.\
                              Take a large step forward with one leg.\
                              As you step forward, lower your hips and bend your knees until they both form 90 degree angles.\
                              Return to starting position.\
                              Repeat with your alternate leg."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "pushupNRotate",
                  title: "Pushup And Rotate",
                  description: "A variation of pushup that requires you to rotate.",
                  image: "img/pushupNRotate.png",
                  nameSound: "content/pushupandrotate.wav",
                  videos: ["qHQ_E-f5278"],
                  procedure: "Assume the classic pushup position, but as you come up, rotate your body so your right arm lifts up and extends overhead.\
                              Return to the starting position, lower yourself, then push up and rotate till your left hand points toward the ceiling."
              }),
              duration: 30
          });
          workout.exercises.push({
              details: new Exercise({
                  name: "sidePlank",
                  title: "Side Plank",
                  description: "A variation to Plank done using one hand only",
                  image: "img/sideplank.png",
                  nameSound: "content/sideplank.wav",
                  videos: ["wqzrb67Dwf8", "_rdfjFSFKMY"],
                  procedure: "Lie on your side, in a straight line from head to feet, resting on your forearm.\
                              Your elbow should be directly under your shoulder.\
                              With your abdominals gently contracted, lift your hips off the floor, maintaining the line.\
                              Keep your hips square and your neck in line with your spine. Hold the position."
                }),
                duration: 30
            });

            return workout;
        }

        var restExercise;   //训练间隙
        var exerciseIntervalPromise;//训练间隙处理promise

        $scope.currentExerciseindex; //当前训练索引，初始值为-1


        /**
         * 训练结束，跳转到结束页面
         */
        var workoutComplete = function(){
            workoutHistoryTracker.endTracking(true);
            $location.path('/finish');
        };

        /**
        * 获取下一个练习
        */
        var getNextExercise = function (currentExercisePlan) {
            var nextExercise = null;
            if (currentExercisePlan === restExercise) {//当前练习为练习间隙，则从训练中弹出下一个练习
                nextExercise = $scope.workoutPlan.exercises[$scope.currentExerciseindex + 1];
            } else {
                if ($scope.currentExerciseindex + 1 < $scope.workoutPlan.exercises.length) {//当练习队列不为空，且当前练习为练习间隙，则下一个练习为间隙
                    nextExercise = restExercise;
                }
            }
            return nextExercise;
        };
        /**
         * 开始追踪训练时间
         */
        var startExerciseTimeTracking = function () {
            var promise = $interval(function () {
                ++$scope.currentExerciseDuration;
                --$scope.workoutTimeRemaining;
            }, 1000, $scope.currentExercise.duration - $scope.currentExerciseDuration);

            promise.then(function () {
                var next = getNextExercise($scope.currentExercise);
                if (next) {
                    startExercise(next);
                } else {
                    //console.log("Workout complete");
                    //$location.path('/finish');
                    workoutComplete();
                }
            }, function (error) {
                console.log('Inteval promise cancelled. Error reason -' + error);
            });
            return promise;
        };

        /**
         * 开始练习
         */
        var startExercise = function (exercisePlan) {
            $scope.currentExercise = exercisePlan;
            $scope.currentExerciseDuration = 0;
            if (exercisePlan.details.name != 'rest') {
                $scope.currentExerciseindex++;
                $scope.$emit(appEvents.workout.exerciseStarted, exercisePlan.details);
            }
            exerciseIntervalPromise = startExerciseTimeTracking();
        };

        /**
         * 暂停训练
         */
        $scope.pauseWorkout = function () {
            $interval.cancel(exerciseIntervalPromise);//取消绑定的interval
            $scope.workoutPaused = true;
        };

        /**
         * 恢复训练
         */
        $scope.resumeWorkout = function () {
            exerciseIntervalPromise = startExerciseTimeTracking();
            $scope.workoutPaused = false;
        };

        /**
         * 切换训练状态
         */
        $scope.pauseResumeToggle = function () {
            if ($scope.workoutPaused) {
                $scope.resumeWorkout();
            } else {
                $scope.pauseWorkout();
            }
        };

        



        /**
         * 启动训练
         */
        var startWorkout = function () {
            $scope.workoutPlan = createWorkout();
            $scope.workoutTimeRemaining = $scope.workoutPlan.totalWorkoutDuration();
            restExercise = {
                details: new Exercise({
                    name: "rest",
                    title: "Relax!",
                    description: "Relax a bit!",
                    image: "img/rest.png",
                }),
                duration: $scope.workoutPlan.restBetweenExercise
            };
            workoutHistoryTracker.startTracking();
            $scope.currentExerciseindex = -1;
            startExercise($scope.workoutPlan.exercises[0]);
        };

        $scope.onKeyPressed = function(event){
            if(event.which == 80 || event.which == 112){
                $scope.pauseResumeToggle();
            }
        };
        /**
         * 监视练习是否完成<br/>
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
        var init = function () {
            startWorkout();
        };
        init();

    }]);

//音频播放控制controller
//继承了WorkoutController的变量
angular.module('7minWorkout')
    .controller('WorkoutAudioController', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.exercisesAudio = [];
        var workoutPlanWatch = $scope.$watch('workoutPlan', function (newValue, oldValue) {
            if (newValue) {
                angular.forEach($scope.workoutPlan.exercises, function (exercise) {
                    $scope.exercisesAudio.push({
                        src: exercise.details.nameSound,
                        type: "audio/wav"
                    });
                });
                workoutPlanWatch();//接触绑定，不再监听
            }
        });

        //监听currentExercise变量
        $scope.$watch('currentExercise', function (newValue, oldValue) {
            if (newValue && newValue !== oldValue) {
                if ($scope.currentExercise.details.name == 'rest') {//当前练习为间隙
                    $timeout(function () {//2秒后播放下一个练习的提示
                        $scope.nextUpAudio.play();
                    }, 2000);
                    $timeout(function () {//
                        $scope.nextUpExerciseAudio.play($scope.currentExerciseindex + 1, true);
                    }, 3000);
                }
            }
        });
        //监听currentExerciseDuration变量
        $scope.$watch('currentExerciseDuration', function (newValue, oldValue) {
            if (newValue) {
                if (newValue == Math.floor($scope.currentExercise.duration / 2) &&
                    $scope.currentExercise.details.name !== 'rest') {
                    $scope.halfWayAudio.play();
                } else if (newValue == $scope.currentExercise.duration - 3) {
                    $scope.aboutToCompleteAudio.play();
                }
            }
        });

        $scope.$watch('workoutPaused', function (newValue, oldValue) {
            if (newValue) {
                $scope.ticksAudio.pause();
                $scope.nextUpAudio.pause();
                $scope.nextUpExerciseAudio.pause();
                $scope.halfWayAudio.pause();
                $scope.aboutToCompleteAudio.pause();
            } else {
                $scope.ticksAudio.play();
                if ($scope.halfWayAudio.currentTime > 0 && $scope.halfWayAudio.currentTime < $scope.halfWayAudio.duration) {
                    $scope.halfWayAudio.play();
                }
                if ($scope.aboutToCompleteAudio.currentTIme > 0 &&
                    $scope.aboutToCompleteAudio.currentTime < $scope.aboutToCompleteAudio.duration) {
                    $scope.aboutToCompleteAudio.play();
                }
            }
        })

        var init = function () {

        };
        init();
    }]);
