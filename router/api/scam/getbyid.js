const Joi = require('joi')
const api = require('../../../api')

module.exports = {
    method: ['post'],
    path: '/api/scam/getbyid',
    config: {
        auth: false,
        tags: ['api'],
        description: 'Get todo',
        notes: '返回查询结果',
        validate: {
            payload: {
                id: Joi.description('查询ID')
            }
        }
    },
    handler: api.scaminfo.select.findById
}
