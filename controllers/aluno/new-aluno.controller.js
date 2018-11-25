angular.module('dataCoffee').controller('newAluno', newAluno);

newAluno.$inject = ['$scope', '$http', '$rootScope'];

function newAluno($scope, $http, $rootScope) {
    $scope.reset = function (){
        $scope.rgm = '';
        $scope.name = '';
        $scope.periodo = $scope.periodos[0];
        $scope.turma = $scope.turmas[0];
        $scope.email = '';
    }
    
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.periodoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.periodos = response.data;
        $scope.periodo = $scope.periodos[0];
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.turmaUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turmas = response.data;
        $scope.turma = $scope.turmas[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}