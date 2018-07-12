const config = require("./package.json").config;
const Hapi = require('hapi');
const Path = require('path');
const routes = require('./router')();
(async () => {
    try {
        const server = Hapi.server({
            port: process.env.port,
            host: process.env.host,
            routes: {
                files: {
                    relativeTo: Path.join(__dirname, 'src')//静态资源配置
                }
            }
        });

        process.on('unhandledRejection', (err) => {
            console.log(err);
            process.exit(1);
        });
        //插件
        await server.register(require('./conf/hapiplugins')());
        //路由
        server.route(routes)

        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    } catch (err) {
        console.log(err);
    }
})();


