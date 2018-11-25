angular.module('dataCoffee').controller('listTurmas', listTurmas);

listTurmas.$inject = ['$scope', '$http', '$rootScope'];

function listTurmas($scope, $http, $rootScope) {
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.turmaUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turmas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
}