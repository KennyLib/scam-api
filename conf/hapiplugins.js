const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const JWT2 = require('hapi-auth-jwt2');
const Pack = require('../package');

module.exports = () => {
    return [
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'Test API Documentation',
                    version: Pack.version
                },
            }
        },
        JWT2
    ]
}