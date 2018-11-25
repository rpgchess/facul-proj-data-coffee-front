angular.module('dataCoffee').controller('editDisciplina', editDisciplina);

editDisciplina.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editDisciplina($scope, $http, $routeParams, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
        $scope.curso = $scope.cursos[0];
    }
    
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.cursoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/disciplina.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.disciplina = response.data;
        $scope.name = $scope.disciplina.nome;
        $scope.curso = $scope.cursos[$scope.cursos.findIndex(curso => curso.nome === $scope.disciplina.curso)];
    }, function error(response) {
        console.log(response.statusText);
    });
}