const api = require('../../../api')

module.exports = {
    method: ['GET', 'post'],
    path: '/api/scam/list',
    config: {
        auth: false,
        tags: ['api'],
        description: 'Get todo',
        notes: '返回查询结果',
    },
    handler: api.scaminfo.select
}
