angular.module('dataCoffee').controller('newPeriodo', newPeriodo);

newPeriodo.$inject = ['$scope', '$rootScope'];

function newPeriodo($scope, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
    }
}