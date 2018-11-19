angular.module('dataCoffeeAlunoValid', [])
// Inicialização
.run(function($rootScope) {
	$rootScope.baseUrl = "http://localhost:8080/";
})

.controller('alunoValid', alunoValid);

alunoValid.$inject = ['$scope', '$rootScope'];

function alunoValid($scope, $rootScope){

}