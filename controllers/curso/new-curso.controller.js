angular.module('dataCoffee').controller('newCurso', newCurso);

newCurso.$inject = ['$scope', '$http', '$rootScope'];

function newCurso($scope, $http, $rootScope) {
    $scope.reset = function (){
        $scope.abrev = '';
        $scope.name = '';
        $scope.type = $scope.types[0];
        $scope.categoria = $scope.categorias[0];
    }

    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.typesCursoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
        $scope.type = $scope.types[0];
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.categoriaUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.categorias = response.data;
        $scope.categoria = $scope.categorias[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}