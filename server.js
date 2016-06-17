'use strict';

// npm modules
const express = require('express');
const morgan = require('morgan');

// modules constants
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));

app.listen(port, function(){
  console.log('server up #HCKR%HCKR#', port);
});
