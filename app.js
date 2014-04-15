/**
 * Module dependencies.
 */

var express        = require('express'),
    path           = require('path'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    compress       = require('compression'),
    favicon        = require('static-favicon'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    config         = require('./config'),
    routes         = require('./routes');



var app = express();



/**
 * Express configuration.
 */
app.set('port', config.server.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app
  .use(compress())
  .use(favicon())
  .use(logger('dev'))
  .use(bodyParser())
  .use(methodOverride())
  .use(express.static(path.join(__dirname, 'public')))
  .use(routes.indexRouter)
  .use(function (req, res) {
    res.status(404).render('404', {title: 'Not Found :('});
  })
  .use(errorHandler());


app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

/**
 * Interfake configuration.
 */

var Interfake = require('interfake');
var interfake = new Interfake();

interfake.createRoute({
  request: {
    url: '/user',
    method: 'get',
    query: {
      username: 'Billy',
      password: 'Fish'
    }
  },
  response: {
    code: 200,
    delay: 3000,
    body: { response: 'f6cd3459f9a39c9784b3e328f05be0f7' }
  }
});

interfake.createRoute({
  request: {
    url: '/user',
    method: 'get',
    query: {
      username: 'Billy'
    }
  },
  response: {
    code: 200,
    delay: 1000,
    body: { response: null }
  }
});

interfake.createRoute({
  request: {
    url: '/product',
    method: 'get',
    query: {
      id: 10,
      key: 'f6cd3459f9a39c9784b3e328f05be0f7'
    }
  },
  response: {
    code: 200,
    body: { response: 'success' }
  }
});

interfake.createRoute({
  request: {
    url: '/product',
    method: 'get',
    query: {
      id: 10,
      key: null
    }
  },
  response: {
    code: 405,
    body: { response: 'failure' }
  }
});

interfake.listen(3030);