angular.module('dataCoffee').controller('editProfessor', editProfessor);

editProfessor.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

function editProfessor($scope, $http, $routeParams, $rootScope) {
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
    
    $scope.id = $routeParams.obj; // Mudar pra POST
    $http({ method: 'GET', url: $rootScope.baseUrl + 'data/professor.json', headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.professor = response.data;
        $scope.rgm = $scope.professor.rgm;
        $scope.name = $scope.professor.nome;
        $scope.email = $scope.professor.email;
        $scope.type = $scope.types[$scope.types.findIndex(type => type.nome === $scope.professor.tipo)];
        $scope.pwd = $scope.professor.password;
        $scope.pwdretype = $scope.professor.password;
    }, function error(response) {
        console.log(response.statusText);
    });
}