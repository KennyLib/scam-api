var requireDirectory = require('require-directory');
let routes = requireDirectory(module);
let resRoutes = [
    routes.home,
    routes.api.index,
    routes.api.scam.list,
    routes.api.scam.create,
    routes.api.scam.update
]
module.exports = () => {
    return resRoutes
} 