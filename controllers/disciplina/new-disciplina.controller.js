angular.module('dataCoffee').controller('newDisciplina', newDisciplina);

newDisciplina.$inject = ['$scope', '$http', '$rootScope'];

function newDisciplina($scope, $http, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
        $scope.curso = $scope.cursos[0];
    }
    
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.cursoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
        $scope.curso = $scope.cursos[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}