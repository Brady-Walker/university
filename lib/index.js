'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/version',
    handler: function (request, reply) {
        reply({"version": process.env.npm_package_version});
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
