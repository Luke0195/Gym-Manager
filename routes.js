const exprees = require('express');
const routes = exprees.Router();

routes.get('/', function(request,response){
  return response.redirect('instructors');
});


routes.get('/instructors', function(request,response){
  return response.render('instructors/index');
});
routes.get('/members', function(request,response){
  return response.render('Members Page');
});


module.exports = routes;
