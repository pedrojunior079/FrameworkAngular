Curso Angular 13 do canal Hora de Codar no Youtube

Aula #03 - Estrutura do Angular - aprender sobre os arquivos e pastas criados na hora da instalação de 
um app de Angular.

Aula #04 - Criando componentes - aprender a criar componentes no Angular atraves do CLI

Aula #05 - Dados no template - vamos colocar dados na classe do componente no nosso template de Angular, este recurso é conhecido como interpolação, e é utlizado em todos os projetos que criamos com este framework.

Aula #06 - CSS no Angular -  aprender as maneiras de adicionar CSS no angular

Aula #07 - Compartilhamento de dados - vamos aprender a compartilhar dados do componente pai para o componente filho em Angular.

Aula #08 - Diretivas do Angular - 
ng generate component components/directives

Aula #09 - Renderização condicional - voce vai aprender a criar uma Renderização condicional em Angular ou seja, imprimir algo no template baseado em uma condicional if e else, isso permite mais flexibilidade com 
o framework.
ng generate component components/if-render

Aula #10 - Eventos no Angular - vamos começar a criar eventos com o Angular
Os eventos em frameworks de front-end são recursos essenciais
Um dos mais utilizados é o de click, quando o usuário clica em algum elemento e dispara uma função.
ng generate component components/eventos

Aula 11# - Emitindo eventos - vamos ver como emitir eventos no Angular
Esta técnica consiste em conseguir ativar um evento em um componente filho, e replicar isso para o componente pai Desta maneira conseguimos executar uma função que é controlada por outro componente

ng generate component components/emitter
ng generate component components/change-number

Aula 12# - Renderização de lista - teremos a apresentação de um recurso chamado renderização de lista, o aplicaremos no Angular
O recurso consiste em ter um array, geralmente de objetos, onde iteramos por cada um dos itens E imprimimos suas informações no template, exemplo: Uma lista de produtos da home de um e-commerce

ng generate component components/list-render

Aula 13# - A importancia das interfaces no Angular - vamos unir um conceito de TypeScript ao Angular Utilizaremos interfaces para representar nossas entidades no sistema
Por exemplo: se trabalhamos com usuários, ter uma interface User pode nos ajudar bastante ao longo do projeto Criando métodos que recebem esta interface como retorno tipado, e outras ações neste sentido.

Aula 14# - Pipe operators do Angular - você vai aprender a utilizar os pipe operators
Este recurso pode adicionar diversas funcionalidades as nossas aplicações em Angular
Ou seja, são de suma importância para executarmos algo de forma fácil no template.

ng generate component components/pipes

Aula 15# - Two Way data binding no Angular - Um recurso clássico do Angular que nos dá 
facilidade em trabalhar com os dados utilizados nos nossos formularios, lembrando que podemos
adicionar TypeScript a estes recursos.

ng generate component components/two-way-binding

Aula 16# - Services do Angular - vamos utilizar os Services para ações como requisição HTTP
separando a responsabilidade disso da classe do nosso componente, faremos isoladamente em um serviço que também poderá ser reaproveitado entre componentes.

ng generate service services/list

Aula 17# - Angular Router - voce vai aprender sobre o Angular Router, este recurso adiciona a funcionalidade de rotas as nossas aplicações de Angular. A melhor caracterista dele é que é um modulo interno, ou seja, não precisamos instala-ló, ele é desenvolvido pela propria equipe do Angular nos danndo a possibilidade de ter varias páginas na nossa SPA

Aula 18# - Requisições HTTP - veremos a maneira correta de executar requisições HTTP no Angular ou seja, vamos resgatar ou inserir recursos de uma API com o nosso framework. Este trabalho é fundamental para a inegração entre front e backend

npm install json-server --> instala servidor json

Aula 19# - Dynamic routes - selecionando dados individualmente - vamos utilizar as rotas dinamicas para acessar recursos individuais ou seja, araves da nossa API e requisicao HTTP, vamos conseguir criar uma pagina para exibir os detalhes de um item isso é muito utilizado em Angula, como também em projetos de modo geral.

ng generate component components/item-detail

Aula 20# - Excluindo dados pelo Service - voce vai aprender excluir registros através do Angular, vamos refatorar uma funcao antes feita para apenas o front-end, agora vamos fechar o ciclo e intgrar ela com uma requisicao HTTP

Aula 21# Apresentacao do projeto do curso - voce vai conhecer em detalhes o projeto que vai desenvolver no curso de Angular.

Aula 22# Setup da API - voce vai ver como configurar nossa API isso sera fundamenta para desenvolver o frontend em Angular integrado com o back-end em AdonisJS.

node ace serve

------------------------------------------------------------------------------
Curso Angular 13: Setup inicial do projeto - #23
vamos começar a criar o projeto que terá front-end em Angular
e depois conectaremos com a APÌ que foi desenvolvida em AdonisJS, um framework de Node.js

Curso Angula 13: Estruturando o projeto - #24 
vamos estruturar pos prinicpais elementos do projete de Angular e
também realizar algumas limpezas em arquivos, de instruções que não 
são necessãrios assim estaremos prontos parea criar outras funcionalidades no sistema.

ng generate component components/header
ng generate component components/footer

para resolver o erro no router-outlet usei esse comando:
ng generate module app-routing --flat --module=app
ele cria o app-routing.module.ts














