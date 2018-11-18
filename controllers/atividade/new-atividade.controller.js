angular.module('dataCoffee').controller('newAtividade', newAtividade);

newAtividade.$inject = ['$scope', '$http', '$rootScope'];

function newAtividade($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + $rootScope.cursoUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.cursos = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({
        method: 'GET',
        url: $rootScope.baseUrl + $rootScope.disciplinaUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.disciplinas = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });
}