const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');


const server = express();
server.use(routes);
server.use(express.static('public')); // Aqui estamos dizendo para o express que estamos trabalhando com arquivos estáticos
server.set('view engine', 'njk'); // setando a view engine

nunjucks.configure('views', {
    express : server,
    autoescape: false,
    noCache:true 
});


server.listen(5001, () => {    
  console.log('Server is runing');
  console.log('Get ready for a Launch!');
})