angular.module('starter.controllers', [])

  .controller('InscritoCtrl', function($scope, $http, $state, $window) {

    $http.get('http://dzyonws.herokuapp.com/listaJSON').then(function(t) {
      $scope.inscritos = t.data
    }).catch(function(error) {})

    $scope.recarregaInscritos = function() {
      $state.go($state.current, {}, {
        reload: true
      });
      $window.location.reload(true)
    }
  })
