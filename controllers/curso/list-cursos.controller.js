angular.module('dataCoffee').controller('listCursos', listCursos);

listCursos.$inject = ['$scope', '$http', '$rootScope'];

function listCursos($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + 'data/cursos.json',
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