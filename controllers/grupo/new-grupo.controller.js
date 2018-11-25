angular.module('dataCoffee').controller('newGrupo', newGrupo);

newGrupo.$inject = ['$scope', '$rootScope'];

function newGrupo($scope, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
        $scope.qtde = '';
    }
}