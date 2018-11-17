angular.module('dataCoffee').controller('listGrupos', listGrupos);

listGrupos.$inject = ['$scope', '$http', '$rootScope'];

function listGrupos($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + 'data/grupos.json',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.grupos = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });
}