angular.module('dataCoffee').controller('newAtividade', newAtividade);

newAtividade.$inject = ['$scope', '$http', '$rootScope'];

function newAtividade($scope, $http, $rootScope) {
    $scope.reset = function (){
        $scope.opt = 1;
        $scope.dateAble = false;
        $scope.name = '';
        $scope.date = '';
        $scope.dateEnd = '';
        $scope.grpQtde = '';
        $scope.curso = $scope.cursos[0];
        $scope.disciplina = $scope.disciplinas[0];
        $scope.file = '';
        $scope.desc = '';
    }
    
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.cursoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
        $scope.curso = $scope.cursos[0];
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.disciplinaUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.disciplinas = response.data;
        $scope.disciplina = $scope.disciplinas[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}