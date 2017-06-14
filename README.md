# FluxxApp - Aplicação para geração de fluxogramas - Json

Projeto criado para o teste de seleção da IntMed Software para desenvolvedor Front-End. O aplicativo usa de recursos drag-and-drop para criar uma ferramenta de geração de fluxogramas para criação de protocolos médicos, transformando os mesmos em Jsons para serem consumidos por outras aplicações.


## Clonando

Após clonar o projeto, é necessário ter instalado o node e npm na máqiona. Para executar o projeto localmente é necessário entrar na pasta do projeto e usar os seguintes comandos no terminal:

```
npm install
```

e depois

```
npm start
```

A aplicação vai poder ser acessada em localhost:8000


### Heroku

O aplicativo pode ser acessado online no Heroku [aqui][heroku].

A aplicação ainda não usa de bando de dados e todos os dados são salvos em cache, então os formulários salvos serão perdidos uma vez que a página for recarregada.

### angular-drag-and-drop-lists

O projeto utilizou da biblioteca angular-drag-and-drop-lists para o recurso de drag and drop dos elementos de fluxo. 

O repositório da biblioteca é :

https://github.com/marceljuenemann/angular-drag-and-drop-lists

Exemplos:

https://marceljuenemann.github.io/angular-drag-and-drop-lists/demo/#/nested


[heroku]: https://pacific-river-57107.herokuapp.com/#!/home
