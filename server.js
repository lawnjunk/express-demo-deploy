'use strict';

// npm modules
const express = require('express');
const morgan = require('morgan');

// modules constants
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));

// setup routes
app.post('/api/note', function(){
  res.json({content: 'test data'});
});

app.listen(port, function(){
  console.log('server up #HCKR%HCKR#', port);
});
