angular.module('dataCoffeeAluno').controller('loginForm', loginForm);

loginForm.$inject = ['$scope', '$rootScope'];

function loginForm($scope, $rootScope){
	$rootScope.painel = false;
}