angular.module('dataCoffee').controller('listGrupos', listGrupos);

listGrupos.$inject = ['$scope', '$http', '$rootScope'];

function listGrupos($scope, $http, $rootScope) {
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.grupoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.grupos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
}