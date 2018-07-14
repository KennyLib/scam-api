const Joi = require('joi')
const api = require('../../../api')

module.exports = {
    method: ['post'],
    path: '/api/status/list',
    config: {
        auth: false,
        tags: ['api'],
        description: 'Get todo',
        notes: '返回查询结果',
        validate: {
            payload: {
                status: Joi.description('状态更新')
            }
        }
    },
    handler: api.status.select.findAll
}
