angular.module('dataCoffee').controller('editGrupo', editGrupo);

editGrupo.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editGrupo($scope, $http, $routeParams, $rootScope) {
	$scope.reset = function (){
        $scope.name = '';
        $scope.qtde = '';
    }
	
    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/grupo.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.grupo = response.data;
        $scope.name = $scope.grupo.nome;
        $scope.qtde = $scope.grupo.qtde;
    }, function error(response) {
        console.log(response.statusText);
    });
}