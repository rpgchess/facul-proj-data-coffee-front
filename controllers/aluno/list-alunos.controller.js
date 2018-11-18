angular.module('dataCoffee').controller('listAlunos', listAlunos);

listAlunos.$inject = ['$scope', '$http', '$rootScope'];

function listAlunos($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + $rootScope.alunoUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.alunos = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });
}