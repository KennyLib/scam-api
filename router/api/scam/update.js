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
                id: Joi.description('查询ID'),
                content: Joi.description('内容'),
                status: Joi.description('状态'),
                wechartjson: Joi.description('微信登录相关信息')
            }
        }
    },
    handler: api.scaminfo.update
}
