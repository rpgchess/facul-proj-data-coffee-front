angular.module('dataCoffee').controller('listAtividades', listAtividades);

listAtividades.$inject = ['$scope', '$http', '$rootScope'];

function listAtividades($scope, $http, $rootScope) {
    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.atividadeUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.atividades = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
}