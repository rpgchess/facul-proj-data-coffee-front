angular.module('dataCoffee').controller('newTurma', newTurma);

newTurma.$inject = ['$scope', '$rootScope'];

function newTurma($scope, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
    }
}