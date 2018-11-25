angular.module('dataCoffee').controller('newProfessor', newProfessor);

newProfessor.$inject = ['$scope', '$rootScope'];

function newProfessor($scope, $rootScope) {
    $scope.reset = function (){
        $scope.rgm = '';
        $scope.name = '';
        $scope.email = '';
        $scope.type = $scope.types[0];
        $scope.pwd = '';
        $scope.pwdretype = '';
    }

    $http({ method: 'GET', url: $rootScope.baseUrl + $rootScope.typesAcessoUrl, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
}