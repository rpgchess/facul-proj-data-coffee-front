angular.module('dataCoffeeAluno', ['ngRoute'])
// Definindo Rotas
.config(function($routeProvider){
	$routeProvider
		// Geral
		.when("/",
			{
				templateUrl: "aluno/login.html"
			}
		).when("/painel",
			{
				controller: 'painelForm',
				templateUrl: "aluno/painel.html"
			}
		).when("/create",
			{
				controller: 'createForm',
				templateUrl: "aluno/create.html"
			}
		).when("/report",
			{
				templateUrl: "aluno/report.html"
			}
		).otherwise(
			{
				redirectTo: "/"
			}
		)
})
// Inicialização
.run(function($rootScope, $http, $location) {
	$rootScope.baseUrl = "http://localhost:8080/";
	$rootScope.painel = false;
	$rootScope.goPainel = function (){
		$location.path('/painel');
	}
	$http({
        method: 'GET',
        url: $rootScope.baseUrl + 'data/alunos.json',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function success(response) {
        $rootScope.alunos = response.data;
        console.log(response.data);
    }, function error(response) {
        console.log(response.statusText);
    });
});