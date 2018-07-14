const Joi = require('joi')
const api = require('../../../api')

module.exports = {
    method: ['post'],
    path: '/api/scam/create',
    config: {
        auth: false,
        tags: ['api'],
        description: 'Get todo',
        notes: '返回插入结果',
        validate: {
        //     payload: {
        //         id: Joi.number().required().description('查询ID'),
        //         content: Joi.string().description('状态更新'),
        //         status: Joi.number().required().description('状态更新'),
        //         wechartjson: Joi.string().description('微信登录相关信息')
        //    }
        }
    },
    handler: api.scaminfo.insert
}
