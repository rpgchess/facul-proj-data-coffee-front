angular.module('dataCoffeeAluno', [])
// Inicialização
.run(function($rootScope) {
	$rootScope.baseUrl = "http://localhost:8080/";
})

.controller('aluno', aluno);

aluno.$inject = ['$scope', '$rootScope'];

function aluno($scope, $rootScope){

}