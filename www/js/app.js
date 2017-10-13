// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })
  
  .state('app.tasks', {
    url: '/tasks',
    views: {
      'menuContent': {
        templateUrl: 'templates/tasks.html',
        controller: 'TasklistsCtrl'
      }
    }
  })
  
  .state('app.messages', {
    url: '/messages',
    views: {
      'menuContent': {
        templateUrl: 'templates/messages.html',
        controller: 'MessagesCtrl'
      }
    }
  })
  
  .state('app.message', {
    url: '/message',
    views: {
      'menuContent': {
        templateUrl: 'templates/message.html',
        controller: 'MessageCtrl',
        params:      {'messageId': null}
      }
    }
  })
  
   .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.task', {
    url: '/task',
    views: {
      'menuContent': {
        templateUrl: 'templates/task.html',
        controller: 'TaskCtrl',
        params:      {'taskId': null}
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
