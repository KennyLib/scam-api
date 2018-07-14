const Joi = require('joi')
const api = require('../../../api')

module.exports = {
    method: ['post'],
    path: '/api/scam/update',
    config: {
        auth: false,
        tags: ['api'],
        description: 'Get todo',
        notes: '返回更新结果',
        validate: {
            payload: {
                id: Joi.number().required().description('查询ID'),
                status: Joi.number().required().description('状态更新')
            }
        }
    },
    handler: api.scaminfo.update
}
