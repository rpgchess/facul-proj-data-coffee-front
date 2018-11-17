angular.module('dataCoffee').controller('listDisciplinas', listDisciplinas);

listDisciplinas.$inject = ['$scope', '$http', '$rootScope'];

function listDisciplinas($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + 'data/disciplinas.json',
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