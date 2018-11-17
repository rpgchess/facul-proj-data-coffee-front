angular.module('dataCoffee').controller('listCategorias', listCategorias);

listCategorias.$inject = ['$scope', '$http', '$rootScope'];

function listCategorias($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + 'data/categorias.json',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.categorias = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });
}