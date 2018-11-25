angular.module('dataCoffeeAluno').controller('painelForm', painelForm);

painelForm.$inject = ['$scope', '$http', '$rootScope'];

function painelForm($scope, $http, $rootScope){
    $rootScope.painel = true;
    $scope.createUrl = "aluno/create.html";
    $scope.listUrl = "aluno/atividades.html";
    $http({
        method: 'GET',
        url: $rootScope.baseUrl + 'data/periodos.json',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.periodos = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({
        method: 'GET',
        url: $rootScope.baseUrl + 'data/turmas.json',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $scope.turmas = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });
}