# ☕ Data Coffee Company

<p align="center">
  <img src="img/logo.png" alt="Data Coffee Company Logo" width="200" />
</p>

<p align="center">
  <strong>Sistema Acadêmico de Gerenciamento de Atividades</strong>
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-usar">Como Usar</a> •
  <a href="#-estrutura">Estrutura</a> •
  <a href="#-rotas">Rotas</a> •
  <a href="#-licença">Licença</a>
</p>

---

## 📖 Sobre

**Data Coffee Company** é um sistema web desenvolvido como projeto acadêmico para gerenciamento de atividades universitárias. A plataforma permite que coordenadores, professores e alunos organizem e acompanhem tarefas acadêmicas de forma centralizada e eficiente.

### 🎯 Problema Resolvido

Centraliza o gerenciamento de atividades acadêmicas, permitindo que:
- **Coordenadores** gerenciem professores, cursos, categorias e disciplinas
- **Professores** criem e acompanhem atividades, gerenciem alunos e turmas
- **Alunos** visualizem e submetam trabalhos acadêmicos

### 👥 Usuários do Sistema

- **Coordenadores**: Gestão administrativa completa
- **Professores**: Criação e acompanhamento de atividades
- **Alunos**: Visualização e submissão de trabalhos

---

## ✨ Funcionalidades

### 🔑 Módulo Coordenador

- ✅ **Gerenciamento de Professores**
  - Listar, criar, editar e excluir professores
  - Atribuir permissões e tipos de acesso
  
- ✅ **Gerenciamento de Cursos**
  - Cadastrar cursos (nome, abreviação, tipo, categoria)
  - Vincular cursos a disciplinas

- ✅ **Gerenciamento de Categorias**
  - Organizar cursos por categorias (Exatas, Humanas, etc.)

- ✅ **Gerenciamento de Disciplinas** _(compartilhado com professores)_

### 👨‍🏫 Módulo Professor

- ✅ **Gerenciamento de Atividades**
  - Criar, editar e listar atividades/trabalhos
  - Definir prazos de entrega
  - Anexar arquivos
  - Atribuir atividades a turmas específicas

- ✅ **Gerenciamento de Alunos**
  - Cadastrar e editar informações de alunos
  - Visualizar lista completa de alunos

- ✅ **Gerenciamento de Turmas**
  - Organizar alunos em turmas/classes
  - Vincular turmas a períodos e disciplinas

- ✅ **Gerenciamento de Grupos**
  - Criar grupos de trabalho
  - Definir quantidade de membros

- ✅ **Gerenciamento de Períodos**
  - Configurar períodos (Matutino, Vespertino, Noturno)

- ✅ **Relatórios**
  - Gerar relatórios de professor

### 👨‍🎓 Módulo Aluno

- ✅ **Login/Cadastro**
  - Autenticação separada para alunos
  - Criação de conta estudantil

- ✅ **Painel do Aluno**
  - Visualizar atividades atribuídas
  - Verificar prazos e submissões

- ✅ **Submissão de Atividades**
  - Ver detalhes de atividades
  - Submeter trabalhos
  - Acompanhar status de submissões

- ✅ **Relatórios**
  - Visualizar relatórios individuais

### 🌐 Recursos Gerais

- 📱 **Interface Responsiva**: Sidebar com navegação dropdown
- ✔️ **Validação de Formulários**: Validação AngularJS com classes Bootstrap
- 🔔 **Sistema de Notificações**: Alertas via Alertify.js
- 👤 **Perfil de Usuário**: Edição de informações pessoais
- 📄 **Páginas Informativas**: Sobre, Contato

---

## 🛠 Tecnologias

### Frontend Framework
- **AngularJS 1.x** - Framework SPA, roteamento e data binding
- **AngularJS Route** - Roteamento client-side

### UI Framework
- **Bootstrap 4** - Grid responsivo, componentes e validação de forms

### JavaScript Libraries
- **jQuery 3.3.1** - Manipulação DOM e utilitários
- **jQuery Menu Aim** - Navegação inteligente de dropdowns
- **Modernizr** - Detecção de features HTML5/CSS3
- **Alertify.js** - Sistema de notificações

### Estilo
- **CSS Customizado** - `login.css`, `style.css`, `content.css`, `aluno.css`, `sidebar.css`
- **Google Fonts** - Open Sans (300, 400, 700), Charmonman (700)

### Ícones
- **Nucleo Library** - Conjunto de ícones para navegação

---

## 🏗 Arquitetura

### Padrão MVC (Model-View-Controller)

```
┌─────────────┐
│    View     │ ← HTML templates (pages/, *.html)
│  (Angular)  │
└──────┬──────┘
       │
┌──────▼──────┐
│ Controller  │ ← AngularJS Controllers (controllers/)
│  (Angular)  │
└──────┬──────┘
       │
┌──────▼──────┐
│    Model    │ ← JSON data files (data/*.json)
│    (JSON)   │
└─────────────┘
```

### Estratégia de Roteamento

**Hash-based routing** (`#!/route`) com 3 módulos SPA separados:

1. **`dataCoffeeLogin`** - Página de login (`index.html`)
2. **`dataCoffee`** - Aplicação principal (`home.html`)
3. **`dataCoffeeAluno`** - Portal do aluno (`aluno.html`)

---

## 📁 Estrutura do Projeto

```
facul-proj-data-coffee-front/
├── 📄 index.html              # Página de login (ponto de entrada)
├── 📄 home.html               # Dashboard principal (professores/coordenadores)
├── 📄 aluno.html              # Portal do aluno
│
├── 📂 controllers/            # Controllers AngularJS (padrão MVC)
│   ├── app.js                 # Configuração principal + roteamento
│   ├── aluno/                 # CRUD de alunos
│   ├── atividade/             # CRUD de atividades
│   ├── categoria/             # CRUD de categorias
│   ├── curso/                 # CRUD de cursos
│   ├── disciplina/            # CRUD de disciplinas
│   ├── grupo/                 # CRUD de grupos
│   ├── periodo/               # CRUD de períodos
│   ├── professor/             # CRUD de professores
│   └── turma/                 # CRUD de turmas
│
├── 📂 pages/                  # Templates HTML (views)
│   ├── list/                  # Views de listagem (todas as entidades)
│   ├── new/                   # Formulários de criação/edição
│   ├── welcome.html           # Dashboard de boas-vindas
│   ├── notification.html      # Notificações
│   ├── about.html             # Sobre
│   ├── contact.html           # Contato
│   ├── perfil.html            # Perfil do usuário
│   └── report.html            # Relatórios
│
├── 📂 aluno/                  # Módulo área do aluno
│   ├── app.js                 # Config do app + roteamento
│   ├── login.html / login.js  # Login do aluno
│   ├── painel.html / painel.js # Dashboard do aluno
│   ├── create.html / create.js # Criar submissão
│   ├── atividades.html        # View de atividades
│   └── report.html            # Relatórios do aluno
│
├── 📂 data/                   # Arquivos JSON (mock backend)
│   ├── alunos.json            # Dados de alunos
│   ├── atividades.json        # Dados de atividades
│   ├── categorias.json        # Dados de categorias
│   ├── cursos.json            # Dados de cursos
│   ├── disciplinas.json       # Dados de disciplinas
│   ├── grupos.json            # Dados de grupos
│   ├── periodos.json          # Dados de períodos
│   ├── professores.json       # Dados de professores
│   ├── turmas.json            # Dados de turmas
│   └── tipos-*.json           # Definições de tipos
│
├── 📂 frameworks/             # Bibliotecas de terceiros
│   ├── angularjs/
│   ├── bootstrap/
│   ├── jquery/
│   ├── alertify/
│   └── modernizr/
│
├── 📂 css/                    # Estilos customizados
├── 📂 js/                     # JavaScript customizado
│   ├── main.js                # Controller da página de login
│   └── sidebar.js             # Lógica de navegação sidebar
├── 📂 img/                    # Imagens e ícones
└── 📄 README.md               # Este arquivo
```

---

## 🚀 Como Usar

### Pré-requisitos

1. **Servidor Web Local**:
   - Servidor rodando em `localhost:8080`
   - Opções: Apache, nginx, Python SimpleHTTPServer, Node.js http-server

2. **Navegador Web Moderno**:
   - Chrome, Firefox, Safari ou Edge
   - JavaScript habilitado
   - Suporte a HTML5 e CSS3

### Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/facul-proj-data-coffee-front.git
   cd facul-proj-data-coffee-front
   ```

2. **Inicie um servidor local**:

   **Opção 1: Com Node.js e npm (Recomendado)**
   ```bash
   # Instalar dependências (se tiver package.json)
   npm install
   
   # Iniciar servidor com hot-reload
   npm start
   # ou
   npm run dev
   ```

   **Opção 2: Python 3**
   ```bash
   python -m http.server 8080
   ```

   **Opção 3: Python 2**
   ```bash
   python -m SimpleHTTPServer 8080
   ```

   **Opção 4: Node.js (sem npm)**
   ```bash
   npx http-server -p 8080
   ```

   **Opção 5: PHP**
   ```bash
   php -S localhost:8080
   ```

3. **Acesse a aplicação**:
   - **Página de Login**: `http://localhost:8080/index.html`
   - **Dashboard Principal**: `http://localhost:8080/home.html`
   - **Portal do Aluno**: `http://localhost:8080/aluno.html`

### Usuários de Teste

```json
// Professor/Coordenador
{
  "rgm": 12345678,
  "password": "12345678",
  "nome": "Tati",
  "tipo": "Coordenador(a)",
  "email": "tati@unicid.com.br"
}

// Aluno
{
  "rgm": 18426581,
  "nome": "Claudio Almeida Martins",
  "turma": "3B/4C",
  "periodo": "Noturno",
  "email": "claudio@gmail.com"
}
```

---

## 🗺 Rotas Principais

### Aplicação Principal (`home.html`)

| Rota | Controller | Propósito |
|------|-----------|-----------|
| `/` | - | Dashboard de boas-vindas |
| `/notify` | - | Notificações (1 não lida) |
| `/perfil` | - | Perfil do usuário |
| `/professor/list` | `listProfessores` | Listar professores |
| `/professor/new` | `newProfessor` | Criar professor |
| `/professor/edit/:obj` | `editProfessor` | Editar professor |
| `/curso/list` | `listCursos` | Listar cursos |
| `/curso/new` | `newCurso` | Criar curso |
| `/disciplina/list` | `listDisciplinas` | Listar disciplinas |
| `/atividade/list` | `listAtividades` | Listar atividades |
| `/atividade/new` | `newAtividade` | Criar atividade |
| `/aluno/list` | `listAlunos` | Listar alunos |
| `/turma/list` | `listTurmas` | Listar turmas |
| `/grupo/list` | `listGrupos` | Listar grupos |
| `/periodo/list` | `listPeriodos` | Listar períodos |
| `/categoria/list` | `listCategorias` | Listar categorias |
| `/report/professor` | - | Relatórios de professor |

### Portal do Aluno (`aluno.html`)

| Rota | Controller | Propósito |
|------|-----------|-----------|
| `/` | - | Login do aluno |
| `/painel` | `painelForm` | Dashboard do aluno |
| `/create` | `createForm` | Criar submissão |
| `/report` | - | Relatórios do aluno |

---

## 📦 Modelos de Dados

### Aluno (Student)
```json
{
  "rgm": 18426581,
  "nome": "Claudio Almeida Martins",
  "turma": "3B/4C",
  "periodo": "Noturno",
  "email": "claudio@gmail.com"
}
```

### Atividade (Activity/Assignment)
```json
{
  "data": "2018-10-25",
  "entrega": "--/--/----",
  "nome": "Atividade de Teste",
  "curso": "Análise e desenvolvimento de sistemas",
  "disciplina": "Análise e Projetos de Sistemas II",
  "file": "teste.pdf",
  "group": "10",
  "turma": "3B/4C",
  "obs": "Teste"
}
```

### Professor
```json
{
  "rgm": 12345678,
  "password": "12345678",
  "nome": "Tati",
  "tipo": "Coordenador(a)",
  "email": "tati@unicid.com.br"
}
```

### Curso (Course)
```json
{
  "abrev": "ADS",
  "nome": "Análise e desenvolvimento de sistemas",
  "tipo": "Tecnológico",
  "categoria": "Exatas"
}
```

---

## 🔌 Integração com Backend

### Implementação Atual: Mock/Static JSON Backend

**Base URL**: `http://localhost:8080/`

**Endpoints de API** (configurados em `controllers/app.js` e `aluno/app.js`):

```javascript
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
$rootScope.typesCursoUrl = "data/tipos-curso.json";
$rootScope.typesAcessoUrl = "data/tipos-acesso.json";
```

### Métodos HTTP Utilizados

Todas as chamadas de API usam o serviço **`$http`** (built-in do AngularJS):

```javascript
$http({
    method: 'GET',
    url: $rootScope.baseUrl + $rootScope.alunoUrl,
    headers: { 'Content-Type': 'application/json' }
}).then(function success(response) {
    $scope.alunos = response.data;
}, function error(response) {
    console.log(response.statusText);
});
```

### Padrão de Chamadas de API

1. **Operação de Listagem**: `GET /data/{entity}s.json`
2. **Criar**: Atualmente manipulado apenas no client-side (sem POST)
3. **Editar**: Atualmente manipulado apenas no client-side (sem PUT/PATCH)
4. **Excluir**: Atualmente manipulado apenas no client-side (sem DELETE)

### Arquitetura de Backend (Esperada)

A aplicação espera uma **API REST backend** em `localhost:8080` que forneça:
- Respostas JSON para todos os endpoints de entidades
- Operações CRUD (atualmente apenas GET implementado)
- Autenticação/autorização (ainda não implementado)

> **Nota**: Este é o **frontend-only** de um projeto full-stack. O repositório do backend provavelmente existe separadamente (possivelmente chamado `facul-proj-data-coffee` ou similar).

---

## ⚙️ Configuração

### Alterar Base URL do Backend

Para conectar a um backend real, edite `controllers/app.js` e `aluno/app.js`:

```javascript
// Altere esta linha
$rootScope.baseUrl = "http://your-backend-url/";
```

### Sem Processo de Build

- ✅ **Sem compilação necessária** - HTML/CSS/JS puro
- ✅ **Sem transpilação** - JavaScript ES5
- ✅ **Sem bundling** - serving direto de arquivos
- ✅ **Sem pré-processamento CSS** - CSS puro

### Modo de Desenvolvimento

1. Edite os arquivos diretamente
2. Atualize o navegador para ver as mudanças
3. Use o DevTools do navegador para debug

---

## ⚙️ Melhorias Implementadas

Este projeto recebeu melhorias de qualidade e configuração:

### ✅ Configuração e Build
- **package.json** adicionado para gerenciamento de dependências
- Scripts npm configurados (`npm start`, `npm run dev`)
- Suporte a `http-server` e `live-server` para desenvolvimento
- EditorConfig para garantir encoding UTF-8 consistente

### ✅ Desenvolvimento
- Scripts de inicialização rápida
- Servidor de desenvolvimento com hot-reload (live-server)
- Configuração de portas padronizada (8080)
- Documentação aprimorada de instalação

### 📝 Scripts Disponíveis

```bash
# Iniciar servidor HTTP simples (abre automaticamente no navegador)
npm start

# Iniciar servidor com Python
npm run serve

# Servidor com live-reload (recarrega automaticamente ao salvar)
npm run dev
```

### 🔧 EditorConfig
Arquivo `.editorconfig` garante:
- Encoding UTF-8 em todos os arquivos
- Indentação consistente (2 espaços para web)
- Line endings Unix (LF)
- Trim trailing whitespace

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é um trabalho acadêmico desenvolvido para fins educacionais.

---

## 👨‍💻 Autores

- **Claudio Almeida Martins** - Desenvolvimento Frontend

### 📚 Projeto Acadêmico

Desenvolvido como parte do curso de **Análise e Desenvolvimento de Sistemas**.

---

## 🙏 Créditos

- **Sidebar Navigation**: Baseado em [CodyHouse Responsive Sidebar](http://codyhouse.co/?p=881)
- **Ícones**: [Nucleo Library](https://nucleoapp.com/)
- **Diagonal Movement Plugin**: [jQuery-menu-aim](https://github.com/kamens/jQuery-menu-aim)
- **Fontes**: [Google Fonts](https://fonts.google.com/) - Open Sans & Charmonman

---

<p align="center">
  Feito com ☕ e 💻 por <strong>Data Coffee Company</strong>
</p>
