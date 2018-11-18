angular.module('dataCoffee').controller('newDisciplina', newDisciplina);

newDisciplina.$inject = ['$scope', '$http', '$rootScope'];

function newDisciplina($scope, $http, $rootScope) {
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
}