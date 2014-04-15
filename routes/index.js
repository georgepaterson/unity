/**
 * Module dependencies
 */
var express = require('express');
    //controllers = require('../controllers');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var indexRouter = express.Router();

/**
 * this accepts all request methods to the `/` path
 */
indexRouter.route('/')
  .all(function (req, res) {
    res.render('index', {
      title: 'unity'
    });
  });

exports.indexRouter = indexRouter;
