const Hapi = require('hapi');
const Path = require('path');

(async () => {

    try {
        const server = Hapi.server({
            port: process.env.NODE_PORT, 
            host: process.env.NODE_HOST,

            routes: {
                files: {
                    relativeTo: Path.join(__dirname, 'src')
                }
            }
        });
        
        process.on('unhandledRejection', (err) => {
            console.log(err);
            process.exit(1);
        });

        await server.register(require('./conf/hapiplugins')());
        require('./conf/hapiroutes')(server)
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    } catch (err) {
        console.log(err);
    }

})();


