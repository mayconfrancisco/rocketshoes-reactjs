yarn create react-app nomeDoProjeto

remover o eslintConfig do package.json

limpar os arquivos index, app.css... e serviceworker

EditorConfig

yarn add eslint -D <br />
yarn eslint --init <br />
remover o package.lock e rodar yarn novamente <br />

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier babel-eslint <br />
configurar arquivo .eslintrc <br />
add no extends prettier e prettier/react <br />
add parser: 'babel-eslint' antes do parserOptions <br />
add prettier nos plugins <br />
sobreescrever as regras do airbnb: <br />
rules: {
  'prettier/prettier': 'error',
  'react/jsx-filename-extension': [
    'warn',
    { extensions: ['.jsx', '.js'] }
  ],
  'import/prefer-default-export': 'off'
},

yarn add eslint-plugin-react-hooks -D <br />
add 'react-hooks' aos plugins <br />
add rules: <br />
'react-hooks/rules-of-hooks': 'error',
'react-hooks/exhaustive-deps': 'warn',

criar o arquivo .prettierrc com o singlequote e o trailingcomma es5

yarn add react-router-dom //lidar com rotas na SPA

yarn add styled-components //lidar com estilos

yarn add react-icons //vários pacotes de icones

yarn add polished // lida com cores no css - escure/clarea variacoes das suas cores principais

yarn global add json-server //fake api atraves de arquivo JSON - criar o arquivo server.json <br />
json-server server.json -p 3333 -w //roda o jsonserver servindo o arquivo server.json na porta 3333 e fica ouvindo o arquivo (-w --watch)

yarn add axios // lidar com requisicoes http - melhor que o fetch do browser

yarn add redux react-redux // add api de estado redux - arquitetura flux

yarn add reactotron-react-js reactotron-redux

yarn add immer //lidar com as alteracoes no estado do redux de forma facil, atraves de um rascunho

yarn add redux-saga

yarn add reactotron-redux-saga

yarn add react-toastity //alertas tipo toast

yarn add history //history api do navegador <br/>
criar o service de history e export no history <br/>
importar o service history e Router do react-router-dom no App e substituir o BrowserRouter por router, passando o history como parametro <br/>
importar o service history no sagas e utilizar o history.push('/suaRotaAqui');

### Deploy
#### DEPLOY
para mais detalhes verifique o deployment do create-react-app https://create-react-app.dev/docs/deployment/

para dar suporte ao pushState (api de redirect de rotas do html5) no netlify precisamos criar o arquivo public/_redirects com o seguinte conteúdo: <br/>
/*  /index.html  200

