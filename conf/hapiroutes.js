const Joi = require('joi')
const api = require('../api')()
const people = {
    1: {
        id: 1,
        name: 'Jen Jones'
    }
};
const validate = async (decoded, request) => {

    if (!people[decoded.id]) {
        return { isValid: false };
    }
    else {
        return { isValid: true };
    }
};
module.exports = (server) => {
    server.auth.strategy('jwt', 'jwt',
        {
            key: 'NeverShareYourSecret',          // Never Share your secret key
            validate: validate,            // validate function defined above
            verifyOptions: { algorithms: ['HS256'] } // pick a strong algorithm
        });
    server.auth.default('jwt');
    server.route([{
        method: 'GET',
        path: '/',
        config: { auth: false },
        handler: (request, h) => {
            return h.file('index.html');
        }
    },
    {
        method: 'GET',
        path: '/api',
        config: {
            auth: false,
            tags: ['api'],
            description: 'Get todo',
            notes: '测试接口是否通畅',

        },
        handler: (request, h) => {
            return 'api';
        }
    },
    {
        method: 'GET',
        path: '/api/scam/list',
        config: {
            auth: false,
            tags: ['api'],
            description: 'Get todo',
            notes: '返回查询结果',
        },
        handler: api.scaminfo.select
    },
    {
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
    },
    {
        method: 'GET',
        path: '/api/scam/update',
        config: {
            auth: false,
            tags: ['api'],
            description: 'Get todo',
            notes: '返回更新结果',
            validate: {
                query: {
                    id: Joi.number().required().description('查询ID'),
                    status: Joi.number().required().description('状态更新')
                }
            }
        },
        handler: api.scaminfo.update
    }
    ]);
}
//?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A