angular.module('dataCoffeeLogin', [])
// Inicialização
.run(function($rootScope, $http) {
	$rootScope.baseUrl = "http://localhost:8080/";
	$http({
        method: 'GET',
        url: $rootScope.baseUrl + 'data/professores.json',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $rootScope.professores = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });
})

.controller('loginForm', ['$scope', function loginForm($scope) {
    
}]);