angular.module('dataCoffee').controller('editTurma', editTurma);

editTurma.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editTurma($scope, $http, $routeParams, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
    }
    
    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/turma.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turma = response.data;
        $scope.name = $scope.turma.nome;
    }, function error(response) {
        console.log(response.statusText);
    });
}