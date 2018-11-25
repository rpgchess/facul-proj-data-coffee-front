angular.module('dataCoffee').controller('editAtividade', editAtividade);

editAtividade.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editAtividade($scope, $http, $routeParams, $rootScope) {
    $scope.reset = function (){
        $scope.opt = 1;
        $scope.dateAble = false;
        $scope.name = '';
        $scope.date = '';
        $scope.dateEnd = '';
        $scope.curso = '';
        $scope.grpQtde = '';
        $scope.curso = $scope.cursos[0];
        $scope.disciplina = $scope.disciplinas[0];
        $scope.file = '';
        $scope.obs = '';
    }
    
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.cursoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.disciplinaUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.disciplinas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/atividade.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.atividade = response.data;
        $scope.name = $scope.atividade.nome;
        $scope.curso = $scope.cursos[$scope.cursos.findIndex(curso => curso.nome === $scope.atividade.curso)];
        $scope.disciplina = $scope.disciplinas[$scope.disciplinas.findIndex(disciplina => disciplina.nome === $scope.atividade.disciplina)];
        if ($scope.atividade.group != "")
            $scope.opt = 2;
        else
            $scope.opt = 1;
        $scope.grpQtde = parseInt($scope.atividade.group);
        /*if ($scope.atividade.entrega == "") {
            $scope.dateAble = false;
            $scope.dateEnd = '';
        } else {
            $scope.dateAble = true;
            $scope.dateEnd = {
                value: new Date($scope.atividade.entrega)
            };
        }
        $scope.date = $scope.atividade.data;*/
        $scope.file = $scope.atividade.file;
        $scope.obs = $scope.atividade.obs;
    }, function error(response) {
        console.log(response.statusText);
    });
}