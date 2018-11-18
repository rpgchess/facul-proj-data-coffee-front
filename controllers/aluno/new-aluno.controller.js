angular.module('dataCoffee').controller('newAluno', newAluno);

newAluno.$inject = ['$scope', '$http', '$rootScope'];

function newAluno($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + $rootScope.periodoUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.periodos = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({
        method: 'GET',
        url: $rootScope.baseUrl + $rootScope.turmaUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.turmas = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });
}