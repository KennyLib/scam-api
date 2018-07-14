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

]
module.exports = () => {
    return resRoutes
} 