const Joi = require('joi')
const api = require('../../../api')

module.exports = {
    method: 'GET',
    path: '/api/scam/create',
    config: {
        auth: false,
        tags: ['api'],
        description: 'Get todo',
        notes: '返回插入结果',
        validate: {
            query: {
                content: Joi.string().required().description('提交主题内容'),
                wechartjson: Joi.string().required().description('微信登录相关信息')
            }
        }
    },
    handler: api.scaminfo.insert
}
