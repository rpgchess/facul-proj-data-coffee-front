angular.module('dataCoffee').controller('editCurso', editCurso);

editCurso.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editCurso($scope, $http, $routeParams, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
    }

    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.typesCursoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.categoriaUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.categorias = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/curso.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.curso = response.data;
        $scope.abrev = $scope.curso.abrev;
        $scope.name = $scope.curso.nome;
        $scope.type = $scope.types[$scope.types.findIndex(type => type.nome === $scope.curso.tipo)];
        $scope.categoria = $scope.categorias[$scope.categorias.findIndex(categoria => categoria.nome === $scope.curso.categoria)];
    }, function error(response) {
        console.log(response.statusText);
    });
}