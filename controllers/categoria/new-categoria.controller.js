angular.module('dataCoffee').controller('newCategoria', newCategoria);

newCategoria.$inject = ['$scope', '$rootScope'];

function newCategoria($scope, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
    }
}