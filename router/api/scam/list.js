const Joi = require('joi')
const api = require('../../../api')

module.exports = {
    method: ['post'],
    path: '/api/scam/list',
    config: {
        auth: false,
        tags: ['api'],
        description: 'Get todo',
        notes: '返回查询结果',
        validate: {
            payload: {
                status: Joi.number().required().description('状态更新')
            }
        }
    },
    handler: api.scaminfo.select.findAll
}
