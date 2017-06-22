angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
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
        controller: 'InscritoCtrl'
      })

      .state('app.inscritos', {
        url: '/inscritos',
        views: {
          'menuContent': {
            templateUrl: 'templates/inscritos.html',
            controller: 'InscritoCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/app/inscritos');
  });
