'use strict';

// Load modules

const Hapi = require('hapi');
const Hoek = require('hoek');
const Package = require('../package.json');
const Version = require('./version.js')


// Declare internals

const internals = {};

internals.init = function () {

    const server = new Hapi.Server();
    server.connection({ port: process.env.PORT || 8000 });

    server.register( Version, (err) => {

      if (err) {
        console.log(err);
      }

      server.start((err1) => {
        Hoek.assert(!err1, err1);
        console.log('Server started at: ' + server.info.uri);
      });

    });

};

internals.init();
