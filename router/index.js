var requireDirectory = require('require-directory');
let routes = requireDirectory(module);
let resRoutes = [
    routes.static,
    // routes.home,
    routes.api.index,
    routes.api.scam.list,
    routes.api.scam.getbyid,
    routes.api.scam.create,
    routes.api.scam.update,
    routes.api.status.list,
    routes.api.status.create,
    routes.api.status.update,
    routes.api.status.getbyid,
]
module.exports = () => {
    return resRoutes
} 