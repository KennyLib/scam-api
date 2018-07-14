const Joi = require('joi')
const api = require('../../../api')

module.exports = {
    method: ['post'],
    path: '/api/status/update',
    config: {
        auth: false,
        tags: ['api','status'],
        description: 'Get todo',
        notes: '返回更新结果',
        validate: {
            payload: {
                id: Joi.number().description('ID'),
                status: Joi.description('状态名称')
            }
        }
    },
    handler: api.status.update
}
