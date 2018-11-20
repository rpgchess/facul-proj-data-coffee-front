angular.module('dataCoffee', ['ngRoute'])
// Definindo Rotas
.config(function($routeProvider, $locationProvider){
	// Utilizando o HTML5 History API (TRUE)
	//$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix("!");
	
	$routeProvider
		// Geral
		.when("/",
			{
				templateUrl: "pages/welcome.html"
			}
		).when("/notify",
			{
				templateUrl: "pages/notification.html"
			}
		).when("/about",
			{
				templateUrl: "pages/about.html"
			}
		).when("/welcome",
			{
				templateUrl: "pages/welcome.html"
			}
		).when("/perfil",
			{
				templateUrl: "pages/perfil.html"
			}
		).when("/contact",
			{
				templateUrl: "pages/contact.html"
			}
		)
		// Coordenador
		.when("/professor/list",
			{
				controller: "listProfessores",
				templateUrl: "pages/list/professores.html"
			}
		).when("/professor/new",
			{
				controller: "newProfessor",
				templateUrl: "pages/new/professor.html"
			}
		).when("/professor/edit:obj",
			{
				controller: "editProfessor",
				templateUrl: "pages/new/professor.html"
			}
		).when("/curso/list",
			{
				controller: "listCursos",
				templateUrl: "pages/list/cursos.html"
			}
		).when("/curso/new",
			{
				controller: "newCurso",
				templateUrl: "pages/new/curso.html"
			}
		).when("/curso/edit:obj",
			{
				controller: "editCurso",
				templateUrl: "pages/new/curso.html"
			}
		).when("/categoria/list",
			{
				controller: "listCategorias",
				templateUrl: "pages/list/categorias.html"
			}
		).when("/categoria/new",
			{
				controller: "newCategoria",
				templateUrl: "pages/new/categoria.html"
			}
		).when("/categoria/edit:obj",
			{
				controller: "editCategoria",
				templateUrl: "pages/new/categoria.html"
			}
		)
		// Coordenador / Professor
		.when("/disciplina/list",
			{
				controller: "listDisciplinas",
				templateUrl: "pages/list/disciplinas.html"
			}
		).when("/disciplina/new",
			{
				controller: "newDisciplina",
				templateUrl: "pages/new/disciplina.html"
			}
		).when("/disciplina/edit:obj",
			{
				controller: "editDisciplina",
				templateUrl: "pages/new/disciplina.html"
			}
		)
		// Professor
		.when("/atividade/list",
			{
				controller: "listAtividades",
				templateUrl: "pages/list/atividades.html"
			}
		).when("/atividade/new",
			{
				controller: "newAtividade",
				templateUrl: "pages/new/atividade.html"
			}
		).when("/atividade/edit:obj",
			{
				controller: "editAtividade",
				templateUrl: "pages/new/atividade.html"
			}
		).when("/aluno/list",
			{
				controller: "listAlunos",
				templateUrl: "pages/list/alunos.html"
			}
		).when("/aluno/new",
			{
				controller: "newAluno",
				templateUrl: "pages/new/aluno.html"
			}
		).when("/aluno/edit:obj",
			{
				controller: "editAluno",
				templateUrl: "pages/new/aluno.html"
			}
		).when("/turma/list",
			{
				controller: "listTurmas",
				templateUrl: "pages/list/turmas.html"
			}
		).when("/turma/new",
			{
				controller: "newTurma",
				templateUrl: "pages/new/turma.html"
			}
		).when("/turma/edit:obj",
			{
				controller: "editTurma",
				templateUrl: "pages/new/turma.html"
			}
		).when("/periodo/list",
			{
				controller: "listPeriodos",
				templateUrl: "pages/list/periodos.html"
			}
		).when("/periodo/new",
			{
				controller: "newPeriodo",
				templateUrl: "pages/new/periodo.html"
			}
		).when("/periodo/edit:obj",
			{
				controller: "editPeriodo",
				templateUrl: "pages/new/periodo.html"
			}
		).when("/report/professor",
			{
				templateUrl: "pages/report.html"
			}
		)
		// Aluno
		.when("/aluno/verify",
			{
				templateUrl: "aluno-valid.html"
			}
		).when("/aluno/make",
			{
				templateUrl: "aluno-make.html"
			}
		).when("/aluno/make:obj",
			{
				templateUrl: "aluno-make.html"
			}
		).when("/grupo/list",
			{
				controller: "listGrupos",
				templateUrl: "pages/list/grupos.html"
			}
		).when("/grupo/new",
			{
				controller: "newGrupo",
				templateUrl: "pages/new/grupo.html"
			}
		).when("/grupo/edit:obj",
			{
				controller: "editGrupo",
				templateUrl: "pages/new/grupo.html"
			}
		).when("/report/aluno",
			{
				templateUrl: "aluno-report.html"
			}
		).otherwise(
			{
				redirectTo: "/"
			}
		)
})

.run(function($rootScope, $location) {
	$rootScope.baseUrl = "http://localhost:8080/";
	$rootScope.alunoUrl = "data/alunos.json";
	$rootScope.atividadeUrl = "data/atividades.json";
	$rootScope.categoriaUrl = "data/categorias.json";
	$rootScope.cursoUrl = "data/cursos.json";
	$rootScope.disciplinaUrl = "data/disciplinas.json";
	$rootScope.grupoUrl = "data/grupos.json";
	$rootScope.periodoUrl = "data/periodos.json";
	$rootScope.professorUrl = "data/professores.json";
	$rootScope.turmaUrl = "data/turmas.json";
	$rootScope.home = function (){
		$location.path('/')
	}
})