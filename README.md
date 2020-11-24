# TodoList

## Repositório do projeto TodoList

## Sobre o Projeto
Projeto desenvolvido no início do segundo período de ADS e SI da faculdade FICR como base para a introdução das tecnologias utilizadas durante o semestre. Ele conta com o Front-end utilizando o Quasar Framework e no Back-end 

### Para rodar o projeto localmente:

- Faça o clone ou fork/clone do repositório;
- 1º execute npm install para baixar as dependências e em seguida execute npm start para rodar o backend
- Depois execute yarn install e quasar dev no front-end

### Preparação do ambiente de trabalho para o todoListSQL

- [x] 1. Preparação do ambiente com o **Node.js**
- [x] 2. Iniciar o projeto
- [x] 3. Criar arquivo .gitignore
- [x] 4. Instalar o Express
- [x] 5. Criar/Editar server.js
- [x] 6. Instalar o Nodemon
- [x] 7. Melhorando o server.js
- [x] 8. Usar o bodyParser
- [x] 9. Rotas com Express
- [x] 10. Informando o caminho da aplicação
- [x] 11. Editando Rota e chamando o controller
- [x] 12. Editando Controller
- [x] 13. Sqlite BANCO DE DADOS
- [x] 14. Sequelize
- [x] 15. Sequelize CLI
- [x] 16. .sequelizerc
- [x] 17. Iniciar o sequelize
- [x] 18. Conexão com Banco SQLite
- [x] 19. Modelo associativo da TABELA no Sequelize
- [x] 20. Migrando Tabela modelo para o banco
- [x] 21. Criando migração
- [x] 22. Alterando o arquivo migration
- [x] 23. Enviando para o banco físico
- [x] 24. Nova Tabela **Lista** no Sequelize

    ---

1. Preparação do ambiente com o **Node.js**
    - Você deve ter instalado em seu computador o Node.js, se não houver, o download pode ser realizado através desse link [Node.js](https://nodejs.org/en/).

    ---

2. Iniciar projeto

    - Criamos uma pasta em que ficará todos os arquivos.
  
    - Utilizamos o **NPM** (Node Package Manager) ou Gerenciador de Pacote do Node. No terminal de sua preferência, já dentro da pasta criada, digitamos um dos comandos abaixo.
 
    _Obs.: Com o **npm init -y** não é necessário responder as perguntas para iniciar o projeto, ele faz as configurações automáticas._

    ~~~Shell
        npm init
    ~~~
    ~~~Shell
        npm init -y
    ~~~

    - Será gerado um arquivo chamado package.json que contém as configurações básicas para o seu projeto e os pacotes instalados posteriormente serão registrados nele.

    ---

3. Criar arquivo .gitignore

   - O **.gitignore** informa ao git para não commitar os arquivos e outras informações que forem inseridos dentro do arquivo, principalmente a pasta node_modules.

   - Dentro do arquivo inserimos o nome da pasta conforme abaixo. Após salvar a alteração a pasta **node_modules** ficará em tonalidade diferente dos demais arquivos e pastas, sinalizando que ela subirá para o Github no commit:

    ~~~Javascript
        node_modules/
    ~~~

    ---

4. Instalar o Express

   - No terminal digitamos o seguinte comando:

    ~~~Shell
        npm install express
    ~~~

   - Será criada a pasta **node_modules** contendo o pacote instalado e todos as demais dependências. Além disso, será criado também o arquivo _package-lock.json_.

   - O express será registrado no **package.json**

    ~~~JavaScript
        "dependencies": {
          "express": "^4.17.1"
        },
    ~~~

    ---

5. Criar/Editar server.js

    - No arquivo **index.js** conterá os scripts para execução do servidor de aplicação no Node.js. E apresenta como base o código abaixo que posteriormente será modificado:

    ~~~JavaScript
        const express = require('express')
        const app = express()
 
        app.get('/', function (req, res) {
        res.send('Hello World')
        })
 
        app.listen(3000)
    ~~~

    - Inserimos o código acima, em que são declaradas duas constantes. Na primeira estamos importando o express e na segunda recebendo o objeto **express()**. No **app**, passamos a porta 3000 através do método **listen()**, mas poderia ser qualquer outra, por exemplo 8080.

    - Como forma de melhorar a visualização para saber se o servidor está funcionando corretamente, atribuímos a porta a uma constante e no método **listen()** passamos ela e uma função com um **console.log** logo em seguida com uma mensagem, conforme código abaixo: 

    ~~~JavaScript
        const express = require('express');
        const app = express();

        const port = 3000;

        app.get('/', function (req, res) {
            res.send('Hello World');
        });

        app.listen(port, function () {
            console.log(`App rodando em http://localhost:${port}`);
        });
    ~~~

    - O **app.get** é para quando uma requisição **get** for feita na rota principal, que neste caso está representada como **'/'**, ela executar a função passada que vai receber uma **request (req) e uma response (res)** e vai retornar, neste caso, um texto "Hello World".

    ---

6. Instalar o Nodemon

    - O Nodemon monitora todas as alterações feitas nos arquivos da aplicação e reinicia automaticamente o servidor quando for necessário.

    ~~~Shell
        npm i -D nodemon
    ~~~

    - O **-D** serve para informar que queremos sua execução apenas em modo desenvolvimento.

    - Assim como o express, o nodemon será registrado após sua instalação no **package.json**:

    ~~~JavaScript
        "devDependencies": {
        "nodemon": "^2.0.4"
        }
    ~~~

    - Após isso, podemos ainda no **package.json**, em **scripts** inserir **"start": "nodemon index.js"** para configurar o nodemon para ser iniciado sempre que fizermos o comando **npm start**. 

    ~~~JavaScript
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon server.js"
        },
    ~~~

    - Executamos no terminal o **npm start**, assim o nodemon irá executar o index.js e ficará monitorando qualquer alteração realizada nos arquivos e reiniciando o servidor automaticamente:

    ~~~Shell
        npm start
    ~~~

    ---

7. Melhorando o server.js

    - No editor de texto, alteramos o arquivo server.js inserindo o código abaixo:

    ~~~Javascript

        const port = process.env.PORT || 3000;

        app.listen(port);

        console.log('servidor funcionando, na porta:', port);
    ~~~

    ---

8.  Usar o bodyParser

    - Utilizamos o **Body-parser** para transformar as informações no body da requisição em informação útil para a programação. Para instalarmos esse módulo utilizamos o comando abaixo:

    ~~~Shell
        npm install body-parser
    ~~~

    - No index.js acrescentamos o BodyParser após a requisição **express**, através do express com o seu módulo **app.use()** passamos o bodyParser.json().

    ~~~Javascript
        const express = require("express");
        const app = express();
        const port = process.env.PORT || 3000;
        const routes = require("./src/api/routes/usuarioRoutes.js")
    ...
        const bodyParser = require("body-parser");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    ...
        app.listen(port);

    ~~~

    ---

9.  Rotas com Express

    - Inserir a primeira rota básica apenas para informar que a rota está funcionando:

    ~~~Javascript
        app.route('/').get((req, res)=>{res.send('API todoList - Certo no método GET')});
    ~~~

    - No editor de texto, alteramos o arquivo **server.js** inserindo o **app.route()**, abaixo das requisições. Teremos nossa primeira rota que é do tipo **“get”**. Ela é composta de dois parâmetros, o primeiro é o endereço da nossa rota, no caso a raiz da aplicação **.route("/)**, já o segundo é uma função de retorno, que recebe também dois parâmetros o **“req”** (requisição) e o **“res”** (resposta), nessa função retornamos uma simples mensagem com o método **“send”** do Express.

    - Certifique-se de inserir route após as requisições anteriores: **express** e **body-parser**

    ---

10. Informando o caminho da aplicação

    - Criar pastas principal da aplicação (src), as subpastas (controllers, models, routes).

    ~~~shell

        mkdir src

        cd src

        mkdir controllers models routes

    ~~~

    - **src**: Esta pasta contém toda a parte lógica e estrutural de nossa aplicação, é nela que definimos nossos _controllers, models, routes, helpers_.
    - **src/controllers**: Responsável por armazenar todos os controllers da aplicação, centralizados em um único lugar. Geralmente é onde encontramos algumas das regras de negócio. **src/models**: Responsável por armazenar todos as models da nossa aplicação, que neste projeto serão as classes de instâncias do ORM SEQUELIZE.

    ---

11. Editando Rota e chamando o controller

    - No arquivo usuarioRoutes.js vamos apontar para o controller Usuário:

    ~~~Javascript
        module.exports = function(app) {
        const usuarios = require('../controllers/usuariosController')
        app.route('/usuarios')
            .get(usuarios.listAll)
            .post(usuarios.createOne)
    }
    ~~~

    - No editor de texto, vamos criar o arquivo **usuarioRoutes.js** em **./src/routes** internamente usar o **modulo.exports** para disponibilizar a função para outros arquivos. Instanciar o objeto **usuarios** chamando o arquivo (**usuariosController.js**) em **../controllers/** passando os médotos **get**(_listAll_) e **post**(_createOne_).

    - Após criar o arquivo _usuarioRoutes.js_, retornar ao **server.js** e inserir a chamada para a função **app** logo abaixo das instância **app.** conforme script abaixo:

    ~~~Javascript
        routes(app);
    ~~~

    ---

12. Editando Controller

    - No arquivo usuariosController.js vamos criar duas funções: a primeira lista os registros e a segundo cria os registros

    ~~~javascript
    const Usuario = require('../models').Usuario

    exports.listAll = (req, res) => {
        Usuario.findAll().then(usuarios => {
            res.send(usuarios)
        }).catch(error => {

        })   
    }

    exports.createOne = (req, res) => {
        console.log(Usuario)
        const { nome, email } = req.body
        Usuario.create({nome, email}).then(usuario => {
            res.send(usuario)
        }).catch(error => {
            res.send(error)
        })   
    }
    ~~~

13. SqlLITE BANCO DE DADOS

    - Como estamos em fase de modelagem vamos trabalhar inicialmente com SQLite.

    SQLite

    ~~~Shell
       npm i -S sqlite3
    ~~~

    ---

14. Sequelize

    - É um ORM (Object-Relational Mapper) para Node.js. Ele faz o mapeamento de dados relacionais (armazenados em tabelas, linhas e colunas) para objetos em JS. Ele permite criar, buscar, alterar e remover dados do banco usando objetos e métodos em JS, além de fazer alterações na estrutura das tabelas. Ele suporta os bancos PostgreSQL, MySQL, MSSQL e SQLite. Esse tipo de esquema sempre teremos um arquivo de configuração, responsável por fornecer os dados para que o componente de ORM possa se comunicar com o banco e aplicação.

    ~~~Shell
       npm i -S sequelize
    ~~~

    ---

15. Sequelize CLI

    - O Sequelize-CLI será utilizado apenas no ambiente de desenvolvimento. No shel utilizando o gerenciador de pacotes NPM, vamos instalar o SEQUELIZE-CLI com a flag -D para ser utilizado apenas no ambiente de desenvolvimento.

    ~~~Shell
       npm i -D sequelize-cli
    ~~~ 

    **Obs.:** Lembrando que tanto o sequelize como sequelize-cli foram inseridos dentro do arquivo package.json em duas áreas diferentes **"sequelize" ==> "dependencies"** e o **"sequelize-cli" ==> "devDependencies"**.

    ---

16. .sequelizerc

    - Personalizar o Sequelize em nosso projeto. Para configurar o sequelize, crie um arquivo na raiz do seu projeto, com o nome **.sequelizerc**. Em seu editor de texto, inserir algumas configurações de caminho das pastas do nosso projeto. Seu arquivo .sequelizerc deverá conter o seguinte conteúdo:

    ~~~Javascript
    const path = require('path')

    module.exports = {
        "config": path.resolve('./src/config', 'config.json'),
        "models-path": path.resolve('./src/models'),
        "migrations-path": path.resolve('./src/migrations'),
        "seeders-path": path.resolve('./src/seeders')
    }
    ~~~

    - O **config.json** ==> contém configuração de autenticação do banco de dados. **migrations** ==> A pasta conterá as migrações de nosso aplicativo. **models** ==> os modelos de aplicativos (Na arquitetura MVC, o model é a representação da tabela do banco de dados). **seeders** ==> Os dados de semente (são dados iniciais fornecidos com um sistema para fins de teste, treinamento ou modelagem).

    ---

17. Iniciar o sequelize

    - Iniciar o Sequelize com o npx. O **"npx"** é o comando que inicializa sem obrigação de instalar pacotes.

    ~~~Shell
       npx sequelize init
    ~~~

    ---

18. Conexão com Banco SQLite

    - Configurando a conexão com o banco no ./src/config/**config.json**. As configurações abaixo são criadas por padrão

    ~~~json
       {
        "development": {
            "username": "root",
            "password": null,
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": null,
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
       }
    ~~~

   - Iremos trabalhar com SQLlite, portanto iremos modificar o arquivo acima pelo modelo abaixo:

    ~~~json
    {
        "development": {
            "storage": "./database.sqlite3",
            "dialect": "sqlite"
        },
        "test": {
            "storage": "./database.sqlite3",
            "dialect": "sqlite"
        },
        "production": {
            "storage": "./database.sqlite3",
            "dialect": "sqlite"
        }
    }
    ~~~

    ---

19. Modelo associativo da TABELA no Sequelize

    - Criando um modelo associativo de uma tabela **Usuario** no Sequelize para ser posteriormente migrado para o banco de dados

    ~~~Shell
       npx sequelize model:generate --name Usuarios --attributes nome:string,email:string
    ~~~

    - O comando acima gera 2 arquivos: model ==> **./src/models/usuarios.js** migration ==> **./src/migrations/"timestamp"-create-usuarios.js"**.

    - O Arquivo usuarios.js - é o modelo associativo do sequelize para com o banco.
    - O Arquivo "timestamp"-create-usuario.js internamente possui dois atributos a mais inseridos pelo próprio sequelize que é **(createdAt / updatedAt)** garantindo informaçoes sobre criação e atualização de cada registro na tabela.

    **./src/migrations/"timestamp"-create-usuario.js"** não deve ser alterado. Nele consta detalhes da operação realizada, se foi operação de criação e seu timestamp.
    **timestamp**: representa um ponto específico na linha do tempo e leva em consideração o fuso horário em questão (UTC). Com isto, teremos sempre o detalhamento perante a linha do tempo real.

    **Obs.:** "POR PADRÃO" o SEQUELIZE cria o nome da tabela no plural. Ao executar o comando **(...model:generate --name usuario ...)** foi criado o arquivo em _./src/migrations/"timestamp"-create-usuario.js_ nele constava "**queryInterface.createTable('Usuarios')**, { "**U**suário**s**" - a primeira letra em maiúscula e o acréscimo do 's' no final }.

    ---

20. Migrando Tabela modelo para o banco

    - Criando uma tabela **Usuario** no banco **database.sqlite3** pelo shel utilizando o Sequelize-cli.

    ~~~Shell
       npx sequelize db:migrate
    ~~~

    ---

21. Alterar Tabela

    - Migrations foram criadas para ser um controle de versionamento de um estado para outro dos bancos de dados.

    ~~~Shell
       npx sequelize migration:create --name usuario-add-senha
    ~~~

    - Neste arquivo modelo fazemos algumas alterações antes de gravarmos no banco de dados.

    ---

22.  Fazendo a alteração no arquivo migration

    ~~~Javascript
       'use strict';

        module.exports = {
        up: async (queryInterface, Sequelize) => {
            return Promise.all([
            queryInterface.addColumn(
                'Usuarios',
                'senha',
                {
                type: Sequelize.STRING
                }
            )

            ]);
        },

        down: async (queryInterface, Sequelize) => {
            return Promise.all([
            queryInterface.removeColumn('Usuarios','senha')
            ]);
        }
        };
    ~~~

    - Neste arquivo fazemos algumas alterações nos módulos **up e down**. **UP** - é a função que indica o que modificar no banco de dados quando executarmos a migration e a **DOWN**, que funciona como um rollback, ou seja, tudo que for feito na up deve ser desfeito na down.

    ---

23.  Enviando para o banco físico

    - O Sequelize-cli irá popular na tabela **Usuarios** o campo senha declarado no arquivo migration

    ~~~Javascript
       npx sequelize db:migrate
    ~~~

    ---

### Preparação do ambiente de trabalho para o todolistvuejs

- [x] 1. Iniciar o projeto com o **Quasar Framework**
- [x] 2. Atualizar o Quasar

    ---

1. Iniciar o projeto com o **Quasar Framework**

    - 
 
    _Obs.: Com o **npm init -y** não é necessário responder as perguntas para iniciar o projeto, ele faz as configurações automáticas._

    ~~~Shell
        quasar create todolistvuejs
    ~~~

    - O nome do projeto sempre com letras minúsculas.
    - Após rodar o comando acima, aparecerá uma série de perguntas para configuração do projeto, como:
        - Descrição do projeto;
        - Autor;
        - CSS preprocessador: Stylus;
        - Quasar components e directives: auto import;
        - Features: ESLint (recommended), Vuex, Axios, Vue-i18n, IE11 support;
        - ESLint preset: Standard;
        - Yarn.

    - Logo depois digitar no terminal:

    ~~~Shell
        quasar dev
    ~~~

    - Aguarda ele terminar de processar e logo após vai abrir automaticamente no navegador uma página.
    - Pode abrir a pasta no editor de texto, modificar, salvar e ir na página do navegador sem precisar atualizar que a modificação já aparece.
    - No layout é a estrutura que vai se repetir.

    ---

2. Atualizar o Quasar e o Yarn

    ~~~Shell
        npm i -g @quasar/cli
    ~~~

    ~~~Shell
        npm i -g yarn
    ~~~

Feito com ❤️ por Irla Andrade 👋🏽 [Entre em contato!](https://www.linkedin.com/in/irlaandrade/)