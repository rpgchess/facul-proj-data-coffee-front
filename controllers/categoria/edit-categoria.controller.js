angular.module('dataCoffee').controller('editCategoria', editCategoria);

editCategoria.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editCategoria($scope, $http, $routeParams, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
    }
    
    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/categoria.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.categoria = response.data;
        $scope.name = $scope.categoria.nome;
    }, function error(response) {
        console.log(response.statusText);
    });
}