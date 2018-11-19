angular.module('dccLogin', [])
// Inicialização
.run(function($rootScope) {
	$rootScope.baseUrl = "http://localhost:8080/";
})

.controller('loginForm', loginForm);

function loginForm(){

}