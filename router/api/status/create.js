const Joi = require('joi')
const api = require('../../../api')

module.exports = {
    method: ['post'],
    path: '/api/status/create',
    config: {
        auth: false,
        tags: ['api'],
        description: 'Get todo',
        notes: '返回插入结果',
        validate: {
            payload: {
                id: Joi.description('ID'),
                parentid: Joi.description('查询ID'),
                status: Joi.description('状态名称')
            }
        }
    },
    handler: api.status.insert
}
