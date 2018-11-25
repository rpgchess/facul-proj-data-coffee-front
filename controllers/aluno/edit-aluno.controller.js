angular.module('dataCoffee').controller('editAluno', editAluno);

editAluno.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editAluno($scope, $http, $routeParams, $rootScope) {
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
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.turmaUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turmas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/aluno.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.aluno = response.data;
        $scope.rgm = $scope.aluno.rgm;
        $scope.name = $scope.aluno.nome;
        $scope.periodo = $scope.periodos[$scope.periodos.findIndex(periodo => periodo.nome === $scope.aluno.periodo)];
        $scope.turma = $scope.turmas[$scope.turmas.findIndex(turma => turma.nome === $scope.aluno.turma)];
        $scope.email = $scope.aluno.email;
    }, function error(response) {
        console.log(response.statusText);
    });
}