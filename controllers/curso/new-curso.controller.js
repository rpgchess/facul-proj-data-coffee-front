angular.module('dataCoffee').controller('newCurso', newCurso);

newCurso.$inject = ['$scope', '$http', '$rootScope'];

function newCurso($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + $rootScope.categoriaUrl,
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