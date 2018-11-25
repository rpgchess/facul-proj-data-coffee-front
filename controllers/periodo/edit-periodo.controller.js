angular.module('dataCoffee').controller('editPeriodo', editPeriodo);

editPeriodo.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editPeriodo($scope, $http, $routeParams, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
    }
    
    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/periodo.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.periodo = response.data;
        $scope.name = $scope.periodo.nome;
    }, function error(response) {
        console.log(response.statusText);
    });
}